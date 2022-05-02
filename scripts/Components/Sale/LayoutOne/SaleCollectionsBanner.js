import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SaleBannerContainer = ({ settings }) => {
  const { hero_title, under_button_text, discount, discount_text, discount_code } = settings;

  return (
    <>
      <div className="lg:mt-20">
        <div className="grid justify-items-center lg:px-0 xl:px-24">
          <Title>
            {hero_title} <span className="font-sans uppercase">sale</span>
          </Title>
          <div
            className="
            font-serif items-center text-2xl text-blue tracking-wide
            md:text-2.5xl lg:text-5xl mt-4 md:mt-6 lg:justify-items-center
          "
          >
            <span className="font-medium">
              <span className="font-sans font-normal">Enjoy</span> {discount}% OFF SITEWIDE*{' '}
            </span>
          </div>
          <div>
            <span
              className="font-serif items-center text-2xl text-blue tracking-wide
            md:text-2.5xl lg:text-5xl lg:my-5 lg:justify-items-cente font-medium"
            >
              <span className="font-sans font-normal">{discount_text}</span> {discount_code}
            </span>
          </div>
        </div>
      </div>
      <p className="pb-4 text-xs md:text-sm lg:text-base center">{under_button_text}</p>
    </>
  );
};

const SaleCollectionsBanner = ({ settings }) => {
  const { collection_hero_image, collection_hero_mobile_image, collection_hero_tablet_image } =
    settings;

  return (
    <div>
      <HeroImage img={collection_hero_image}>
        <SaleBannerContainer settings={settings} />
      </HeroImage>
      <MobileHero img={collection_hero_mobile_image}>
        <SaleBannerContainer settings={settings} />
      </MobileHero>
      <TabletHero img={collection_hero_tablet_image}>
        <SaleBannerContainer settings={settings} />
      </TabletHero>
    </div>
  );
};

const HeroImage = styled.div.attrs({
  className:
    'bg-bottom bg-cover w-full h-100 hidden justify-items-center items-center grid-rows-1 lg:grid lg:grid-cols-1',
})`
  background-image: url(${(props) => props.img});
`;

const TabletHero = styled.div.attrs({
  className:
    'hidden w-full h-100 bg-cover bg-bottom justify-items-center items-center grid-rows-1 md:grid md:grid-cols-1 lg:hidden',
})`
  background-image: url(${(props) => props.img});
`;

const MobileHero = styled.div.attrs({
  className: 'w-full h-110 bg-cover bg-bottom md:hidden',
})`
  background-image: url(${(props) => props.img});
`;

const Title = styled.div.attrs({
  className:
    'mt-6 md:mt-0 text-5.5xl text-orange-burnt2 center font-medium font-serif lg:text-7.5xl',
})``;

SaleCollectionsBanner.propTypes = {
  settings: PropTypes.shape({
    collection_hero_image: PropTypes.string,
    collection_hero_mobile_image: PropTypes.string,
    collection_hero_tablet_image: PropTypes.string,
  }).isRequired,
};

SaleBannerContainer.propTypes = {
  settings: PropTypes.shape({
    hero_title: PropTypes.string,
    hero_subheading: PropTypes.string,
    under_button_text: PropTypes.string,
    discount: PropTypes.string,
    discount_text: PropTypes.string,
    discount_code: PropTypes.string,
  }).isRequired,
};

export default SaleCollectionsBanner;
