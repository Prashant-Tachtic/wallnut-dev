import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';
import { isMobile } from '../../utils';

const Video = ({ link, header, body, index, videoPlaying, setVideoPlaying }) => {
  const [play, setPlay] = useState(true);
  const videoRef = useRef();
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const isObservable = isMobile(navigator) && mediaQuery.matches && videoRef.current;
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0.75) {
            setPlay(true);
          } else {
            setPlay(false);
          }
        });
      },
      { threshold: 0.75 }
    );
    if (isObservable) {
      intersectionObserver.observe(videoRef.current);
    }
  }, []);

  useEffect(() => {
    const video = document.getElementById(`video${index}`);
    const mediaQuery = window.matchMedia('(min-width: 769px)');
    if (mediaQuery) {
      if (index === videoPlaying.toString()) {
        video.play();
      }
    }
  }, [index, videoPlaying, setVideoPlaying]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const isObservable = isMobile(navigator) && mediaQuery.matches && videoRef.current;
    if (isObservable) {
      const vid = document.getElementById(`video${index}`);
      if (play) {
        vid.play();
        vid.loop = true;
      }
      if (!play) {
        vid.pause();
        vid.loop = true;
      }
    }
  }, [index, play]);

  const handleVideo = () => {
    const mediaQuery = window.matchMedia('(min-width: 769px)');
    if (mediaQuery) {
      if (videoPlaying < 3) {
        setVideoPlaying(Number(index) + 1);
      } else {
        setVideoPlaying(1);
      }
    }
  };

  return (
    <div ref={videoRef} className="flex flex-col mb-10 lg:mb-0">
      <div className="relative">
        <video id={`video${index}`} onEnded={handleVideo} width="100%" muted playsInline>
          <source src={`${link}#t=0.001`} type="video/mp4" />
        </video>
        <Triangle>
          <div className="mt-4">{index}</div>
        </Triangle>
      </div>
      <TextContainer>
        <Header>{header}</Header>
        <BodyText>{body}</BodyText>
      </TextContainer>
    </div>
  );
};

const TextContainer = styled.div.attrs({
  className: 'flex flex-col text-center font-serif h-20',
})``;

const Header = styled.div.attrs({
  className: 'text-lg lg:text-xl font-medium text-blue mt-4 lg:mt-6',
})``;
const BodyText = styled.div.attrs({
  className: 'text-base lg:text-lg mt-3 lg:mt-0.5',
})``;

const Triangle = styled.div(() => [
  tw`absolute bottom-0 flex justify-center font-serif`,
  `width: 0;
  left:43%;
    height: 0;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-bottom: 50px solid #f7f7f7;`,
]);

Video.defaultProps = {
  link: '',
  header: '',
  body: '',
  index: '',
  videoPlaying: 1,
  setVideoPlaying: () => null,
};

Video.propTypes = {
  link: PropTypes.string,
  header: PropTypes.string,
  body: PropTypes.string,
  index: PropTypes.string,
  videoPlaying: PropTypes.number,
  setVideoPlaying: PropTypes.func,
};

export default Video;
