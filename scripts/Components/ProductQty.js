import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ProductQty = (props) => {
  const { qty, setQty, marginTop } = props;

  return (
    <div
      className={`mt-${marginTop} border border-solid border-black rounded grid grid-cols-3 text-xl my-auto`}
    >
      <Button
        type="button"
        className="h-9 leading-none"
        onClick={() => {
          const newQty = qty - 1;

          if (qty && newQty !== 0) {
            setQty(newQty);
          } else {
            setQty(1);
          }
        }}
      >
        {' '}
        −{' '}
      </Button>
      <StyledQtyInput
        type="text"
        className="border-none center h-9 leading-none mb-0 min-w-full text-sm w-full"
        value={qty}
        min="1"
        aria-label="quantity"
        pattern="[0-9]*"
        name="quantity"
        id="quantity"
        onChange={(e) => {
          if (e.target.value) {
            setQty(parseInt(e.target.value, 10));
          } else {
            setQty(e.target.value);
          }
        }}
      />
      <Button
        onClick={() => {
          if (qty) {
            setQty(qty + 1);
          } else {
            setQty(1);
          }
        }}
        type="button"
        className="h-9 leading-none"
      >
        {' '}
        +{' '}
      </Button>
    </div>
  );
};

const StyledQtyInput = styled.input`
  &&& {
    text-indent: 0px;
  }
`;

const Button = styled.button`
  &&& {
    color: black;
    background: none;
  }
`;

ProductQty.defaultProps = {
  marginTop: 'auto',
};

ProductQty.propTypes = {
  qty: PropTypes.number.isRequired,
  setQty: PropTypes.func.isRequired,
  marginTop: PropTypes.string,
};

export default ProductQty;
