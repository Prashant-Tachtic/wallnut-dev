import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Video from './Video';

const VideoComponent = ({ videoLinks }) => {
  const { link1, link2, link3 } = videoLinks;
  const [videoPlaying, setVideoPlaying] = useState(1);
  const videos = [
    {
      link: link1,
      header: 'Remove the Cover',
      body: `Unzip, unsnap, or unstrap your chair's upholstered cover`,
    },
    {
      link: link2,
      header: 'Wash and Dry',
      body: 'Wash the cover right at home with mild detergent. Dry on low heat.',
    },
    {
      link: link3,
      header: 'Reattach',
      body: 'Zip, snap, or strap your cover back into place for refreshed comfort and style.',
    },
  ];
  return (
    <div className="flex justify-center bg-grey px-4 lg:px-8 py-9 lg:py-12">
      <div className="grid gird-cols-1 lg:grid-cols-3  gap-4 max-w-screen-xxl">
        {videos.map((video, index) => (
          <Video
            key={index}
            index={`${index + 1}`}
            link={video.link}
            header={video.header}
            body={video.body}
            videoPlaying={videoPlaying}
            setVideoPlaying={setVideoPlaying}
          />
        ))}
      </div>
    </div>
  );
};

VideoComponent.defaultProps = {
  videoLinks: {
    link1: 'https://cdn.shopify.com/s/files/1/0492/6321/4743/files/CL-Step-one_534x375px_1.mp4',
    link2: 'https://cdn.shopify.com/s/files/1/0492/6321/4743/files/CL-Step-two_534x375px_1.mp4',
    link3: 'https://cdn.shopify.com/s/files/1/0492/6321/4743/files/CL-Step-Three_534x375px_1.mp4',
  },
};

VideoComponent.propTypes = {
  videoLinks: PropTypes.shape({
    link1: PropTypes.string,
    link2: PropTypes.string,
    link3: PropTypes.string,
  }),
};

export default VideoComponent;
