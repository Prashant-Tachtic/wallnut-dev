import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Media from '../Media';
import { pushEvent } from '../../utils/optimizely';
import { HANDLE_UGC } from '../../utils/optimizely/constants';

const InstagramCarousel = ({ images, watchForReset, gridNumber }) => {
  const containerRef = useRef();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    containerRef.current.scrollTo(0, 0);
    setCurrentImageIndex(0);
  }, [watchForReset]);

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

  const mediaContainer = (media) => {
    const tablet = window.matchMedia('(min-width: 768px) and (max-width: 1024px)');
    if (tablet.matches) {
      return <div className="inline-block md:w-2/5 h-full">{media}</div>;
    }
    return media;
  };

  return (
    <StyledInstagramCarousel gridNumber={gridNumber}>
      <StyledCarouselContainer ref={containerRef} onScroll={handleOnScroll}>
        {images.map((image, i) => (
          <a
            href={image.pageUrl}
            key={i}
            onClick={() => pushEvent(HANDLE_UGC, { revenue: 0, value: 0.0 })}
          >
            {mediaContainer(<Media image={image.url} alt={image.alt} backgroundImage />)}
          </a>
        ))}
      </StyledCarouselContainer>
      {images.length > 1 && (
        <>
          <StyledThumbnails gridNumber={gridNumber}>
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
          </StyledThumbnails>
        </>
      )}
    </StyledInstagramCarousel>
  );
};

const StyledInstagramCarousel = styled.div.attrs(({ gridNumber }) => {
  let className = 'mb-5 w-full h-full';
  if (gridNumber === 2) {
    className = `${className} lg:hidden`;
  } else {
    className = `${className} md:hidden`;
  }
  return {
    className,
  };
})``;

const StyledThumbnails = styled.div.attrs(({ gridNumber }) => {
  let className = 'flex justify-center space-x-1 mt-2';
  if (gridNumber === 2) {
    className = `${className} md:hidden`;
  }
  return {
    className,
  };
})``;

const StyledCarouselContainer = styled.div.attrs({
  className: 'relative',
})`
  height: 395px;
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

InstagramCarousel.defaultProps = {
  images: {},
  watchForReset: '',
  gridNumber: 1,
};

InstagramCarousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      alt: PropTypes.string,
      pageUrl: PropTypes.string,
    })
  ),
  watchForReset: PropTypes.string,
  gridNumber: PropTypes.number,
};

export default InstagramCarousel;
