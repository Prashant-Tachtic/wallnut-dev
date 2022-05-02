import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import topSellers from './topSellers';
import AboutOurChairs from '../AboutOurChairs';
import BSItem from './BSItem';
import { fetchProducts, getVariantOptions } from '../../utils';

const getTopSellers = (products) =>
  topSellers.map((item) => {
    const product = products.find((productData) => productData.handle === item.handle);
    const variant = product.variants.find((variantData) => variantData.id === item.id);

    return variant
      ? {
          ...product,
          variant: {
            ...item,
            ...variant,
            options: getVariantOptions(variant),
          },
        }
      : item;
  });

const BestSellers = (props) => {
  const { settings } = props;
  const [topSellersData, setTopSellersData] = useState([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const allProducts = await fetchProducts();

        setTopSellersData(getTopSellers(allProducts));
      } catch (err) {
        console.log(err);
      }
    };

    document.body.querySelector('#content').classList.remove('row');

    fetchAllProducts();
  }, []);

  return (
    <div>
      <div className="lg:mr-auto mb-6 md:mr-4 mr-auto ml-auto mt-6 relative w-96 md:w-11/12 lg:max-w-8xl">
        <img
          className="block h-72 lg:max-w-6xl md:h-auto ml-auto"
          src={settings.header_background}
          alt="background"
        />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 md:-left-4 md:translate-x-0 md:w-auto top-1/2 transform w-11/12">
          <img
            className="block md:h-72 lg:h-auto"
            src={settings.text_background}
            alt="text background"
          />
          <div className="absolute lg:left-14 lg:pr-0 lg:top-20 lg:w-3/4 md:left-4 md:pl-0 pl-2 pr-4 top-4">
            <div className="absolute border-blue-light border-t-4 lg:right-0 lg:w-2/5 right-6 top-4 w-24" />
            <h2 className="font-serif text-3xl text-blue-dark lg:mb-8">{settings.header_title}</h2>
            <p className="lg:pl-6 mt-2 pl-4 text-base text-blue-dark">{settings.header_text}</p>
          </div>
        </div>
      </div>

      <div className="grid justify-center w-full">
        <div className="grid grid-cols-1 px-4 justify-items-center gap-8 mb-12 max-w-screen-xxl md:grid-cols-2 xl:grid-cols-3">
          {topSellersData.map((topSeller, i) => (
            <BSItem key={i} topSeller={topSeller} />
          ))}
        </div>
      </div>

      <button
        className="bg-brown block font-light lg:w-96 mb-12 mx-auto text-base text-center w-68"
        type="button"
      >
        <a className="block py-2 text-white no-underline" href="/collections/all">
          SHOP ALL CHAIRS
        </a>
      </button>
      <AboutOurChairs />
    </div>
  );
};

BestSellers.defaultProps = {
  settings: {},
};

BestSellers.propTypes = {
  settings: PropTypes.shape({
    header_background: PropTypes.string,
    text_background: PropTypes.string,
    header_title: PropTypes.string,
    header_text: PropTypes.string,
  }),
};

export default BestSellers;
