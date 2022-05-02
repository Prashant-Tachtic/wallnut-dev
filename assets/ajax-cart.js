/*= ===========================================================================
  Ajax the add to cart experience by revealing it in a side drawer
  Plugin Documentation - http://shopify.github.io/Timber/#ajax-cart
  (c) Copyright 2015 Shopify Inc. Author: Carson Shold (@cshold). All Rights Reserved.

  This file includes:
    - Basic Shopify Ajax API calls
    - Ajax cart plugin

  This requires:
    - jQuery 1.8+
    - handlebars.min.js (for cart template)
    - modernizer.min.js
    - snippet/ajax-cart-template.liquid

  Customized version of Shopify's jQuery API
  (c) Copyright 2009-2015 Shopify Inc. Author: Caroline Schnapp. All Rights Reserved.
============================================================================== */
if (typeof ShopifyAPI === 'undefined') {
  ShopifyAPI = {};
}

/*= ===========================================================================
  API Helper Functions
============================================================================== */
function attributeToString(attribute) {
  if (typeof attribute !== 'string') {
    attribute += '';
    if (attribute === 'undefined') {
      attribute = '';
    }
  }
  return jQuery.trim(attribute);
}

/*= ===========================================================================
  API Functions
============================================================================== */
ShopifyAPI.onCartUpdate = function (cart) {
  // alert('There are now ' + cart.item_count + ' items in the cart.');
};

ShopifyAPI.updateCartNote = function (note, callback) {
  const params = {
    type: 'POST',
    url: '/cart/update.js',
    data: `note=${attributeToString(note)}`,
    dataType: 'json',
    success(cart) {
      if (typeof callback === 'function') {
        callback(cart);
      } else {
        ShopifyAPI.onCartUpdate(cart);
      }
    },
    error(XMLHttpRequest, textStatus) {
      ShopifyAPI.onError(XMLHttpRequest, textStatus);
    },
  };
  jQuery.ajax(params);
};

ShopifyAPI.onError = function (XMLHttpRequest, textStatus) {
  const data = eval(`(${XMLHttpRequest.responseText})`);
  if (data.message) {
    alert(`${data.message}(${data.status}): ${data.description}`);
  }
};

/*= ===========================================================================
  POST to cart/add.js returns the JSON of the cart
    - Allow use of form element instead of just id
    - Allow custom error callback
============================================================================== */
ShopifyAPI.addItemFromForm = function (form, callback, errorCallback) {
  const params = {
    type: 'POST',
    url: '/cart/add.js',
    data: jQuery(form).serialize(),
    dataType: 'json',
    success(line_item) {
      if (typeof callback === 'function') {
        callback(line_item, form);
      } else {
        ShopifyAPI.onItemAdded(line_item, form);
      }
    },
    error(XMLHttpRequest, textStatus) {
      if (typeof errorCallback === 'function') {
        errorCallback(XMLHttpRequest, textStatus);
      } else {
        ShopifyAPI.onError(XMLHttpRequest, textStatus);
      }
    },
  };
  jQuery.ajax(params);
};

// Get from cart.js returns the cart in JSON
ShopifyAPI.getCart = function (callback) {
  jQuery.getJSON('/cart.js', (cart, textStatus) => {
    if (typeof callback === 'function') {
      callback(cart);
    } else {
      ShopifyAPI.onCartUpdate(cart);
    }
  });
};

// POST to cart/change.js returns the cart in JSON
ShopifyAPI.changeItem = function (line, quantity, callback) {
  const params = {
    type: 'POST',
    url: '/cart/change.js',
    data: `quantity=${quantity}&line=${line}`,
    dataType: 'json',
    success(cart) {
      if (typeof callback === 'function') {
        callback(cart);
      } else {
        ShopifyAPI.onCartUpdate(cart);
      }
    },
    error(XMLHttpRequest, textStatus) {
      ShopifyAPI.onError(XMLHttpRequest, textStatus);
    },
  };
  jQuery.ajax(params);
};

/*= ===========================================================================
  Ajax Shopify Add To Cart
============================================================================== */
var ajaxCart = (function (module, $) {
  // Public functions
  let init;
  let loadCart;

  // Private general variables
  let settings;
  let isUpdating;
  let $body;

  // Private plugin variables
  let $formContainer;
  let $addToCart;
  let $cartCountSelector;
  let $cartCostSelector;
  let $cartContainer;
  let $drawerContainer;

  // Private functions
  let updateCountPrice;
  let formOverride;
  let itemAddedCallback;
  let itemErrorCallback;
  let cartUpdateCallback;
  let buildCart;
  let cartCallback;
  let adjustCart;
  let adjustCartCallback;
  let createQtySelectors;
  let qtySelectors;
  let validateQty;

  /*= ===========================================================================
    Initialise the plugin and define global options
  ============================================================================== */
  init = function (options) {
    // Default settings
    settings = {
      formSelector: 'form[action^="/cart/add"]',
      cartContainer: '#CartContainer',
      addToCartSelector: 'input[type="submit"]',
      cartCountSelector: null,
      cartCostSelector: null,
      moneyFormat: '$',
      disableAjaxCart: false,
      enableQtySelectors: true,
    };

    // Override defaults with arguments
    $.extend(settings, options);

    // Select DOM elements
    $formContainer = $(settings.formSelector);
    $cartContainer = $(settings.cartContainer);
    $addToCart = $formContainer.find(settings.addToCartSelector);
    $cartCountSelector = $(settings.cartCountSelector);
    $cartCostSelector = $(settings.cartCostSelector);

    // General Selectors
    $body = $('body');

    // Track cart activity status
    isUpdating = false;

    // Setup ajax quantity selectors on the any template if enableQtySelectors is true
    if (settings.enableQtySelectors) {
      qtySelectors();
    }

    // Take over the add to cart form submit action if ajax enabled
    if (!settings.disableAjaxCart && $addToCart.length) {
      formOverride();
    }

    // Run this function in case we're using the quantity selector outside of the cart
    adjustCart();
  };

  loadCart = function () {
    $body.addClass('drawer--is-loading');
    ShopifyAPI.getCart(cartUpdateCallback);
  };

  updateCountPrice = function (cart) {
    if ($cartCountSelector) {
      $cartCountSelector.html(cart.item_count).removeClass('hidden-count');

      if (cart.item_count === 0) {
        $cartCountSelector.addClass('hidden-count');
      }
    }
    if ($cartCostSelector) {
      $cartCostSelector.html(Shopify.formatMoney(cart.total_price, settings.moneyFormat));
    }
  };

  formOverride = function () {
    $formContainer.on('submit', function (evt) {
      evt.preventDefault();

      // Add class to be styled if desired
      $addToCart.removeClass('is-added').addClass('is-adding');

      // Remove any previous quantity errors
      $('.qty-error').remove();

      ShopifyAPI.addItemFromForm(evt.target, itemAddedCallback, itemErrorCallback.bind(this));
    });
  };

  itemAddedCallback = function (product) {
    $addToCart.removeClass('is-adding').addClass('is-added');

    ShopifyAPI.getCart(cartUpdateCallback);
  };

  itemErrorCallback = function (XMLHttpRequest, textStatus) {
    const $form = $(this);
    const $button = $form.find(settings.addToCartSelector);
    const data = eval(`(${XMLHttpRequest.responseText})`);

    $button.removeClass('is-adding is-added');

    if (data.message) {
      if (data.status == 422) {
        $form.after(`<div class="errors qty-error">${data.description}</div>`);
      }
    }
  };

  cartUpdateCallback = function (cart) {
    // Update quantity and price
    updateCountPrice(cart);
    buildCart(cart);
  };

  buildCart = function (cart) {
    // Start with a fresh cart div
    $cartContainer.empty();

    // Show empty cart
    if (cart.item_count === 0) {
      $cartContainer.append('<div>' + '</div>');
      cartCallback(cart);
      return;
    }

    // Handlebars.js cart layout
    const items = [];
    let item = {};
    let data = {};
    const source = $('#CartTemplate').html();
    const template = Handlebars.compile(source);

    // Add each item to our handlebars.js data
    $.each(cart.items, (index, cartItem) => {
      /* Hack to get product image thumbnail
       *   - If image is not null
       *     - Remove file extension, add _small, and re-add extension
       *     - Create server relative link
       *   - A hard-coded url of no-image
       */
      if (cartItem.image != null) {
        var prodImg = cartItem.image.replace(/(\.[^.]*)$/, '_small$1').replace('http:', '');
      } else {
        var prodImg =
          '//cdn.shopify.com/s/assets/admin/no-image-medium-cc9732cb976dd349a0df1d39816fbcc7.gif';
      }
      if (cartItem.properties !== null) {
        $.each(cartItem.properties, (key, value) => {
          if (key.charAt(0) === '_' || !value) {
            delete cartItem.properties[key];
          }
        });
      }

      if (cartItem.properties !== null) {
        $.each(cartItem.properties, (key, value) => {
          if (key.charAt(0) === '_' || !value) {
            delete cartItem.properties[key];
          }
        });
      }

      if (cartItem.line_level_discount_allocations.length !== 0) {
        for (const discount in cartItem.line_level_discount_allocations) {
          const { amount } = cartItem.line_level_discount_allocations[discount];

          cartItem.line_level_discount_allocations[discount].formattedAmount = Shopify.formatMoney(
            amount,
            settings.moneyFormat
          );
        }
      }

      if (cart.cart_level_discount_applications.length !== 0) {
        for (const cartDiscount in cart.cart_level_discount_applications) {
          const cartAmount =
            cart.cart_level_discount_applications[cartDiscount].total_allocated_amount;

          cart.cart_level_discount_applications[cartDiscount].formattedAmount = Shopify.formatMoney(
            cartAmount,
            settings.moneyFormat
          );
        }
      }

      if (cartItem.unit_price) {
        var unitPrice = Shopify.formatMoney(cartItem.unit_price, settings.moneyFormat);
      } else {
        var unitPrice = '';
      }
      if (cartItem.unit_price_measurement) {
        var unitPriceMeasurement = cartItem.unit_price_measurement;
        var unitPriceBaseUnit = cartItem.unit_price_measurement.reference_unit;
        var unitReferenceValue = cartItem.unit_price_measurement.reference_value;
        var showUnitReferenceValue = cartItem.unit_price_measurement.reference_value == 1;
      } else {
        var unitPriceMeasurement = '';
        var unitPriceBaseUnit = '';
        var unitReferenceValue = '';
        var showUnitReferenceValue = false;
      }

      if (cartItem.selling_plan_allocation) {
        var sellingPlanAllocation = cartItem.selling_plan_allocation.selling_plan;
        var sellingPlanAllocationName = cartItem.selling_plan_allocation.selling_plan.name;
      } else {
        var sellingPlanAllocation = false;
        var sellingPlanAllocationName = false;
      }
      if (cartItem.url) {
        console.log(cartItem.url)
      }
      // Create item's data object and add to 'items' array
      item = {
        id: cartItem.variant_id,
        line: index + 1, // Shopify uses a 1+ index in the API
        url: cartItem.url,
        img: prodImg,
        name: cartItem.product_title,
        variation: cartItem.variant_title,
        properties: cartItem.properties,
        itemAdd: cartItem.quantity + 1,
        itemMinus: cartItem.quantity - 1,
        itemQty: cartItem.quantity,
        price: Shopify.formatMoney(cartItem.original_line_price, settings.moneyFormat),
        unitPrice: Shopify.formatMoney(cartItem.unit_price, settings.moneyFormat),
        unitPriceMeasurement,
        unitPriceBaseUnit,
        unitReferenceValue,
        showUnitReferenceValue,
        discountedPrice: Shopify.formatMoney(cartItem.final_line_price, settings.moneyFormat),
        discounts: cartItem.line_level_discount_allocations,
        discountsApplied: cartItem.line_level_discount_allocations.length !== 0,
        vendor: cartItem.vendor,
        sellingPlanAllocation,
        sellingPlanAllocationName,
      };

      items.push(item);
    });

    // Gather all cart data and add to DOM
    data = {
      items,
      note: cart.note,
      subTotalPrice: Shopify.formatMoney(cart.items_subtotal_price, settings.moneyFormat),
      totalPrice: Shopify.formatMoney(cart.total_price, settings.moneyFormat),
      cartTotalDiscounts: Shopify.formatMoney(cart.total_discount, settings.moneyFormat),
      cartDiscounts: cart.cart_level_discount_applications,
      cartDiscountsApplied: cart.cart_level_discount_applications.length !== 0,
      cartTotalSavings:
        cart.cart_level_discount_applications.length === 0 && cart.total_discount > 0,
    };

    $cartContainer.append(template(data));

    cartCallback(cart);
    PubSub.publish('RENDER_UPSELL', cart);
    PubSub.publish('UPDATECARD_PRICE', cart.total_price);
  };

  cartCallback = function (cart) {
    $body.removeClass('drawer--is-loading');
    $body.trigger('ajaxCart.afterCartLoad', cart);
  };

  adjustCart = function () {
    // Delegate all events because elements reload with the cart

    // Add or remove from the quantity
    $body.on('click', '.ajaxcart__qty-adjust', function () {
      const $el = $(this);
      const line = $el.data('line');
      const $qtySelector = $el.siblings('.ajaxcart__qty-num');
      var qty = parseInt($qtySelector.val().replace(/\D/g, ''));

      var qty = validateQty(qty);

      // Add or subtract from the current quantity
      if ($el.hasClass('ajaxcart__qty--plus')) {
        qty += 1;
      } else {
        qty -= 1;
        if (qty <= 0) qty = 0;
      }

      // If it has a data-line, update the cart.
      // Otherwise, just update the input's number
      if (line) {
        updateQuantity(line, qty);
      } else {
        $qtySelector.val(qty);
      }
    });

    $body.on('click', '.product-remove-button', function () {
      const line = $(this).data('line');
      if (line) {
        updateQuantity(line, 0);
      }
      const products = document.querySelectorAll('.ajaxcart__product');
      if (products.length === 1) {
        PubSub.publish('UPDATE_CART_COUNT', 0);
      }
    });

    // Update quantity based on input on change
    $body.on('change', '.ajaxcart__qty-num', function () {
      const $el = $(this);
      const line = $el.data('line');
      var qty = parseInt($el.val().replace(/\D/g, ''));

      var qty = validateQty(qty);

      // If it has a data-line, update the cart
      if (line) {
        updateQuantity(line, qty);
      }
    });

    // Prevent cart from being submitted while quantities are changing
    $body.on('submit', 'form.ajaxcart', (evt) => {
      if (isUpdating) {
        evt.preventDefault();
      }
    });

    // Highlight the text when focused
    $body.on('focus', '.ajaxcart__qty-adjust', function () {
      const $el = $(this);
      setTimeout(() => {
        $el.select();
      }, 50);
    });

    function updateQuantity(line, qty) {
      isUpdating = true;

      // Add activity classes when changing cart quantities
      const $row = $(`.ajaxcart__row[data-line="${line}"]`).addClass('is-loading');

      if (qty === 0) {
        $row.parent().addClass('is-removed');
      }

      // Slight delay to make sure removed animation is done
      setTimeout(() => {
        ShopifyAPI.changeItem(line, qty, adjustCartCallback);
      }, 250);
    }

    // Save note anytime it's changed
    $body.on('change', 'textarea[name="note"]', function () {
      const newNote = $(this).val();

      // Update the cart note in case they don't click update/checkout
      ShopifyAPI.updateCartNote(newNote, (cart) => {});
    });
  };

  adjustCartCallback = function (cart) {
    isUpdating = false;

    // Update quantity and price
    updateCountPrice(cart);

    // Reprint cart on short timeout so you don't see the content being removed
    setTimeout(() => {
      ShopifyAPI.getCart(buildCart);
    }, 150);
  };

  createQtySelectors = function () {
    // If there is a normal quantity number field in the ajax cart, replace it with our version
    if ($('input[type="number"]', $cartContainer).length) {
      $('input[type="number"]', $cartContainer).each(function () {
        const $el = $(this);
        const currentQty = $el.val();

        const itemAdd = currentQty + 1;
        const itemMinus = currentQty - 1;
        const itemQty = currentQty;

        const source = $('#AjaxQty').html();
        const template = Handlebars.compile(source);
        const data = {
          id: $el.data('id'),
          itemQty,
          itemAdd,
          itemMinus,
        };

        // Append new quantity selector then remove original
        $el.after(template(data)).remove();
      });
    }
  };

  qtySelectors = function () {
    // Change number inputs to JS ones, similar to ajax cart but without API integration.
    // Make sure to add the existing name and id to the new input element
    const numInputs = $('input[type="number"]');

    if (numInputs.length) {
      numInputs.each(function () {
        const $el = $(this);
        const currentQty = $el.val();
        const inputName = $el.attr('name');
        const inputId = $el.attr('id');

        const itemAdd = currentQty + 1;
        const itemMinus = currentQty - 1;
        const itemQty = currentQty;

        const source = $('#JsQty').html();
        const template = Handlebars.compile(source);
        const data = {
          id: $el.data('id'),
          itemQty,
          itemAdd,
          itemMinus,
          inputName,
          inputId,
        };

        // Append new quantity selector then remove original
        $el.after(template(data)).remove();
      });

      // Setup listeners to add/subtract from the input
      $('.js-qty__adjust').on('click', function () {
        const $el = $(this);
        const id = $el.data('id');
        const $qtySelector = $el.siblings('.js-qty__num');
        var qty = parseInt($qtySelector.val().replace(/\D/g, ''));

        var qty = validateQty(qty);

        // Add or subtract from the current quantity
        if ($el.hasClass('js-qty__adjust--plus')) {
          qty += 1;
        } else {
          qty -= 1;
          if (qty <= 1) qty = 1;
        }

        // Update the input's number
        $qtySelector.val(qty);
      });
    }
  };

  validateQty = function (qty) {
    if (parseFloat(qty) == parseInt(qty) && !isNaN(qty)) {
      // We have a valid number!
    } else {
      // Not a number. Default to 1.
      qty = 1;
    }
    return qty;
  };

  module = {
    init,
    load: loadCart,
  };

  return module;
})(ajaxCart || {}, jQuery);
