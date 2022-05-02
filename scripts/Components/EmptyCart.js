import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { subscribeToUpdateCartCount } from '../pub-sub';

const EmptyCart = (props) => {
  const { cartChair, cartCount } = props;
  const [count, setCount] = useState(cartCount);

  useEffect(() => {
    subscribeToUpdateCartCount((event, num) => {
      setCount(num);
    });
  }, []);

  return (
    <div className={`${count > 0 ? 'hidden' : ''} text-center font-serif`}>
      <p className="mb-0 mt-16 text-lg">Your cart is empty.</p>
      <p className="text-lg">Not sure where to start?</p>
      <div className="absolute transform -translate-x-1/2 bottom-36 left-1/2 w-1/2">
        <img src={cartChair} alt="empty cart" />
      </div>
      <div className="absolute transform -translate-x-1/2 bottom-20 left-1/2">
        <button className="bg-brown font-light font-serif py-2 text-base w-72" type="button">
          <a className="text-white no-underline" href="https://levityhome.com/collections/all">
            SHOP ALL
          </a>
        </button>
      </div>
    </div>
  );
};

EmptyCart.propTypes = {
  cartChair: PropTypes.string.isRequired,
  cartCount: PropTypes.number.isRequired,
};

export default EmptyCart;
