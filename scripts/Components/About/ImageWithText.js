import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import VideoPlayer from '../VideoPlayer';

const About = ({ block }) => {
  const { video, image, title, body, link, link_text, text_position } = block;
  return (
    <div
      className={`w-full flex flex-col font-sans mb-12 md:grid  max-w-screen-xxl ${
        text_position === 'center' ? 'md:grid-cols-1' : 'md:grid-cols-2  m-auto'
      } `}
    >
      {video && (
        <div className={`self-center ${text_position === 'left' ? 'md:order-2' : ''}`}>
          <VideoPlayer link={video} muted={false} controls />
        </div>
      )}
      {image && (
        <div className={`${text_position === 'left' ? 'md:order-2' : ''}`}>
          <LeftImage img={image} />
        </div>
      )}
      <RightContainer className={`${text_position === 'left' ? 'md:order-1' : ''}`}>
        <div className="text-3xl text-blue mb-5">{title}</div>
        <div className="text-base" dangerouslySetInnerHTML={{ __html: body }} />
        {link && (
          <a
            className="bg-orange-burnt font-normal py-2 px-12 rounded-full text-lg uppercase w-max self-center center pointer text-white hover:no-underline"
            href={link}
          >
            <span className="font-normal text-base lg:text-lg  tracking-wider">{link_text}</span>
          </a>
        )}
      </RightContainer>
    </div>
  );
};

const LeftImage = styled.div.attrs({
  className: 'bg-center bg-contain bg-no-repeat w-full h-100',
})`
  background-image: url(${(props) => props.img});
`;
const RightContainer = styled.div.attrs({
  className: 'flex flex-col text-center  justify-center',
})`
  @media screen and (max-width: 1280px) {
    padding: 0 4%;
  }
  @media screen and (min-width: 1280px) {
    padding: 0 15%;
  }
`;

About.defaultProps = {
  block: {
    title: '',
    body: '',
    video: '',
    image: '',
    link: '',
    link_text: '',
    text_position: 'right',
  },
};

About.propTypes = {
  block: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    video: PropTypes.string,
    image: PropTypes.string,
    link: PropTypes.string,
    link_text: PropTypes.string,
    text_position: PropTypes.string,
  }),
};

export default About;
