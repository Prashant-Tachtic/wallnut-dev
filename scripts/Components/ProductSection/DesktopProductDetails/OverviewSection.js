import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../../VideoPlayer';
import PDPValueProps from '../PDPValueProps';

const OverviewSection = ({ productBlock }) => {
  const { settings } = productBlock;
  const {
    about_desktop_heading,
    about_paragraph,
    about_paragraphNote,
    about_media_type,
    about_image,
    about_video_url,
  } = settings;

  return (
    <div className="mx-auto lg:col-span-2 lg:grid lg:grid-cols-2 gap-5 max-w-screen-xxl">
      <div className="pb-5 border-grey-50 border-b border-solid lg:px-10 md:border-none">
        <div>
          {about_image && about_media_type === 'image' && <img src={about_image} alt="" />}
          {about_video_url && about_media_type === 'video' && (
            <VideoPlayer link={about_video_url} autoPlay loop />
          )}
          <div className="font-serif text-xl font-light mt-3">{about_desktop_heading}</div>
          <p className="text-base font-extralight mt-3 mb-5">{about_paragraph}</p>
          {about_paragraphNote && (
            <p className="text-sm font-normal mb-3 text-brown">{about_paragraphNote}</p>
          )}
        </div>
      </div>
      <PDPValueProps />
    </div>
  );
};

OverviewSection.defaultProps = {
  productBlock: {},
};

OverviewSection.propTypes = {
  productBlock: PropTypes.shape({
    settings: PropTypes.shape({
      about_desktop_heading: PropTypes.string,
      about_paragraph: PropTypes.string,
      about_paragraphNote: PropTypes.string,
      about_image: PropTypes.string,
      about_video_url: PropTypes.string,
      about_media_type: PropTypes.string,
      product: PropTypes.string,
    }),
  }),
};

export default OverviewSection;
