import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ImageModal = (props) => {
  const { image, review } = props;
  const { images_data } = review;
  const [open, setOpen] = useState(false);

  const picIndex = images_data.findIndex((data) => data.original_url === image.original_url);

  const [currentPicture, setCurrentPicture] = useState({
    url: image.original_url,
    index: picIndex,
  });

  const handleNextPicture = (e, direction) => {
    const { index } = currentPicture;
    e.stopPropagation();
    if (direction === 'right') {
      if (index < images_data.length - 1) {
        setCurrentPicture({
          url: images_data[index + 1].original_url,
          index: index + 1,
        });
      }
    } else if (picIndex > 0) {
      setCurrentPicture({
        url: images_data[picIndex - 1].original_url,
        index: picIndex - 1,
      });
    } else if (index > 0) {
      setCurrentPicture({
        url: images_data[index - 1].original_url,
        index: index - 1,
      });
    }
  };
  return (
    <div>
      <div
        className="cursor-pointer"
        onClick={() => setOpen(!open)}
        role="button"
        onKeyDown={() => {}}
        tabIndex={0}
      >
        <img src={image.thumb_url} alt="ThumbnailImage" />
      </div>
      <div
        className={`bg-opacity-75 bg-black fixed flex justify-center left-0 top-0 w-full h-full px-5 ${
          open ? '' : 'hidden'
        }`}
        role="button"
        onKeyDown={() => {}}
        tabIndex={0}
        style={{ zIndex: '1' }}
        onClick={() => setOpen(false)}
      >
        <div className="relative p-15 bg-white md:grid md:grid-cols-1 md:items-center md:justify-items-center max-w-screen-md self-center">
          <div
            className="absolute right-4 top-4 cursor-pointer"
            onClick={() => setOpen(!open)}
            onKeyDown={() => {}}
            tabIndex={0}
            role="button"
          >
            x
          </div>
          <div
            className="absolute transform -translate-y-1/2 left-1 top-1/2 w-12 h-1/2 h-1/2 z-20"
            onClick={(e) => handleNextPicture(e, 'left')}
            role="button"
            onKeyDown={() => {}}
            tabIndex={0}
          >
            <div
              className={`${images_data.length < 1 || currentPicture.index === 0 ? 'hidden' : ''} 
                absolute top-1/2 left-1/2 transform -rotate-45 -translate-x-1/2 -translate-y-1/2
                border-t border-l border-navy-dark h-2.5 w-2.5`}
            />
          </div>
          <Image src={currentPicture.url} />
          <div
            className="absolute transform -translate-y-1/2 right-1 top-1/2 w-12 h-1/2 h-1/2 z-20"
            onClick={(e) => handleNextPicture(e, 'right')}
            role="button"
            onKeyDown={() => {}}
            tabIndex={0}
          >
            <div
              className={`${
                images_data.length < 1 || currentPicture.index === images_data.length - 1
                  ? 'hidden'
                  : ''
              } 
                absolute top-1/2 left-1/2 transform rotate-45 -translate-x-1/2 -translate-y-1/2
                border-t border-r border-navy-dark h-2.5 w-2.5`}
            />
          </div>
        </div>
      </div>
      <div />
    </div>
  );
};
ImageModal.defaultProps = {
  settings: {
    content: '',
    image: '',
    mobile_image: '',
    tablet_image: '',
    title: '',
    subheading: '',
    button_text: '',
    button_link: '',
  },
};

ImageModal.defaultProps = {
  review: {},
  image: '',
};

ImageModal.propTypes = {
  image: PropTypes.shape({
    original_url: PropTypes.string,
    thumb_url: PropTypes.string,
  }),
  review: PropTypes.shape({
    images_data: PropTypes.arrayOf(
      PropTypes.shape({
        length: PropTypes.number,
        original_url: PropTypes.string,
      })
    ),
  }),
  settings: PropTypes.shape({
    content: PropTypes.string,
    image: PropTypes.string,
    mobile_image: PropTypes.string,
    tablet_image: PropTypes.string,
    title: PropTypes.string,
    subheading: PropTypes.string,
    button_text: PropTypes.string,
    button_link: PropTypes.string,
  }),
};

const Image = styled.img`
  max-height: 720px;
`;

export default ImageModal;
