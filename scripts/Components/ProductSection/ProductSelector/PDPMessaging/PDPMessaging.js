/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { QuestionmarkIcon, TruckIcon } from '../../../Icons';

const PDPMessaging = ({ productMessaging }) => {
  const { productMessage, productMessageInfo, productMessageHeight } = productMessaging;
  const [hideBox, setHideBox] = useState(true);
  const handleClick = (e) => {
    if (!hideBox) {
      if (e.target.id !== 'messagebox' && e.target.lastChild.id !== 'messagebox') {
        setHideBox(true);
      }
    }
  };
  useEffect(() => {
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [hideBox]);

  if (productMessage !== undefined && productMessageInfo !== undefined) {
    return (
      <div className="flex text-grey-about text-sm font-serif mt-2">
        <div className="flex items-start lg:items-center mr-2 w-8 md:w-min">
          <TruckIcon />
        </div>
        <div className="mr-1.5 whitespace-nowrap flex">
          <div className="text-green-bright text-lg font-normal whitespace-normal w-33 md:mr-4.5 flex items-center">
            Free Shipping on All Orders
          </div>
          <Divider />
          <div className="text-green-bright text-lg font-normal whitespace-normal w-48 ml-2 md:ml-8">
            {productMessage}
            <div className="inline-block ml-1">
              <div
                onClick={() => {
                  setHideBox(!hideBox);
                }}
                onKeyDown={() => {}}
                tabIndex={0}
                role="button"
                className="flex items-center h-full"
              >
                <QuestionmarkIcon />
              </div>
              <StyledProductMessageContainer
                hideBox={hideBox}
                productMessageHeight={productMessageHeight}
              >
                <div
                  className="flex items-center absolute whitespace-normal text-white p-2 leading-4 text-xxs"
                  id="messagebox"
                >
                  {productMessageInfo}
                </div>
              </StyledProductMessageContainer>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

const StyledProductMessageContainer = styled.div.attrs((props) => ({
  className: `${props.hideBox ? 'invisible' : 'visible'} absolute w-52 h-${
    props.productMessageHeight
  } bg-grey-about transform -translate-x-3/4 md:-translate-x-1/2 translate-y-1.5`,
}))``;

const Divider = styled.div`
  width: 2px;
  margin: 6px 0;
  background: #435570;
`;

PDPMessaging.defaultProps = {
  productMessaging: {},
};

PDPMessaging.propTypes = {
  productMessaging: PropTypes.shape({
    productMessage: PropTypes.string,
    productMessageInfo: PropTypes.string,
    productMessageHeight: PropTypes.string,
  }),
};

export default PDPMessaging;
