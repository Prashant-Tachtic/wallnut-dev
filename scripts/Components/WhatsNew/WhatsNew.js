import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getImageByDevice } from '../../utils/media';
import Media from '../Media';
import Button from '../Button';
import { pushEvent } from '../../utils/optimizely';
import {
  HANDLE_HOMEPAGE_LEFT_CTA,
  HANDLE_HOMEPAGE_TOP_RIGHT_CTA,
  HANDLE_HOMEPAGE_BOTTOM_RIGHT_CTA,
} from '../../utils/optimizely/constants';

const WhatsNew = (props) => {
  const { settings } = props;

  const {
    title,
    image_left_text,
    image_left,
    image_left_tablet,
    image_left_mobile,
    left_button_text,
    left_button_link,
    image_tr_text,
    image_top_right,
    image_top_right_tablet,
    image_top_right_mobile,
    tr_button_text,
    tr_button_link,
    image_br_text,
    image_bottom_right,
    image_bottom_right_tablet,
    image_bottom_right_mobile,
    br_button_text,
    br_button_link,
  } = settings;

  return (
    <div className="flex flex-col m-auto w-full max-w-screen-xxl mb-5 lg:mb-15 md:w-110 lg:w-auto">
      <h2 className="center font-serif font-normal mb-3 lg:mb-6 lg:text-3xl">{title}</h2>
      <div className="flex flex-col justify-center gap-5 px-3 md:px-0 lg:flex-row w-full">
        <LeftImageContainer>
          <Title>{image_left_text}</Title>
          <Media
            image={getImageByDevice({
              desktop: image_left,
              tablet: image_left_tablet,
              mobile: image_left_mobile,
            })}
            backgroundImage
            alt=""
            bgCover
            width="100%"
          />
          <BlockContainer className="lg:pb-10">
            <Block onClick={() => pushEvent(HANDLE_HOMEPAGE_LEFT_CTA, { revenue: 0, value: 0.0 })}>
              <Button link={left_button_link} white normal>
                {left_button_text}
              </Button>
            </Block>
          </BlockContainer>
        </LeftImageContainer>
        <div className="flex flex-col gap-5 w-full lg:w-98">
          <div className="relative">
            <Title>{image_tr_text}</Title>
            <Media
              image={getImageByDevice({
                desktop: image_top_right,
                tablet: image_top_right_tablet,
                mobile: image_top_right_mobile,
              })}
              alt=""
            />
            <BlockContainer>
              <Block
                onClick={() => pushEvent(HANDLE_HOMEPAGE_TOP_RIGHT_CTA, { revenue: 0, value: 0.0 })}
              >
                <Button link={tr_button_link} white normal>
                  {tr_button_text}
                </Button>
              </Block>
            </BlockContainer>
          </div>
          <div className="relative">
            <Title>{image_br_text}</Title>
            <Media
              image={getImageByDevice({
                desktop: image_bottom_right,
                tablet: image_bottom_right_tablet,
                mobile: image_bottom_right_mobile,
              })}
              alt=""
            />
            <BlockContainer>
              <Block
                onClick={() =>
                  pushEvent(HANDLE_HOMEPAGE_BOTTOM_RIGHT_CTA, { revenue: 0, value: 0.0 })
                }
              >
                <Button link={br_button_link} white>
                  {br_button_text}
                </Button>
              </Block>
            </BlockContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

const LeftImageContainer = styled.div.attrs({
  className: 'h-80 w-full relative md:h-110 lg:h-auto lg:w-115',
})``;

const Title = styled.div.attrs({
  className: 'absolute font-serif text-white text-xl top-3 right-6 lg:right-6 lg:text-2xl lg:top-6',
})``;

const BlockContainer = styled.div.attrs({
  className: 'absolute bottom-0 flex justify-center pb-5 w-full',
})``;

const Block = styled.div.attrs(({ onClick }) => ({
  className: 'w-10/12 lg:w-auto',
  onClick,
}))``;

WhatsNew.defaultProps = {
  settings: {
    title: '',
    image_left_text: '',
    image_left: '',
    image_left_tablet: '',
    image_left_mobile: '',
    left_button_text: '',
    left_button_link: '',
    image_tr_text: '',
    image_top_right: '',
    image_top_right_tablet: '',
    image_top_right_mobile: '',
    tr_button_text: '',
    tr_button_link: '',
    image_br_text: '',
    image_bottom_right: '',
    image_bottom_right_tablet: '',
    image_bottom_right_mobile: '',
    br_button_text: '',
    br_button_link: '',
  },
};

WhatsNew.propTypes = {
  settings: PropTypes.shape({
    title: PropTypes.string,
    image_left_text: PropTypes.string,
    image_left: PropTypes.string,
    image_left_tablet: PropTypes.string,
    image_left_mobile: PropTypes.string,
    left_button_text: PropTypes.string,
    left_button_link: PropTypes.string,
    image_tr_text: PropTypes.string,
    image_top_right: PropTypes.string,
    image_top_right_tablet: PropTypes.string,
    image_top_right_mobile: PropTypes.string,
    tr_button_text: PropTypes.string,
    tr_button_link: PropTypes.string,
    image_br_text: PropTypes.string,
    image_bottom_right: PropTypes.string,
    image_bottom_right_tablet: PropTypes.string,
    image_bottom_right_mobile: PropTypes.string,
    br_button_text: PropTypes.string,
    br_button_link: PropTypes.string,
  }),
};

export default WhatsNew;
