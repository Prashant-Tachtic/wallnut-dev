import PropTypes from 'prop-types';
import React from 'react';
import PLPItem from '../PLPItem';
import Media from '../Media';

const BSItem = ({ topSeller }) => (
  <div>
    {topSeller.price === 0 ? (
      <Media alt={topSeller.title} image={topSeller.img} />
    ) : (
      <PLPItem product={topSeller} simpleLayout noColorSelector />
    )}
  </div>
);

BSItem.propTypes = {
  topSeller: PropTypes.shape({
    price: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default BSItem;
