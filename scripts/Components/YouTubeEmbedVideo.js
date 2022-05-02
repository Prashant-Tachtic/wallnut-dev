import React from 'react';
import PropTypes from 'prop-types';

const YouTubeEmbdedVideo = ({ videoLink }) => {
  const videoLinkSplit = videoLink.split('/');
  const videoId = videoLinkSplit[videoLinkSplit.length - 1];

  return (
    <iframe
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};

YouTubeEmbdedVideo.propTypes = {
  videoLink: PropTypes.string.isRequired,
};

export default YouTubeEmbdedVideo;
