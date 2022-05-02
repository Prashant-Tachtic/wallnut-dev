import React from 'react';
import PropTypes from 'prop-types';
import { CompletedCheckout, CheckoutStep2, CheckoutStep3, ProgressLine } from './Icons/index';

const CheckoutProgess = ({ step }) => {
  const page = step.split(' ')[4];

  return (
    <div className="flex justify-center mb-6 lg:mb-0 lg:mt-6">
      <div className="flex flex-col w-90">
        <div className="flex self-center">
          <div>
            <div className="flex">
              <div id="stepbox" className="flex">
                <div id="checkbox" className="flex justify-center mr-2">
                  <CompletedCheckout className="h-6 lg:h-7" />
                </div>
                <div id="lineBox" className="flex pt-2.5 lg:pt-3.5 transform">
                  <ProgressLine stroke />
                  <ProgressLine
                    stroke={!!(page === 'Payment' || page === 'Shipping' || page === 'Thank')}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex">
              <div id="stepBox" className="flex ">
                {page === 'Payment' || page === 'Shipping' || page === 'Thank' ? (
                  <div id="checkbox" className="flex justify-center mx-2">
                    <CompletedCheckout className="h-6 lg:h-7" />
                  </div>
                ) : (
                  <div className="flex justify-center mx-2">
                    <CheckoutStep2 className="h-6 lg:h-7" />
                  </div>
                )}
                <div id="lineBox" className="flex pt-2.5 lg:pt-3.5">
                  <ProgressLine
                    stroke={!!(page === 'Payment' || page === 'Shipping' || page === 'Thank')}
                  />
                  <ProgressLine stroke={!!(page === 'Payment' || page === 'Thank')} />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex">
              <div id="stepBox" className="">
                {page === 'Payment' || page === 'Thank' ? (
                  <div id="checkbox" className="flex justify-center ml-2">
                    <CompletedCheckout className="h-6 lg:h-7" />
                  </div>
                ) : (
                  <div id="checkbox" className="flex justify-center ml-2">
                    <CheckoutStep3 className="h-6 lg:h-7" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="text-center pl-6 lg:pl-5">
            <span className="whitespace-nowrap">Info</span>
          </div>
          <div className="text-center pl-3">
            <span className="whitespace-nowrap">Shipping</span>
          </div>
          <div className="text-center pr-1.5 lg:pr-0.5">
            <span className="whitespace-nowrap">Payment</span>
          </div>
        </div>
      </div>
    </div>
  );
};

CheckoutProgess.propTypes = {
  step: PropTypes.string.isRequired,
};

export default CheckoutProgess;
