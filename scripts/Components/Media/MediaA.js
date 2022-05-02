import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';
import VideoPlayer from '../VideoPlayer';

const getVideoUrl = (url) =>
  url
    .split('/')
    .filter((_item, index) => index !== url.split('/').length - 2)
    .join('/');

const MediaA = ({
  image,
  currentImage,
  onClick,
  onMouseOver,
  thumbnail,
  alt,
  backgroundImage,
  bgCover,
  width = '101%',
}) => {
  if (image.includes('.mp4') && !thumbnail) {
    return (
      <span className="h-full w-full inline-block">
        <VideoPlayer link={getVideoUrl(image)} autoPlay loop height="100%" />
      </span>
    );
  }

  if (image.includes('.mp4') && thumbnail) {
    return (
      <VideoThumbnail onMouseOver={onMouseOver} currentImage={currentImage}>
        <VideoThumbnailContainer>
          <VideoPlayer link={getVideoUrl(image)} />
          <img
            className="absolute h-3/5 left-4 top-1.5 w-3/5"
            src="https://cdn.shopify.com/s/files/1/0492/6321/4743/files/play_button.png?v=1641496218"
            alt="play button"
          />
        </VideoThumbnailContainer>
      </VideoThumbnail>
    );
  }

  if (thumbnail) {
    return (
      <ThumbnailContainer
        image={image}
        currentImage={currentImage}
        onClick={onClick}
        onMouseOver={onMouseOver}
        role="img"
        aria-label={`${alt} thumbnail`}
      />
    );
  }

  if (backgroundImage) {
    return (
      <ImageContainer image={image} role="img" aria-label={alt} bgCover={bgCover} width={width} />
    );
  }

  return <img alt={alt} src={image} />;
};

const ImageContainer = styled.span.attrs(({ bgCover }) => {
  let className = 'bg-center bg-no-repeat h-full inline-block';

  if (bgCover) {
    className = `${className} bg-cover`;
  } else {
    className = `${className} bg-contain`;
  }

  return {
    className,
  };
})`
  background-image: url(${({ image }) => image});
  width: ${({ width }) => width};
`;

const ThumbnailContainer = styled.span.attrs({
  className:
    'cursor-pointer bg-cover bg-center bg-no-repeat lg:bg-transparent mt-2 h-1.5 w-10 lg:h-16 lg:w-16',
})`
  ${({ currentImage }) =>
    currentImage ? tw`bg-gray-500 lg:border-b-2 lg:border-gray-500` : tw`lg:opacity-50 bg-gray-200`}

  @media (min-width: 1024px) {
    ${tw`pb-1`}
    background-origin: content-box;
    background-image: url(${({ image }) => image});
  }
`;

const VideoThumbnailContainer = styled.span.attrs({
  className: 'hidden lg:inline-block w-24 h-24 top-0 absolute',
})`
  left: -10px;
`;

const VideoThumbnail = styled.span.attrs({
  className:
    'cursor-pointer h-1.5 lg:bg-transparent mt-2 w-10 lg:h-16 lg:w-16 lg:bg-white relative overflow-hidden',
})`
  ${({ currentImage }) =>
    currentImage ? tw`bg-gray-500 lg:border-b-2 lg:border-gray-500` : tw`lg:opacity-50 bg-gray-200`}
`;

MediaA.defaultProps = {
  thumbnail: false,
  currentImage: false,
  onClick: () => {},
  onMouseOver: () => {},
  backgroundImage: false,
  bgCover: false,
  width: '101%',
};

MediaA.propTypes = {
  image: PropTypes.string.isRequired,
  currentImage: PropTypes.bool,
  onClick: PropTypes.func,
  onMouseOver: PropTypes.func,
  thumbnail: PropTypes.bool,
  alt: PropTypes.string.isRequired,
  backgroundImage: PropTypes.bool,
  bgCover: PropTypes.bool,
  width: PropTypes.string,
};

export default MediaA;
