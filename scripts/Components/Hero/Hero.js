import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import HeroV2 from './HeroV2';
import HeroV3 from './HeroV3';

const ButtonLink = ({ settings }) => {
  const { title, subheading, button_text, button_link, text_color, mobile_text_color } = settings;

  return (
    <div
      className={`grid justify-items-center text-${mobile_text_color} lg:text-${text_color} w-full lg:w-10/12`}
    >
      <div className="leading-relaxed text-4xl center">{title}</div>
      <div className="font-serif my-5 text-xl">{subheading}</div>
      <a
        className="bg-brown font-normal px-8 py-4 rounded-full text-lg uppercase center w-9/12 pointer hover:no-underline"
        href={button_link}
      >
        {button_link ? (
          <span className="font-normal text-base text-white tracking-widest ">{button_text}</span>
        ) : (
          <button type="button" className="font-normal text-base text-white tracking-widest">
            {button_text}
          </button>
        )}
      </a>
    </div>
  );
};

const Hero = (props) => {
  const { settings } = props;
  const { image, mobile_image, tablet_image, version } = settings;

  if (version === 'v2') {
    return <HeroV2 settings={settings} />;
  }
  if (version === 'v3') {
    return <HeroV3 settings={settings} />;
  }
  return (
    <div>
      <HeroImage img={image}>
        <div className="hidden xl:block xl:col-end-4 xl:col-span-1 lg:mb-auto lg:mt-14 lg:px-0 mb-10 mt-5 px-5">
          <ButtonLink settings={settings} />
        </div>
      </HeroImage>
      <TabletHero img={tablet_image}>
        <div className="hidden lg:grid lg:col-end-13 lg:col-span-5 lg:mb-auto lg:mt-14 lg:px-0 mb-10 mt-5 px-5">
          <ButtonLink settings={settings} />
        </div>
      </TabletHero>
      <MobileHero img={mobile_image} />
      <div className="lg:hidden mt-5 mb-10 px-5">
        <ButtonLink settings={settings} />
      </div>
    </div>
  );
};

const HeroImage = styled.div.attrs({
  className: 'bg-bottom bg-cover w-full h-100 hidden xl:grid xl:grid-cols-3',
})`
  background-image: url(${(props) => props.img});
`;

const TabletHero = styled.div.attrs({
  className:
    'hidden w-full h-100 bg-cover bg-bottom lg:grid lg:grid-cols-12 xl:grid-cols-1 xl:hidden',
})`
  background-image: url(${(props) => props.img});
`;

const MobileHero = styled.div.attrs({
  className: 'w-full h-72 md:h-110 bg-cover bg-bottom lg:hidden bg-no-repeat',
})`
  background-image: url(${(props) => props.img});
`;

Hero.defaultProps = {
  settings: {
    content: '',
    version: 'v2',
  },
};

Hero.propTypes = {
  settings: PropTypes.shape({
    content: PropTypes.string,
    image: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired,
    mobile_image: PropTypes.string.isRequired,
    tablet_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subheading: PropTypes.string.isRequired,
    button_text: PropTypes.string.isRequired,
    button_link: PropTypes.string.isRequired,
  }),
  themeSettings: PropTypes.shape({
    sale_start: PropTypes.string,
    sale_end: PropTypes.string,
  }).isRequired,
};

ButtonLink.propTypes = {
  settings: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subheading: PropTypes.string.isRequired,
    button_text: PropTypes.string.isRequired,
    button_link: PropTypes.string.isRequired,
    text_color: PropTypes.string.isRequired,
    mobile_text_color: PropTypes.string.isRequired,
  }).isRequired,
};

export default Hero;
