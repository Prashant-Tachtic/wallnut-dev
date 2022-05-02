import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonLink = ({ settings }) => {
  const {
    collection_hero_disclaimer,
    discount,
    discount_code,
    collection_hero_title,
    collection_hero_secondary_title,
  } = settings;

  return (
    <div className="justify-items-center lg:px-26 md:col-span-12 md:p-10 px-5 py-8">
      <div className="bg-offwhite-cream lg:px-10 max-w-screen-xxl mx-auto px-12 outline-brownlight">
        <div className="md:flex md:justify-center md:pb-2 md:pt-12">
          <div className="center font-medium font-serif lg:font-normal lg:text-8xl mb-2 md:mb-0 md:pb-0 md:pt-0 pt-12 text-6xl text-blue">
            <span>{discount}%</span>
            <span className="font-bold lg:font-medium lg:text-6xl text-4xl uppercase">ff</span>
          </div>

          <div className="center lg:pl-6 lg:pt-7 lg:text-6xl md:pl-3 md:pt-5 pb-4 text-1xl text-3xl tracking-wider">
            <span className="font-sans text-brown">{collection_hero_title}</span>
          </div>
        </div>

        <div className="center leading-5 lg:text-2.5xl mb-4 text-base text-blue">
          <span className="font-serif text-blue">{collection_hero_secondary_title} </span>
          <span className="font-medium">{discount_code}</span>
        </div>

        <p className="center font-extralight leading-5 lg:text-base mb-0 md:text-sm pb-6 pt-5 text-blue text-xs">
          {collection_hero_disclaimer}
        </p>
      </div>
    </div>
  );
};

const SaleCollectionsBanner = ({ settings }) => {
  const { collection_hero_image, collection_hero_mobile_image, collection_hero_tablet_image } =
    settings;

  return (
    <div>
      <StyledHeroImage img={collection_hero_image}>
        <ButtonLink settings={settings} />
      </StyledHeroImage>
      <StyledMobileHero img={collection_hero_mobile_image}>
        <ButtonLink settings={settings} />
      </StyledMobileHero>
      <StyledTabletHero img={collection_hero_tablet_image}>
        <ButtonLink settings={settings} />
      </StyledTabletHero>
    </div>
  );
};

const StyledHeroImage = styled.div.attrs({
  className: 'bg-cover w-full hidden lg:grid lg:grid-cols-12 max-w-screen-xxl m-auto',
})`
  background-image: url(${(props) => props.img});
`;

const StyledTabletHero = styled.div.attrs({
  className: 'hidden w-full bg-cover md:grid md:grid-cols-12 lg:hidden',
})`
  background-image: url(${(props) => props.img});
`;

const StyledMobileHero = styled.div.attrs({
  className: 'w-full bg-cover md:hidden',
})`
  background-image: url(${(props) => props.img});
`;

SaleCollectionsBanner.propTypes = {
  settings: PropTypes.shape({
    collection_hero_image: PropTypes.string,
    collection_hero_mobile_image: PropTypes.string,
    collection_hero_tablet_image: PropTypes.string,
  }).isRequired,
};

ButtonLink.propTypes = {
  settings: PropTypes.shape({
    hero_title: PropTypes.string,
    hero_title_color_1: PropTypes.string,
    under_button_text: PropTypes.string,
    discount: PropTypes.string,
    discount_text: PropTypes.string,
    discount_code: PropTypes.string,
    collection_hero_title: PropTypes.string,
    collection_hero_title_font: PropTypes.string,
    collection_hero_secondary_title: PropTypes.string,
    collection_hero_secondary_title_font: PropTypes.string,
    collection_hero_disclaimer: PropTypes.string,
  }).isRequired,
};

export default SaleCollectionsBanner;
