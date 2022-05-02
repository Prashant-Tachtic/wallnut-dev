import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import VideoComponent from './VideoComponent';
import ValuePropComponent from './ValuePropComponent';
import Hero from './HeroComponent';
import TextPropComponent from './TextPropComponent';
import ReviewComponent from './ReviewComponent';
import ProductSelector from '../ProductSection/ProductSelector';

const ProductFeature = (props) => {
  const { product } = props;
  const [variant, setVairant] = useState(null);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    const element = document.getElementsByClassName('header-wrapper');
    if (mediaQuery && element) {
      element[0].children[0].style.maxWidth = '1440px';
    }
  }, []);

  useEffect(() => {
    setVairant(product.variants.find((obj) => obj.title === `Off White / Walnut`));
  }, [product]);

  return (
    <>
      <Hero />
      <ValuePropComponent />
      <VideoComponent />
      <div className="flex justify-center items-center pt-10 md:pt-4 lg:pt-15 px-4 md:px-0">
        {variant && <ProductSelector product={product} currentVariant={variant} productFeature />}
      </div>

      <TextPropComponent />
      <ReviewComponent />
    </>
  );
};

ProductFeature.defaultProps = {
  product: {
    variants: [],
    compare_at_price: null,
  },
};

ProductFeature.propTypes = {
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
};
export default ProductFeature;
