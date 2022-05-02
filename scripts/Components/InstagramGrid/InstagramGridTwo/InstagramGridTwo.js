import React from 'react';
import PropTypes from 'prop-types';
import InstagramCarousel from '../InstagramCarousel';
import { pushEvent } from '../../../utils/optimizely';
import { HANDLE_UGC, HANDLE_FOLLOW_US } from '../../../utils/optimizely/constants';

const imageLinks = {
  'the-scandinavian-dining-chair': [
    { pageUrl: '/products/the-scandinavian-dining-chair?variant=39813062787223' },
    { pageUrl: '/products/the-scandinavian-dining-chair?variant=39813062656151' },
    { pageUrl: '/products/the-scandinavian-dining-chair?variant=38152066269335' },
    { pageUrl: '/products/the-scandinavian-dining-chair?variant=38152066302103' },
  ],
  'the-scandinavian-lounge-chair': [
    { pageUrl: '/products/the-scandinavian-lounge-chair?variant=38193015292055' },
    { pageUrl: '/products/the-scandinavian-lounge-chair?variant=38193015324823' },
    { pageUrl: '/products/the-scandinavian-lounge-chair?variant=39812916347031' },
    { pageUrl: '/products/the-scandinavian-lounge-chair?variant=39812916543639' },
  ],
  'the-classic-dining-chair': [
    { pageUrl: '/products/the-classic-dining-chair-walnut?variant=41295112601751' },
    { pageUrl: '/products/the-classic-dining-chair-walnut?variant=39813329780887' },
    { pageUrl: '/products/the-classic-dining-chair-walnut?variant=41295113322647' },
    { pageUrl: '/products/the-classic-dining-chair-walnut?variant=39813330436247' },
  ],
  'the-classic-lounge-chair': [
    { pageUrl: '/products/the-classic-lounge-chair?variant=39813187043479' },
    { pageUrl: '/products/the-classic-lounge-chair?variant=38192923115671' },
    { pageUrl: '/products/the-classic-lounge-chair?variant=38192922919063' },
    { pageUrl: '/products/the-classic-lounge-chair?variant=38192923607191' },
  ],
  'extra-chair-cover': [
    { pageUrl: '/products/the-scandinavian-dining-chair?variant=39813062787223' },
    { pageUrl: '/products/the-classic-dining-chair-walnut?variant=39813329780887' },
    { pageUrl: '/products/the-scandinavian-lounge-chair?variant=38193015390359' },
    { pageUrl: '/products/the-classic-lounge-chair?variant=398131870434791' },
  ],
};

const desktopImages = (settings) =>
  Object.entries(settings).filter((image) => image[0].includes('desktop_images'));

const carouselImages = (settings) => {
  const mobileImages = Object.entries(settings).filter((image) =>
    image[0].includes('mobile_images')
  );

  return mobileImages.map((image, i) => ({
    url: image[1],
    alt: 'carousel image',
    ...imageLinks[settings.product][i].pageUrl,
  }));
};

const imageMargins = (images, i) => (i === images.length - 1 ? '' : 'mr-4');

const InstagramGridTwo = ({ settings }) => {
  const { header_text, header_hash_tag, link_url, link_text, product } = settings;
  return (
    <div className="md:mb-20 mb-15 text-center bg-gray-100 py-10">
      <div className="mb-5">
        <h1 className="inline font-serif text-navy text-2xl">{header_text} </h1>
        <h1 className="md:inline font-serif font-normal text-navy text-2xl">{header_hash_tag}</h1>
      </div>
      <div className="lg:flex max-w-screen-3xl mb-5 mx-auto hidden">
        {desktopImages(settings).map((image, i) => (
          <a
            className={imageMargins(desktopImages(settings), i)}
            href={imageLinks[product][i].pageUrl}
            key={i}
            onClick={() => pushEvent(HANDLE_UGC, { revenue: 0, value: 0.0 })}
          >
            <img className="lg:w-110" src={image[1]} alt="grid" />
          </a>
        ))}
      </div>
      <InstagramCarousel images={carouselImages(settings)} gridNumber={2} />
      <a
        className="no-underline text-navy font-normal border-b-2 border-orange-burnt pb-1"
        href={link_url}
        onClick={() => pushEvent(HANDLE_FOLLOW_US, { revenue: 0, value: 0.0 })}
      >
        {link_text}
      </a>
    </div>
  );
};

InstagramGridTwo.defaultProps = {
  settings: {},
};

InstagramGridTwo.propTypes = {
  settings: PropTypes.shape({
    header_text: PropTypes.string,
    header_hash_tag: PropTypes.string,
    link_url: PropTypes.string,
    link_text: PropTypes.string,
    product: PropTypes.string,
  }),
};

export default InstagramGridTwo;
