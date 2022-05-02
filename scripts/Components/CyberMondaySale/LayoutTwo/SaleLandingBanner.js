import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../../Button';

const ButtonLink = ({ settings }) => {
  const {
    hero_first_title,
    hero_title,
    hero_last_title,
    hero_title_color_1,
    hero_title_color_2,
    hero_button_text,
    hero_button_link,
    under_button_text,
    discount,
    discount_text,
    discount_code,
    heading_font,
    heading_underline,
    bg_color,
    heading_bold,
  } = settings;

  return (
    <div className="p-5 justify-items-center md:w-98 lg:w-110 lg:px-12">
      <div className={`px-4 lg:px-10 bg-${bg_color} outline-brown`}>
        <div
          className={`center ${heading_bold} ${
            heading_underline === 'underline' ? 'border-b-4 border-white' : ''
          } m-auto w-max lg:pt-12 lg:text-2xl md:pt-5 pt-10 text-1xl tracking-widest uppercase`}
        >
          <span className={`font-${heading_font} ${hero_title_color_2}`}>{hero_first_title}</span>{' '}
          <span className={`font-${heading_font} ${hero_title_color_1}`}>{hero_title} </span>
          <span className={`font-${heading_font} ${hero_title_color_2}`}>{hero_last_title}</span>
        </div>

        <div className="center mb-2 mt-2 font-normal font-serif text-8xl lg:text-9xl text-blue">
          <span>{discount}%</span>
          <span className="uppercase font-base font-medium text-6xl lg:font-semibold lg:text-7xl">
            ff
          </span>
        </div>

        <div className="mb-2 md:mb-8 center text-blue">
          <span className="font-extralight">{discount_text} </span>
          <span className="font-medium">{discount_code}</span>
        </div>

        <Button link={hero_button_link} brown>
          <div className="font-normal tracking-wider my-1">{hero_button_text}</div>
        </Button>
        <p className="center font-extralight leading-5 lg:pt-12 mb-0 md:text-sm pb-3 lg:pb-5 pt-5 text-blue text-xs">
          {under_button_text}
        </p>
      </div>
    </div>
  );
};

const SaleLandingBanner = ({ settings }) => {
  const { hero_image, hero_mobile_image, hero_tablet_image } = settings;

  return (
    <div>
      <HeroImage img={hero_image}>
        <ButtonLink settings={settings} />
      </HeroImage>
      <MobileHero img={hero_mobile_image}>
        <ButtonLink settings={settings} />
      </MobileHero>
      <TabletHero img={hero_tablet_image}>
        <ButtonLink settings={settings} />
      </TabletHero>
    </div>
  );
};

const HeroImage = styled.div.attrs({
  className:
    'bg-bottom bg-cover w-full h-100 hidden lg:grid lg:grid-cols-12 max-w-screen-xxl m-auto',
})`
  background-image: url(${(props) => props.img});
`;

const TabletHero = styled.div.attrs({
  className: 'hidden w-full bg-cover bg-bottom md:grid md:grid-cols-12 lg:hidden',
})`
  background-image: url(${(props) => props.img});
`;

const MobileHero = styled.div.attrs({
  className: 'w-full h-110 bg-cover bg-bottom md:hidden',
})`
  background-image: url(${(props) => props.img});
`;

SaleLandingBanner.propTypes = {
  settings: PropTypes.shape({
    hero_image: PropTypes.string,
    hero_mobile_image: PropTypes.string,
    hero_tablet_image: PropTypes.string,
  }).isRequired,
};

ButtonLink.propTypes = {
  settings: PropTypes.shape({
    hero_title: PropTypes.string,
    hero_first_title: PropTypes.string,
    hero_last_title: PropTypes.string,
    hero_title_color_1: PropTypes.string,
    hero_title_color_2: PropTypes.string,
    hero_button_text: PropTypes.string,
    hero_button_link: PropTypes.string,
    hero_button_link_color: PropTypes.string,
    under_button_text: PropTypes.string,
    discount: PropTypes.string,
    discount_text: PropTypes.string,
    discount_code: PropTypes.string,
    heading_font: PropTypes.string,
    heading_underline: PropTypes.string,
    bg_color: PropTypes.string,
    heading_bold: PropTypes.string,
  }).isRequired,
};

export default SaleLandingBanner;
