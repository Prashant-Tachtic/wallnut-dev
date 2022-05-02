import React from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = ({ link, width, controls, muted, autoPlay = false, loop = false, height }) => (
  <video
    className={height ? 'h-full' : ''}
    width={width}
    muted={muted}
    controls={controls}
    playsInline
    autoPlay={autoPlay}
    loop={loop}
  >
    <source src={`${link}#t=0.001`} type="video/mp4" />
    <track src={link} kind="captions" label="english_captions" />
  </video>
);

VideoPlayer.defaultProps = {
  link: '',
  width: '100%',
  controls: false,
  muted: true,
  height: '',
  autoPlay: false,
  loop: false,
};

VideoPlayer.propTypes = {
  link: PropTypes.string,
  width: PropTypes.string,
  controls: PropTypes.bool,
  autoPlay: PropTypes.bool,
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  height: PropTypes.string,
};

export default VideoPlayer;
