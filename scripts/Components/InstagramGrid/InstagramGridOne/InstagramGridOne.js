import React from 'react';
import PropTypes from 'prop-types';
import InstagramCarousel from '../InstagramCarousel';

const imageLinks = {
  'Dog Chairs': [
    { pageUrl: '/products/the-scandinavian-lounge-chair?variant=38193015357591' },
    { pageUrl: '/products/the-classic-lounge-chair?variant=38192923115671' },
    { pageUrl: '/products/the-classic-lounge-chair?variant=38192923607191' },
    { pageUrl: '/products/the-scandinavian-dining-chair?variant=38019857940631' },
    { pageUrl: '/products/the-classic-lounge-chair?variant=41295081799831' },
    { pageUrl: '/products/the-classic-lounge-chair?variant=39813187240087' },
  ],
  'Washable Chairs': [
    { pageUrl: '/products/the-scandinavian-lounge-chair?variant=38193015357591' },
    { pageUrl: '/products/the-scandinavian-dining-chair?variant=41295083700375' },
    { pageUrl: '/products/the-classic-dining-chair-walnut?variant=41295112601751' },
    { pageUrl: '/products/the-scandinavian-dining-chair?variant=41295083700375' },
    { pageUrl: '/products/the-classic-dining-chair-walnut?variant=39813329813655' },
    { pageUrl: '/products/the-classic-lounge-chair?variant=38192923213975' },
  ],
  'Pattern Chairs': [
    { pageUrl: '/products/the-classic-lounge-chair?variant=41295081963671' },
    { pageUrl: '/products/the-scandinavian-dining-chair?variant=41295083700375' },
    { pageUrl: '/products/the-scandinavian-dining-chair?variant=41295083667607' },
    { pageUrl: '/products/the-scandinavian-lounge-chair?variant=41295079964823' },
    { pageUrl: '/products/the-classic-dining-chair-walnut?variant=41295112208535' },
    { pageUrl: '/products/the-classic-lounge-chair?variant=41295082225815' },
  ],
  'White Chairs': [
    {
      pageUrl:
        '/products/the-scandinavian-lounge-chair?variant=41295079997591&color=Herringbone%20Off%20White',
    },
    { pageUrl: '/products/the-classic-lounge-chair?variant=39813186650263&color=Off%20White' },
    {
      pageUrl:
        '/products/the-scandinavian-dining-chair?variant=41677148520599&color=Camellia%20Lily%20White',
    },
    { pageUrl: '/products/the-classic-dining-chair-black?color=Herringbone%20Off%20White' },
    {
      pageUrl:
        '/products/the-scandinavian-lounge-chair?variant=41677156810903&color=Pinstripe%20Off%20White',
    },
    {
      pageUrl:
        '/products/the-classic-lounge-chair?variant=41677139574935&color=Pinstripe%20Off%20White',
    },
  ],
  'Herringbone Chairs': [
    {
      pageUrl:
        '/products/the-scandinavian-lounge-chair?variant=41677156745367&color=Herringbone%20Dark%20Sage',
    },
    {
      pageUrl:
        '/products/the-scandinavian-dining-chair?variant=41677148291223&color=Herringbone%20Sand',
    },
    {
      pageUrl:
        '/products/the-classic-lounge-chair?variant=41295081799831&color=Herringbone%20Denim',
    },
    {
      pageUrl:
        '/products/the-scandinavian-dining-chair?variant=41677148323991&color=Herringbone%20Cerulean',
    },
    {
      pageUrl:
        '/products/the-classic-dining-chair-walnut?variant=41615555559575&color=Herringbone%20Sand',
    },
    {
      pageUrl:
        '/products/the-classic-dining-chair-walnut?variant=41615556542615&color=Herringbone%20Off%20White',
    },
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
    ...imageLinks[settings.page_title][i],
  }));
};

const InstagramGridOne = ({ settings }) => {
  const { page_title } = settings;
  return (
    <div className="lg:w-3/4 md:w-4/5 mx-auto md:mb-20 mb-15 text-center">
      <div className="mb-5">
        <h1 className="inline font-serif text-navy">{settings.header_text} </h1>
        <h1 className="md:inline font-serif font-normal text-navy">{settings.header_hash_tag}</h1>
      </div>
      <div className="mx-auto">
        {desktopImages(settings).map((image, i) => {
          if (i === 0 || i % 2 === 0) {
            return (
              <div key={i} className="hidden md:flex">
                <a className="lg:mr-3 md:mr-1.5" href={imageLinks[page_title][i].pageUrl}>
                  <img src={image[1]} alt="grid" />
                </a>
                <a
                  className="lg:mb-6 md:mb-3 lg:ml-3 md:ml-1.5"
                  href={imageLinks[page_title][i + 1].pageUrl}
                >
                  <img src={desktopImages(settings)[i + 1][1]} alt="grid" />
                </a>
              </div>
            );
          }
          return null;
        })}
      </div>
      <InstagramCarousel images={carouselImages(settings)} gridNumber={1} />
      <a
        className="no-underline text-navy font-normal border-b-2 border-orange-burnt pb-1"
        href={settings.link_url}
      >
        {settings.link_text}
      </a>
    </div>
  );
};

InstagramGridOne.defaultProps = {
  settings: {},
};

InstagramGridOne.propTypes = {
  settings: PropTypes.shape({
    page_title: PropTypes.string,
    header_text: PropTypes.string,
    header_hash_tag: PropTypes.string,
    link_url: PropTypes.string,
    link_text: PropTypes.string,
  }),
};

export default InstagramGridOne;
