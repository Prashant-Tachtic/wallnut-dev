import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Media from '../Media';

const CarouselA = ({ images, watchForReset, overlayImage, overlayImageMobile }) => {
  const containerRef = useRef();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleOnScroll = () => {
    const scrollPos = containerRef.current.scrollLeft;
    const threshold = 5;
    const eachImageWidth = containerRef.current.scrollWidth / containerRef.current.children.length;
    const imagePositions = Array.from(containerRef.current.children).map((_child, i) =>
      Math.round(i * eachImageWidth)
    );

    const index = imagePositions.findIndex(
      (pos) => pos - threshold > scrollPos || scrollPos < pos + threshold
    );

    setCurrentImageIndex(index);
  };

  const handleThumbnailClick = (i) => {
    const pos = containerRef.current.children[i].getBoundingClientRect();

    containerRef.current.scrollTo(containerRef.current.scrollLeft + pos.left, 0);
    setCurrentImageIndex(i);
  };

  useEffect(() => {
    handleThumbnailClick(0);
  }, [watchForReset]);

  return (
    <div className="w-full h-full">
      <CarouselContainer ref={containerRef} onScroll={handleOnScroll}>
        {images.map((image, i) => (
          <Media
            key={i}
            image={image.url}
            alt={image.alt}
            backgroundImage
            bgCover={image.url.includes('color-swatch')}
            overlayImage={i === 0 ? overlayImage : null}
            overlayImageMobile={i === 0 ? overlayImageMobile : null}
          />
        ))}
      </CarouselContainer>
      {images.length > 1 && (
        <>
          <div className="flex justify-center space-x-1 mt-2">
            {images.map((image, i) => (
              <Media
                key={i}
                image={image.url}
                currentImage={currentImageIndex === i}
                onClick={() => handleThumbnailClick(i)}
                onMouseOver={() => handleThumbnailClick(i)}
                thumbnail
                alt={image.alt}
              />
            ))}
          </div>
          <div
            className="absolute bg-white -bottom-15
             px-3 rounded text-sm font-serif left-2 md:-bottom-8 lg:bottom-26"
          >
            {currentImageIndex + 1}/{images.length}
          </div>
        </>
      )}
    </div>
  );
};

CarouselA.defaultProps = {
  watchForReset: '',
  overlayImage: '',
  overlayImageMobile: '',
};

CarouselA.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      alt: PropTypes.string,
    })
  ).isRequired,
  watchForReset: PropTypes.string,
  overlayImage: PropTypes.string,
  overlayImageMobile: PropTypes.string,
};

const CarouselContainer = styled.div.attrs({
  className: 'h-5/6 relative bg-gray-50',
})`
  height: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  scroll-snap-type: x mandatory;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  & > * {
    scroll-snap-align: center;
  }
`;

export default CarouselA;
