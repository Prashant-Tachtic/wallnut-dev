import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonLink = ({ settings }) => {
  const {
    title,
    button_text,
    button_link,
    subheading,
    title_size,
    tablet_title_size,
    mobile_title_size,
    text_color,
    mobile_text_color,
    subheading_size,
    mobile_subheading_size,
  } = settings;

  return (
    <ButtonLinkContainer text_color={text_color} mobile_text_color={mobile_text_color}>
      <Title
        title_size={title_size}
        mobile_title_size={mobile_title_size}
        tablet_title_size={tablet_title_size}
      >
        {title}
      </Title>
      {subheading !== '' && (
        <Subheading
          subheading_size={subheading_size}
          mobile_subheading_size={mobile_subheading_size}
        >
          {subheading}
        </Subheading>
      )}
      <Button href={button_link}>
        <span className="font-normal whitespace-nowrap text-base lg:text-lg  tracking-wider">
          {button_text}
        </span>
      </Button>
    </ButtonLinkContainer>
  );
};

const HeroV2 = ({ settings }) => {
  const { image, mobile_image, tablet_image, image_left } = settings;
  return (
    <div className="w-full">
      <div className="max-w-screen-xxl m-auto">
        <HeroImage img={image}>
          <OverlayImage img={image_left} />
          <ButtonLink settings={settings} />
        </HeroImage>
        <TabletHero img={tablet_image}>
          <ButtonLink settings={settings} />
        </TabletHero>
        <MobileHero img={mobile_image}>
          <ButtonLink settings={settings} />
        </MobileHero>
      </div>
    </div>
  );
};

const HeroImage = styled.div.attrs({
  className: 'bg-bottom bg-cover w-full h-100 hidden lg:grid lg:grid-cols-3 relative',
})`
  background-image: url(${(props) => props.img});
`;

const TabletHero = styled.div.attrs({
  className: 'relative hidden w-full bg-cover bg-bottom md:grid lg:hidden',
})`
  background-image: url(${(props) => props.img});
  height: 768px;
`;

const OverlayImage = styled.div.attrs({
  className: 'bg-bottom bg-cover h-100 hidden lg:block lg:absolute transform translate-x-6',
})`
  background-image: url(${(props) => props.img});
  max-width: 670px;
  width: 47%;
`;

const MobileHero = styled.div.attrs({
  className: 'relative w-full bg-cover bg-center md:hidden bg-no-repeat',
})`
  background-image: url(${(props) => props.img});
  height: 650px;
`;

const ButtonLinkContainer = styled.div.attrs(({ text_color, mobile_text_color }) => {
  const className = `text-${mobile_text_color} lg:text-${text_color} w-full mt-12 md:mt-14 lg:mt-0 w-9/12 lg:w-6.5/12 absolute flex flex-col h-full items-center lg:justify-center justify-items-center right-0 px-6 md:px-36 lg:px-26`;
  return { className };
})``;

const Title = styled.div.attrs(({ title_size, mobile_title_size, tablet_title_size }) => {
  const className = `text-${mobile_title_size} md:text-${tablet_title_size} whitespace-nowrap lg:text-${title_size} center`;
  return { className };
})``;

const Subheading = styled.div.attrs(({ subheading_size, mobile_subheading_size }) => {
  const className = `font-serif mt-4 md:mt-1 lg:mt-5 text-${mobile_subheading_size} lg:text-${subheading_size} text-center`;
  return { className };
})`
  max-width: 360px;
`;

const Button = styled.a.attrs({
  className:
    'bg-white font-normal mt-6 md:mt-6 px-12 py-2 rounded-full text-lg uppercase center pointer text-brown hover:bg-orange-burnt hover:text-white hover:no-underline border-2 border-orange-burnt ',
})``;

HeroV2.defaultProps = {
  settings: {
    content: '',
  },
};

HeroV2.propTypes = {
  settings: PropTypes.shape({
    image: PropTypes.string.isRequired,
    mobile_image: PropTypes.string.isRequired,
    image_left: PropTypes.string.isRequired,
    tablet_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    button_text: PropTypes.string.isRequired,
    button_link: PropTypes.string.isRequired,
  }),
};

ButtonLink.propTypes = {
  settings: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subheading: PropTypes.string.isRequired,
    button_text: PropTypes.string.isRequired,
    button_link: PropTypes.string.isRequired,
    subheading_size: PropTypes.string.isRequired,
    mobile_subheading_size: PropTypes.string.isRequired,
    title_size: PropTypes.string.isRequired,
    mobile_title_size: PropTypes.string.isRequired,
    tablet_title_size: PropTypes.string.isRequired,
    text_color: PropTypes.string.isRequired,
    mobile_text_color: PropTypes.string.isRequired,
  }).isRequired,
};

export default HeroV2;
