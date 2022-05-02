import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonLink = ({ settings }) => {
  const {
    hero_title,
    hero_button_text,
    hero_button_link,
    under_button_text,
    discount,
    discount_text,
    discount_code,
  } = settings;

  return (
    <div className="col-span-12 md:mt-14">
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
            <span className="font-sans font-normal">Enjoy</span> {discount}% OFF SITEWIDE*
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
        <a
          href={hero_button_link}
          className="no-underline text-base py-2 text-white tracking-widest bg-blue hover:bg-blue-light center rounded-full uppercase w-81 mt-4 md:mt-14 lg:mt-9 md:w-90 lg:py-4 lg:text-normal"
        >
          {hero_button_text}
        </a>
        <p className="my-2 text-xs md:text-sm lg:text-base">{under_button_text}</p>
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
  className: 'hidden w-full h-100 bg-cover bg-bottom md:grid md:grid-cols-12 lg:hidden',
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
    hero_button_text: PropTypes.string,
    hero_button_link: PropTypes.string,
    under_button_text: PropTypes.string,
    discount: PropTypes.string,
    discount_text: PropTypes.string,
    discount_code: PropTypes.string,
  }).isRequired,
};

export default SaleLandingBanner;
