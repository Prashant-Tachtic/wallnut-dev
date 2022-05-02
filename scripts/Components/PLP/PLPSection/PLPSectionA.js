import React, { useEffect, useState, useRef } from 'react';

import PropTypes from 'prop-types';
import PLPItems from '../PLPItems';
import PLPDescription from '../PLPDescription';
import SeoCopy from '../SEOCopy';
import PLPContext from '../plpContext';
import { mergedFetchedRecommendations } from '../../../utils';

const PLPSection = ({ collectionTitle, collectionDescription, products }) => {
  const [colorFilters, setColorFilters] = useState([]);
  const [allFilters, setAllFilters] = useState({
    style: [],
    chairType: [],
    color: [],
  });

  const checkFilters = Object.values(allFilters).some((filter) => filter.length > 0);

  const filterRef = useRef();

  const combinedProducts = mergedFetchedRecommendations(products);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const filterColors = urlParams.getAll('colors');
    if (filterColors.length > 0) {
      setColorFilters([...filterColors]);
    }
  }, []);

  useEffect(() => {
    document.body.querySelector('#content').classList.remove('row');
  }, []);

  useEffect(() => {
    const productTypes = [];
    products.forEach((product) => {
      if (product.tags.includes('Dining') && !productTypes.includes('Dining')) {
        productTypes.push('Dining');
      }
      if (product.tags.includes('Lounge') && !productTypes.includes('Lounge')) {
        productTypes.push('Lounge');
      }
    });
    const tempArr = [];
    products.forEach((product) => {
      if (product.tags.includes('Classic') || product.tags.includes('Scandinavian')) {
        product.variants.forEach((variant) => {
          if (tempArr.includes(variant.options[0]) === false) {
            tempArr.push(variant.options[0]);
          }
        });
      }
    });
  }, [products]);

  const contextValue = {
    allFilters,
    setAllFilters,
    checkFilters,
  };

  const simplePLPPages = [
    'Products',
    'Shop All Chairs',
    'Labor Day Sale',
    'Pattern Chairs',
    'Herringbone Chairs',
    'White Chairs',
    'Black Friday',
    'Cyber Monday',
    'Seasonal Favorites',
    'Fresh Start Event',
  ];

  if (simplePLPPages.includes(collectionTitle)) {
    return (
      <PLPContext.Provider value={contextValue}>
        <div className="w-full">
          <PLPDescription filterRef={filterRef} {...{ collectionTitle, collectionDescription }} />
          <PLPItems
            products={combinedProducts}
            collectionTitle={collectionTitle}
            colorFilters={[]}
            simpleLayout
            holiday={collectionTitle === 'Seasonal Favorites'}
          />
          <SeoCopy title={collectionTitle} />
        </div>
      </PLPContext.Provider>
    );
  }

  return (
    <PLPContext.Provider value={contextValue}>
      <div className="w-full">
        <PLPDescription filterRef={filterRef} {...{ collectionTitle, collectionDescription }} />
        <PLPItems
          products={combinedProducts}
          collectionTitle={collectionTitle}
          colorFilters={colorFilters}
        />
        <SeoCopy title={collectionTitle} />
      </div>
    </PLPContext.Provider>
  );
};

PLPSection.defaultProps = {
  collectionDescription:
    'Our washable chairs come in a wide variety of colors. If you’re wondering which chair color perfectly complements your room theme, look no further. Here we give you a host of options, plus some tips on how to choose the perfect chair color for you.',
};

PLPSection.propTypes = {
  collectionTitle: PropTypes.string.isRequired,
  collectionDescription: PropTypes.string,
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

export default PLPSection;
