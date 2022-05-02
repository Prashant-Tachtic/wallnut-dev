import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const VideoPromoSection = ({ assetUrls }) => {
  const { promoVideoImage, arrowGif, playButtonImage } = assetUrls;
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <VideoPromoContainer>
      <LeftContainer>
        <YoutubeContainer isPlaying={isPlaying}>
          {isPlaying && (
            <iframe
              title="promo-video"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/q-ZoXJlBSz0/?autoplay=1&loop=1&rel=0&wmode=transparent"
              frameBorder="0"
              allow="autoplay"
              allowFullScreen
              wmode="Opaque"
            />
          )}
        </YoutubeContainer>
        <PromoImage isPlaying={isPlaying} src={promoVideoImage} />
        <VideoPlayerIcon onClick={() => setIsPlaying(!isPlaying)} isPlaying={isPlaying}>
          <img src={playButtonImage} alt="" />
        </VideoPlayerIcon>
      </LeftContainer>
      <RightContainer>
        <div className="main-container">
          <GifArrow src={arrowGif} />
          <Text>
            <h2>Don&apos;t sweat it</h2>
            <p>
              Remove our upholstered chair covers, throw them in the wash, and easily reattach
              them—no rocket science here.
            </p>
            <div className="cta">
              <a href="/collections/all-chairs" className="button">
                Shop Collection
              </a>
            </div>
          </Text>
        </div>
      </RightContainer>
    </VideoPromoContainer>
  );
};

const VideoPromoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media only screen and (max-width: 1200px) {
    grid-template-columns: 2fr 1fr;
  }

  @media only screen and (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const LeftContainer = styled.div`
  position: relative;
  width: 75%;
  cursor: pointer;
  height: 100%;

  @media only screen and (max-width: 1200px) {
    width: 100%;
  }

  @media only screen and (max-width: 980px) {
    padding-left: 20px;
  }
`;

const PromoImage = styled.img`
  opacity: ${({ isPlaying }) => (isPlaying ? 0 : 1)};
`;

const YoutubeContainer = styled.div`
  position: absolute;
  top: 111px;
  left: 35px;
  width: 87%;
  height: 72%;
  z-index: ${({ isPlaying }) => (isPlaying ? 1 : -1)};

  @media only screen and (max-width: 1200px) {
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
`;

const VideoPlayerIcon = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  place-items: center;
  opacity: ${({ isPlaying }) => (isPlaying ? 0 : 1)};

  img {
    width: 120px;

    @media only screen and (max-width: 980px) {
      width: 50px;
    }
  }
`;

const RightContainer = styled.div.attrs({
  className: 'xs:grid xs:justify-items-center',
})`
  position: relative;

  @media only screen and (max-width: 1200px) {
    background: #acbfdad9;
  }

  h2 {
    margin-bottom: 20px;
  }

  .main-container {
    position: absolute;
    right: 0;
    bottom: 10rem;
    padding: 40px 70px 10px 130px;
    background: #acbfdad9;
    width: 40vw;
    max-width: 670px;

    @media (min-width: 1440px) {
      bottom: 12.5rem;
    }

    @media only screen and (max-width: 1200px) {
      position: initial;
      padding-left: 30px;
      padding-top: 125px;
      bottom: 10rem;
      width: 100%;
      background: none;
    }

    @media only screen and (max-width: 1074px) {
      bottom: 12vh;
      padding-top: 7rem;
      padding-left: 2.5rem;
      padding-right: 0px;
    }

    @media only screen and (max-width: 980px) {
      display: grid;
      grid-template-columns: 1fr;
      position: initial;
      width: 94%;
      justify-items: center;
      padding: 30px 15px 15px;
    }
  }

  .button {
    padding-right: 2vw;
    padding-left: 2vw;
    color: inherit;
    white-space: nowrap;
    max-width: 22.5rem;

    @media only screen and (max-width: 1200px) {
      padding: 5px 1em;
      font-size: 1rem;
    }

    @media only screen and (max-width: 980px) {
      font-size: 1rem;
      padding: 7px 30px;
    }
  }
`;

const Text = styled.div`
  @media (min-width: 1500px) {
    padding-left: 4rem;
  }
  @media (min-width: 1600px) {
    padding-left: 7rem;
  }
  @media only screen and (max-width: 980px) {
    text-align: center;
  }
`;

const GifArrow = styled.img`
  position: absolute;
  width: 15vw;
  max-width: 250px;
  transform: rotate(30deg);
  bottom: 17rem;
  right: 12rem;
  ${
    '' /* @media screen and (max-width: 1400px) {
    bottom: 18rem;
  } */
  }

  @media screen and (max-width: 1220px) {
    display: none;
  }
`;

VideoPromoSection.propTypes = {
  assetUrls: PropTypes.shape({
    promoVideoImage: PropTypes.string.isRequired,
    arrowGif: PropTypes.string.isRequired,
    playButtonImage: PropTypes.string.isRequired,
  }).isRequired,
};

export default VideoPromoSection;
