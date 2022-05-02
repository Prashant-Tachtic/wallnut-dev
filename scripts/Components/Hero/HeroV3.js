import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import VideoPlayer from '../VideoPlayer';

const ButtonLink = ({ settings }) => {
  const { title, button_text, button_link, subheading, text_color, mobile_text_color } = settings;

  return (
    <ButtonLinkContainer text_color={text_color} mobile_text_color={mobile_text_color}>
      <Title>{title}</Title>
      {subheading !== '' && <Subheading className="">{subheading}</Subheading>}
      <Button href={button_link}>
        <span className="font-normal whitespace-nowrap text-base lg:text-lg  tracking-wider">
          {button_text}
        </span>
      </Button>
    </ButtonLinkContainer>
  );
};

const HeroV3 = ({ settings }) => {
  const { image, video_url } = settings;
  return (
    <div className="w-full">
      <div className="max-w-screen-xxl m-auto flex lg:flex-row">
        <HeroImage img={image}>
          <VideoContainer>
            <VideoPlayer link={video_url} autoPlay height loop />
          </VideoContainer>
          <ButtonLink settings={settings} />
        </HeroImage>

        <TabletHero>
          <VideoContainer>
            <VideoPlayer link={video_url} autoPlay height loop />
          </VideoContainer>
          <ButtonLink settings={settings} />
        </TabletHero>
        <MobileHero>
          <VideoContainer>
            <VideoPlayer link={video_url} autoPlay height loop />
          </VideoContainer>
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
  className: 'relative bg-white h-full hidden w-full bg-cover bg-bottom md:grid lg:hidden',
})`
  background-image: url(${(props) => props.img});
  height: 768px;
`;

const VideoContainer = styled.div.attrs({
  className:
    'relative h-72 md:h-96 lg:h-100 lg:block lg:absolute justify-self-center lg:justify-self-start',
})``;

const MobileHero = styled.div.attrs({
  className: 'h-full relative bg-white w-full bg-cover bg-center md:hidden bg-no-repeat',
})`
  background-image: url(${(props) => props.img});
  height: 650px;
`;

const ButtonLinkContainer = styled.div.attrs(({ text_color, mobile_text_color }) => {
  const className = `w-full my-10 lg:my-0 relative w-9/12 lg:w-6.5/12 lg:absolute flex flex-col lg:h-full items-center lg:justify-center justify-items-center lg:right-0 px-6 md:px-36 lg:px-26 text-${mobile_text_color} lg:text-${text_color}`;
  return { className };
})``;

const Title = styled.div.attrs({
  className: 'text-4xl md:text-5xl whitespace-nowrap lg:text-5.5xl center',
})``;

const Subheading = styled.div.attrs({
  className: 'font-serif mt-4 md:mt-1 lg:mt-5 text-xl text-center',
})`
  max-width: 360px;
`;

const Button = styled.a.attrs({
  className:
    'bg-brown font-normal mt-6 md:mt-6 px-12 py-2 rounded-full text-lg uppercase center pointer text-white hover:bg-orange-burnt hover:text-white hover:no-underline border-2 border-orange-burnt ',
})``;

HeroV3.defaultProps = {
  settings: {
    content: '',
  },
};

ButtonLink.defaultProps = {
  settings: {
    title: '',
    subheading: '',
    button_text: '',
    button_link: '',
    text_color: 'blue',
  },
};

HeroV3.propTypes = {
  settings: PropTypes.shape({
    image: PropTypes.string.isRequired,
    video_url: PropTypes.string.isRequired,
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
    title: PropTypes.string,
    subheading: PropTypes.string,
    button_text: PropTypes.string,
    button_link: PropTypes.string,
    text_color: PropTypes.string,
    mobile_text_color: PropTypes.string.isRequired,
  }),
};

export default HeroV3;
