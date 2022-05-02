/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import React, { useEffect, useState, useContext } from 'react';
import PLPItem from '../PLPItem';
import {
  colorGroups,
  patternGroups,
  herringboneGroups,
  whiteGroups,
  plpColorFilterGroups,
  getVariantOptions,
  findCollectionObject,
  holidayPatternGroups,
  mergedFetchedRecommendations,
  legOptions,
} from '../../utils';
import plpContext from './plpContext';

const getCols = (product, classicDining, classicLounge, scanDining, scanLounge) => {
  if (product.title.includes('The Classic Dining Chair')) {
    return classicDining.colors;
  }

  if (product.title === 'The Classic Lounge Chair') {
    return classicLounge.colors;
  }

  if (product.title === 'The Scandinavian Dining Chair') {
    return scanDining.colors;
  }

  if (product.title === 'The Scandinavian Lounge Chair') {
    return scanLounge.colors;
  }

  return '';
};

const groups = (colorFilters, simpleLayout, holiday, collectionTitle) => {
  if (colorFilters && colorFilters.length > 0) {
    const filteredColorGroups = [];
    colorFilters.forEach((colorItem) => {
      const filteredGroup = colorGroups.filter((group) =>
        group.colors.includes(colorItem.toLowerCase())
      );
      if (!filteredColorGroups.includes(filteredGroup[0])) {
        filteredColorGroups.push(filteredGroup[0]);
      }
    });
    return [...filteredColorGroups];
  }
  if (simpleLayout && holiday) {
    return [...holidayPatternGroups];
  }
  if (collectionTitle === 'Herringbone Chairs') {
    return [...herringboneGroups];
  }
  if (collectionTitle === 'White Chairs') {
    return [...whiteGroups];
  }
  if (simpleLayout) {
    return [...patternGroups];
  }
  return [...colorGroups];
};

const PLPItems = ({ products, collectionTitle, colorFilters, simpleLayout, holiday }) => {
  const { allFilters, setAllFilters, checkFilters } = useContext(plpContext);
  const { style, chairType, color } = allFilters;
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [colGroups, setColGroups] = useState([]);

  useEffect(() => {
    const fabricGroups = groups(colorFilters, simpleLayout, holiday, collectionTitle);
    setColGroups(fabricGroups);
  }, [colorFilters]);

  const returnProductType = (product) => {
    if (product.tags.includes('Gift card')) {
      return 'Gift Card';
    }
    if (product.tags.includes('Extra Cover')) {
      return 'Extra Cover';
    }

    return 'Chair';
  };

  // join product filters

  useEffect(() => {
    const returnProducts = [...products];
    let condition = true;

    while (condition) {
      if (
        (returnProducts[0] &&
          returnProducts[0].tags &&
          returnProducts[0].tags.includes('Gift card')) ||
        (returnProducts[0] &&
          returnProducts[0].tags &&
          returnProducts[0].tags.includes('Extra Cover'))
      ) {
        returnProducts.push(returnProducts.shift());
      } else {
        condition = false;
      }
    }

    setFilteredProducts([...returnProducts]);
  }, [colorFilters, products]);

  useEffect(() => {
    if (
      collectionTitle === 'Dining Chairs' ||
      collectionTitle === 'Lounge Chairs' ||
      collectionTitle.includes('Chair Collection')
    ) {
      setAllFilters({
        style: [],
        chairType: [],
        color: ['All'],
      });
    }
  }, []);

  const sortProducts = () => {
    let productOrder = '';
    if (simpleLayout) {
      productOrder = [
        'Scandinavian Dining',
        'Scandinavian Lounge',
        'Classic Dining',
        'Classic Lounge',
        'Chair Cover',
        'E-Gift Card',
      ];
    } else {
      productOrder = [
        'Scandinavian Dining',
        'Classic Dining',
        'Scandinavian Lounge',
        'Classic Lounge',
        'Chair Cover',
        'E-Gift Card',
      ];
    }

    const productsWithMergedCD = mergedFetchedRecommendations(filteredProducts);

    const hideExtraCoverProducts = productsWithMergedCD.filter((product) => {
      const productNames = [
        'extra-chair-cover',
        'the-classic-lounge-chair',
        'the-classic-dining-chair',
        'the-scandinavian-dining-chair',
        'the-scandinavian-lounge-chair',
        'e-gift-card',
      ];
      return productNames.includes(product.handle);
    });

    const reOrder = productOrder.reduce((acc, productName) => {
      const items = hideExtraCoverProducts.filter((product) => product.title.includes(productName));
      return [...acc, ...items];
    }, []);

    return reOrder;
  };

  const combineChairVariants = (collections) =>
    collections.reduce((acc, collection) => [...acc, ...collection.variants], []);

  const producthandles = [
    'the-scandinavian-dining-chair',
    'the-scandinavian-lounge-chair',
    'the-classic-dining-chair',
    'the-classic-lounge-chair',
  ];

  const individualProducts = () => {
    const chairCollections = products.filter(
      (product) =>
        product.variants.length > 1 &&
        !product.handle.includes('cover') &&
        !product.handle.includes('gift') &&
        !product.handle.includes('exclusive')
    );

    const combineProducts = mergedFetchedRecommendations(chairCollections);

    const reOrderByCollection = producthandles.reduce((acc, productHandle) => {
      const items = combineProducts.filter((chairCollection) =>
        chairCollection.handle.includes(productHandle)
      );
      return [...acc, ...items];
    }, []);

    const uniqueColorVariants = combineChairVariants(reOrderByCollection).filter(
      (chair) => chair.option2 === null || legOptions.includes(chair.option2)
    );

    return uniqueColorVariants.map((variant) => ({
      ...findCollectionObject(combineProducts, variant),
      options: getVariantOptions(variant),
      variant,
    }));
  };

  const implementFilters = () => {
    let filteredItems = individualProducts();

    if (style.length > 0) {
      const filterByStyle = style.reduce((acc, item) => {
        const items = filteredItems.filter((product) => product.title.includes(item));
        return [...acc, ...items];
      }, []);
      filteredItems = [...filterByStyle];
    }

    if (chairType.length > 0) {
      const filterByType = chairType.reduce((acc, item) => {
        const items = filteredItems.filter((product) => product.title.includes(item));
        return [...acc, ...items];
      }, []);
      filteredItems = [...filterByType];
    }

    if (color.length > 0) {
      const combinedColors = [];
      color.forEach((group) => combinedColors.push(...plpColorFilterGroups[group]));
      const filterByColorGroup = combinedColors.reduce((acc, colorItem) => {
        const items = filteredItems.filter(
          (product) => product.variant.option1.toLowerCase() === colorItem
        );
        return [...acc, ...items];
      }, []);
      filteredItems = [...filterByColorGroup];
    }

    const uniqueVariant = {};
    const uniqueVariants = filteredItems.filter((product) => {
      if (uniqueVariant[product.variant.id]) {
        return false;
      }
      uniqueVariant[product.variant.id] = true;
      return true;
    });

    return uniqueVariants;
  };

  const colorOption = (product) => [product.variant.option1.toLowerCase()];

  return (
    <div className="grid justify-center">
      <div className="grid grid-cols-1 px-4 pt-10 justify-items-center gap-8 mb-12 max-w-screen-xxl md:grid-cols-2 xl:grid-cols-3">
        {implementFilters().map((product) => {
          if (
            checkFilters ||
            collectionTitle === 'Dining Chairs' ||
            collectionTitle === 'Lounge Chairs' ||
            collectionTitle.includes('Chair Collection')
          ) {
            return (
              <PLPItem
                key={product.variant.id}
                product={product}
                colors={colorOption(product)}
                simpleLayout
                noColorSelector
                collectionTitle={collectionTitle}
                checkFilters={checkFilters}
              />
            );
          }
          return '';
        })}
        {sortProducts().map((product) => {
          if (
            returnProductType(product) === 'Gift Card' ||
            returnProductType(product) === 'Extra Cover'
          ) {
            return (
              <PLPItem
                product={product}
                key={product.id}
                colorFilters={colorFilters}
                colors={[]}
                collectionTitle={collectionTitle}
                checkFilters={checkFilters}
              />
            );
          }

          if (simpleLayout && !checkFilters) {
            const [scanLounge, classicDining, scanDining, classicLounge] = colGroups;
            const cols = getCols(product, classicDining, classicLounge, scanDining, scanLounge);

            const variant = product.variants.find(
              (variantItem) => variantItem.option1.toLowerCase() === cols[0]
            );
            const newProduct = {
              ...product,
              options: getVariantOptions(variant),
              variant,
            };

            return (
              <PLPItem
                product={newProduct}
                colors={cols}
                colorFilters={colorFilters}
                key={newProduct.variant.id}
                simpleLayout={simpleLayout}
                collectionTitle={collectionTitle}
                checkFilters={checkFilters}
              />
            );
          }
          return '';
        })}
      </div>
    </div>
  );
};

PLPItems.defaultProps = {
  collectionTitle: '',
  simpleLayout: false,
  holiday: false,
};

PLPItems.propTypes = {
  holiday: PropTypes.bool,
  collectionTitle: PropTypes.string,
  colorFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
  simpleLayout: PropTypes.bool,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      featured_image: PropTypes.string,
      handle: PropTypes.string,
      id: PropTypes.number,
      options: PropTypes.arrayOf(PropTypes.string),
      price: PropTypes.number,
      price_max: PropTypes.number,
      price_min: PropTypes.number,
      tags: PropTypes.arrayOf(PropTypes.string),
      title: PropTypes.string,
      variants: PropTypes.arrayOf(
        PropTypes.shape({
          featured_image: PropTypes.shape({
            alt: PropTypes.string,
            height: PropTypes.number,
            product_id: PropTypes.number,
            src: PropTypes.string,
            variant_ids: PropTypes.arrayOf(PropTypes.number),
            width: PropTypes.number,
          }),
          featured_media: PropTypes.shape({
            alt: PropTypes.string,
            id: PropTypes.number,
            position: PropTypes.number,
            preview_image: PropTypes.shape({
              aspect_ratio: PropTypes.number,
              height: PropTypes.number,
              src: PropTypes.string,
              width: PropTypes.number,
            }),
          }),
          id: PropTypes.number,
          name: PropTypes.string,
          option1: PropTypes.string,
          option2: PropTypes.string,
          option3: PropTypes.string,
          options: PropTypes.arrayOf(PropTypes.string),
          price: PropTypes.number,
          public_title: PropTypes.string,
          sku: PropTypes.string,
          taxable: PropTypes.bool,
          title: PropTypes.string,
        })
      ),
    })
  ).isRequired,
};

export default PLPItems;
