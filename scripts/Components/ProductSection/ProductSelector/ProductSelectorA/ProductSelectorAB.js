import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Carousel from '../../../Carousel';
import { convertPriceFromNumber, handleAddToCart, getCurrentImages } from '../../../../utils';
import AfterPayCopy from '../../../AfterPayCopy';
import YotpoReviewStars from '../../../YotpoReviewStars';
import ProductQty from '../../../ProductQty';
import PDPColorFilter from '../../PDPColorFilter';
import PDPMessaging from '../PDPMessaging';
import PDPSimpleFilter from '../PDPSimpleFilter';

const getProductOptions = (product, selectedVariant, optionKey) => {
  const options = product.variants.reduce((acc, variant) => {
    if (optionKey === 'option1') {
      acc.push(variant[optionKey]);
    }

    if (variant.option1 === selectedVariant.option1) {
      acc.push(variant[optionKey]);
    }

    return acc;
  }, []);

  return [...new Set(options)];
};

const getOptions = (product, selectedVariant) => {
  const allOptions = product.options.reduce((acc, option, i) => {
    const optionKey = `option${i + 1}`;

    acc.push({
      name: option,
      options: getProductOptions(product, selectedVariant, optionKey),
    });

    return acc;
  }, []);

  return allOptions;
};

const getCurrentVariant = (product, currentVariant) => {
  const params = new URLSearchParams(window.location.search);
  const variantId = parseInt(params.get('variant'), 10);

  if (variantId && currentVariant.id !== variantId) {
    const newVariant = product.variants.find((item) => item.id === variantId);

    return newVariant || currentVariant;
  }

  return currentVariant;
};

const ProductSelectorA = ({
  product,
  currentVariant,
  reviews,
  reviewsRef = {},
  discount,
  productMessaging,
}) => {
  const { handle } = product;
  const { option1, option2, option3 } = currentVariant;
  const [selectedVariant, setSelectedVariant] = useState(
    getCurrentVariant(product, currentVariant)
  );
  const [currentOptions, setCurrentOptions] = useState({ option1, option2, option3 });
  const [showStickySubmit, setShowStickySubmit] = useState(false);
  const [qty, setQty] = useState(1);
  const selectOptions = getOptions(product, selectedVariant);

  const submitRef = useRef();

  const scrollToReviews = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: reviewsRef.current.offsetTop,
    });
  };

  const handleOptionClick = (value, option) => {
    const newOptions = { ...currentOptions, [option]: value };
    const newVariant = product.variants.find(
      (variant) =>
        variant.option1 === newOptions.option1 &&
        variant.option2 === newOptions.option2 &&
        variant.option3 === newOptions.option3
    );
    if (newVariant) {
      history.pushState('', '', `?variant=${newVariant.id}`);
      setSelectedVariant(newVariant);
      setCurrentOptions(newOptions);
    } else {
      const defaultVariant = product.variants.filter(
        (variant) => variant.option1 === newOptions.option1
      );
      history.pushState('', '', `?variant=${defaultVariant.id}`);
      setSelectedVariant(defaultVariant[0]);
      setCurrentOptions(newOptions);
    }
  };

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio !== 1 && entry.target.getBoundingClientRect().top < 0) {
            setShowStickySubmit(true);
          } else {
            setShowStickySubmit(false);
          }
        });
      },
      { threshold: 1 }
    );

    intersectionObserver.observe(submitRef.current);
  }, [product, selectedVariant]);

  const handleColorSwatch = () => {
    window.optimizely.push({
      type: 'event',
      eventName: 'handle-color-swatch',
      tags: {
        revenue: 0, // Optional in cents as integer (500 == $5.00)
        value: 0.0, // Optional as float
      },
    });
  };

  return (
    <ProductSelectorContainer>
      <div className="absolute lg:relative w-11/12 h-90 md:h-110 lg:w-7/12">
        <Carousel
          images={getCurrentImages(product, selectedVariant)}
          watchForReset={selectedVariant.sku}
        />
      </div>
      <ProductFormContainer handle={handle}>
        <form
          className="mb-3"
          onSubmit={(e) => handleAddToCart(e, product, qty, selectedVariant.id)}
        >
          <div>
            <h1 className="text-xl mb-0 md:text-2xl">{product.title}</h1>
            <div onClick={() => scrollToReviews()} onKeyDown={() => {}} role="button" tabIndex={0}>
              {reviews.reviews && (
                <YotpoReviewStars
                  stars={reviews.bottomline.average_score}
                  totalReviews={reviews.bottomline.total_review}
                  location="product-header"
                />
              )}
            </div>

            <div className="flex">
              <div className="border-none text-sm mr-4">
                <div className="col-span-7">
                  <span id="pdp-product-price" className="text-2xl">
                    {product.compare_at_price ? (
                      <div className="md:w-80">
                        <span className="font-normal text-errorRed text-2xl md:text-3xl">
                          {convertPriceFromNumber(selectedVariant.price)}
                        </span>
                        <span className="ml-1 line-through text-sm">
                          {convertPriceFromNumber(selectedVariant.compare_at_price)}
                        </span>
                        <span className="ml-2 text-errorRed text-xl md:text-2xl">
                          {discount}% Off
                        </span>
                      </div>
                    ) : (
                      convertPriceFromNumber(selectedVariant.price)
                    )}
                  </span>
                </div>
              </div>
              <Divider />
              <div className="text-blue-dark text-lg font-serif whitespace-normal ml-4.5 flex items-center">
                Free Shipping all orders
              </div>
            </div>

            <AfterPayCopy price={selectedVariant.price} product={product.title} />

            {/* This is here because extra chair cover selection needs to be at the top */}
            {handle === 'extra-chair-cover' && (
              <PDPSimpleFilter
                product={product}
                selectedVariant={selectedVariant}
                selectOptions={selectOptions}
                handleColorSwatch={handleColorSwatch}
                handleOptionClick={handleOptionClick}
              />
            )}

            {handle !== 'e-gift-card' && (
              <PDPColorFilter
                product={product}
                selectedVariant={selectedVariant}
                setSelectedVariant={setSelectedVariant}
                currentOptions={currentOptions}
                setCurrentOptions={setCurrentOptions}
                selectOptions={selectOptions}
              />
            )}

            {/* This is here because Leg selection needs to be at the bottom on Leg option products */}
            {handle !== 'extra-chair-cover' && (
              <PDPSimpleFilter
                product={product}
                selectedVariant={selectedVariant}
                selectOptions={selectOptions}
                handleColorSwatch={handleColorSwatch}
                handleOptionClick={handleOptionClick}
              />
            )}

            <div className="grid grid-cols-4 my-4">
              <ProductQty qty={qty} setQty={setQty} marginTop="1" />
              <div className="border-grey-50 border-solid center md:border-none col-span-3 ml-4">
                <AddToCartSubmitInput
                  ref={submitRef}
                  type="submit"
                  name="button"
                  value="Add to Cart"
                />
                <StickyAddToCartContainer showStickySubmit={showStickySubmit}>
                  <div className="w-20 my-auto ml-2 justify-self-end col-span-3">
                    <ProductQty qty={qty} setQty={setQty} />
                  </div>
                  <div className="col-span-2 my-auto ml-3 font-serif font-xl">
                    {convertPriceFromNumber(selectedVariant.price)}
                  </div>
                  <StickyAddToCartInput type="submit" value="Add to Cart" />
                </StickyAddToCartContainer>
              </div>
            </div>
            <PDPMessaging productMessaging={productMessaging} />
          </div>
        </form>
      </ProductFormContainer>
    </ProductSelectorContainer>
  );
};

ProductSelectorA.defaultProps = {
  product: {
    variants: [],
  },
  reviews: {},
  reviewsRef: {},
  discount: '0',
  productMessaging: {},
  // productFeature: false,
};

ProductSelectorA.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    variants: PropTypes.arrayOf(
      PropTypes.shape({
        option1: PropTypes.string,
        option2: PropTypes.string,
        option3: PropTypes.string,
      })
    ),
    handle: PropTypes.string,
    title: PropTypes.string,
    compare_at_price: PropTypes.number,
  }),
  currentVariant: PropTypes.shape({
    option1: PropTypes.string,
    option2: PropTypes.string,
    option3: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  reviews: PropTypes.shape({
    bottomline: PropTypes.shape({
      average_score: PropTypes.number,
      total_review: PropTypes.number,
    }),
    reviews: PropTypes.arrayOf(PropTypes.shape({})),
  }),
  reviewsRef: PropTypes.shape({
    current: PropTypes.shape({
      offsetTop: PropTypes.number,
    }),
  }),
  discount: PropTypes.string,
  productMessaging: PropTypes.shape({
    productMessage: PropTypes.string,
    productMessageInfo: PropTypes.string,
    productMessageHeight: PropTypes.string,
  }),
  // productFeature: PropTypes.bool,
};

const ProductSelectorContainer = styled.div.attrs({
  className: 'flex flex-col items-center max-w-screen-xl lg:flex-row',
})``;

const Divider = styled.div`
  width: 2px;
  margin: 6px 0;
  background: #435570;
`;

const ProductFormContainer = styled.div.attrs(({ handle }) => {
  let className =
    'md:mt-100 lg:mt-0 lg:pt-0 md:pl-5 self-start md:mx-28 lg:mx-5 w-full md:w-8/12 lg:w-5/12';

  if (['extra-chair-cover', 'e-gift-card'].includes(handle)) {
    className = `${className} mt-80 md:pt-4`;
  } else {
    className = `${className} mt-84 md:pt-8`;
  }

  return {
    className,
  };
})``;

const AddToCartSubmitInput = styled.input.attrs({
  className:
    'AddtoCart pb-0 pt-0 text-base font-light h-11 leading-none mb-0 md:h-auto md:py-0.5 md:w-full',
})``;

const StickyAddToCartContainer = styled.div.attrs(({ showStickySubmit }) => {
  let className = 'fixed mb-0 px-2 w-full bg-white md:hidden';

  if (showStickySubmit) {
    className = `${className} grid grid-cols-10 left-0 bottom-0 rounded-none border-t border-gray-light h-16 z-20`;
  } else {
    className = `${className} hidden`;
  }

  return {
    className,
  };
})``;

const StickyAddToCartInput = styled.input.attrs({
  className:
    'AddtoCart col-span-4 pt-0 text-sm px-0 font-light h-10 leading-none my-auto ml-4 mb-3 ',
})``;

export default ProductSelectorA;
