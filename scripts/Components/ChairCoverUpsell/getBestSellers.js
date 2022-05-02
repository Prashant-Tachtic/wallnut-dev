import bestSellingFabricsOrder from './bestSellingFabricsOrder';

const productOptions = {
  'The Scandinavian Dining Chair': {
    option1Name: 'Scandinavian Dining',
    bestSellers: ['Dark Denim Blue', 'Cerulean'],
  },
  'The Scandinavian Lounge Chair': {
    option1Name: 'Scandinavian Lounge',
    bestSellers: ['Off White', 'Light Gray'],
  },
  'The Classic Dining Chair': {
    option1Name: 'Classic Dining',
    bestSellers: ['Sand', 'Off White'],
  },
  'The Classic Lounge Chair': {
    option1Name: 'Classic Lounge',
    bestSellers: ['Dark Sage', 'Off White'],
  },
};

const filteredCartItems = (cartItems, collection) =>
  cartItems.filter((item) => item.title.includes(collection));

const findVariant = (variants, option1Name, color) =>
  variants.find((variant) => variant.option1 === option1Name && variant.option2 === color);

const findUnusedColor = (onlyColors, cartItems, collection, variants) => {
  let unusedColor = '';
  for (let i = 0; i < onlyColors.length; i += 1) {
    const color = filteredCartItems(cartItems, collection).find((item) =>
      item.variant_title.includes(onlyColors[i])
    );
    if (color === undefined) {
      unusedColor = findVariant(variants, collection, onlyColors[i]);
      break;
    }
  }
  return unusedColor;
};

const findRecommendedVariant = (
  currentProductVaraintsInCart,
  bestSellers,
  option1Name,
  variants
) => {
  const bestSeller = bestSellers.filter((item) => !currentProductVaraintsInCart.includes(item))[0];

  return findVariant(variants, option1Name, bestSeller);
};

const getBestSellers = (chair, variants, cartItems) => {
  const { product_title } = chair;
  // splitting this to take care of titles like Extra Chair Cover - Scandi. It will only use Extra Chair Cover
  const productTitile = product_title.split(' - ')[0];
  const { bestSellers, option1Name } = productOptions[productTitile];
  const getChairVariants = variants.filter((variant) => variant.option1 === option1Name);
  const onlyColors = getChairVariants.map((variant) => variant.option2);

  const reOrderOnlyColors = bestSellingFabricsOrder.reduce((acc, fabric) => {
    const items = onlyColors.filter((color) => color.toLowerCase() === fabric);
    return [...acc, ...items];
  }, []);

  const currentProductVariantsInCart = cartItems.reduce((acc, item) => {
    if (
      (item.variant_title && item.product_title === productTitile) ||
      (item.variant_title && item.product_title === 'Extra Chair Cover')
    ) {
      const option =
        item.product_title === 'Extra Chair Cover'
          ? item.variant_options[1]
          : item.variant_options[0];

      return [...acc, option];
    }

    return acc;
  }, []);

  return (
    findRecommendedVariant(currentProductVariantsInCart, bestSellers, option1Name, variants) ||
    findUnusedColor(reOrderOnlyColors, cartItems, option1Name, variants)
  );
};

export default getBestSellers;
