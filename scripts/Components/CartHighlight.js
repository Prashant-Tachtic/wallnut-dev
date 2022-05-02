import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { subscribeToUpdateCartCount } from '../pub-sub';

const CartHighlight = (props) => {
  const { cartCount } = props;
  const [count, setCount] = useState(cartCount);

  useEffect(() => {
    subscribeToUpdateCartCount((event, num) => {
      setCount(num);
    });
  }, []);

  return <div>{count > 0 ? <CartHighlightDiv /> : ''}</div>;
};

const CartHighlightDiv = styled.div.attrs({
  className: 'absolute mx-auto my-auto bg-orange-highlight',
})`
  z-index: 1;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  top: 21%;
  left: 30%;

  @media screen and (min-width: 981px) {
    width: 18px;
    height: 18px;
    top: 6%;
    left: 29%;
  }
`;

CartHighlight.propTypes = {
  cartCount: PropTypes.number.isRequired,
};

export default CartHighlight;
