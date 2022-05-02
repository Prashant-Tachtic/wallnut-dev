import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../../Button';

const ButtonLink = ({ settings }) => {
  const {
    hero_button_text,
    hero_button_link,
    hero_button_link_color,
    under_button_text,
    discount,
    discount_percent_color,
    discount_text,
    discount_text_font_size,
    discount_text_font_size_tablet,
    discount_text_font_size_mobile,
    discount_text_color,
    discount_code,
    bg_color,
    outline,
  } = settings;

  return (
    <div className="p-5 justify-items-center md:w-98 lg:transform lg:translate-x-10">
      <div className={`px-4 bg-${bg_color} bg-opacity-70 ${outline && 'outline-blue'}`}>
        <div
          className={`flex justify-center pt-4 font-normal font-serif text-8xl lg:text-9xl ${discount_percent_color}`}
        >
          <span className="text-6xl justify-center mt-5 lg:font-medium lg:mr-1">$</span>
          <span className="font-bold ml-2 tracking-wider">{discount}</span>
        </div>

        <div
          className={`mb-2 flex justify-center ${discount_text_color} ${discount_text_font_size}`}
        >
          <span className="inline-block uppercase font-base font-medium text-5.25xl lg:text-7xl transform">
            Off
          </span>
          <span
            className={`${discount_text_font_size_mobile} lg:${discount_text_font_size} md:${discount_text_font_size_tablet} font-medium max-w-min ml-3`}
          >
            {discount_text}
          </span>
        </div>

        <div className="center leading-5 lg:text-2xl mb-8 text-base text-blue">
          <span>
            with code: <span className="font-medium text-orange-burnt">{discount_code}</span>
          </span>
        </div>

        <Button link={hero_button_link} brown={hero_button_link_color.includes('brown')} blue>
          <div className="font-normal tracking-wider my-1">{hero_button_text}</div>
        </Button>
        <p
          className="center font-extralight leading-5 pt-5 lg:pt-9 mb-0 md:text-sm pb-3 lg:pb-4.5 text-blue text-xs"
          dangerouslySetInnerHTML={{ __html: under_button_text }}
        />
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
    discount_percent_color: PropTypes.string,
    discount_text: PropTypes.string,
    discount_text_font_size: PropTypes.string,
    discount_text_font_size_tablet: PropTypes.string,
    discount_text_font_size_mobile: PropTypes.string,
    discount_text_color: PropTypes.string,
    discount_code: PropTypes.string,
    heading_font: PropTypes.string,
    heading_underline: PropTypes.string,
    bg_color: PropTypes.string,
    outline: PropTypes.bool,
    heading_bold: PropTypes.string,
  }).isRequired,
};

export default SaleLandingBanner;
