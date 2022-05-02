import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ImageWithText from './ImageWithText';
import ProductRecommendation from '../ProductRecommendation';

const About = ({ blocks }) => {
  useEffect(() => {
    const element = document.getElementById('content');
    element.classList.remove('row');
  }, []);
  return (
    <div className="">
      {blocks.map((block, index) => (
        <div className={`${block.bg_color === 'offwhite' ? 'bg-creamwhite ' : ''}`}>
          <ImageWithText block={block.settings} key={index} />
        </div>
      ))}
      <ProductRecommendation title="Shop Our Washable Chairs" />
    </div>
  );
};

About.defaultProps = {
  blocks: [],
};

About.propTypes = {
  blocks: PropTypes.arrayOf(PropTypes.shape({})),
};

export default About;
