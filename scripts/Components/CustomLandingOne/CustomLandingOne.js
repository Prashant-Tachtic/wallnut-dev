import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ValuePropSection from '../ValuePropSection';
import VideoComponent from '../ProductFeature/VideoComponent';
import CustomSectionA from './CustomSectionA';
import CustomSectionB from './CustomSectionB';
import ProductRecommendation from '../ProductRecommendation';
import InstagramGridOne from '../InstagramGrid/InstagramGridOne';

const CustomLandingOne = ({ settings, videos }) => {
  const {
    page_title,
    desktop_hero,
    mobile_hero,
    tablet_hero,
    header,
    header_button_link,
    header_button_text,
    custom_section_1_image,
    custom_section_1_link,
    custom_section_1_link_text,
    custom_section_1_text,
    custom_section_1_title,
    custom_section_2_image,
    custom_section_2_link,
    custom_section_2_link_text,
    custom_section_2_text,
    custom_section_2_title,
    custom_section_3_image,
    custom_section_3_link,
    custom_section_3_link_text,
    custom_section_3_text,
    custom_section_3_title,
  } = settings;

  const productRecsTitles = {
    'Dog Chairs': '4 Pet-Friendly Styles, Over 30 Washable Colors & Patterns',
    'Washable Chairs': '4 Chair Styles, Over 30 Washable Colors & Patterns',
    'Pattern Chairs': '4 Chair Styles, Over 30 Washable Colors & Patterns',
  };

  return (
    <div>
      <div className="flex flex-col">
        <div>
          <StyledHero image={desktop_hero}>
            <StyledHeader>{header}</StyledHeader>
            <button
              className="bg-brown block font-light lg:w-96 mb-12 mx-auto text-base text-center w-68"
              type="button"
            >
              <a className="block py-2 text-white no-underline" href={header_button_link}>
                {header_button_text}
              </a>
            </button>
          </StyledHero>
          <StyledHeroMobile image={mobile_hero}>
            <StyledHeader>{header}</StyledHeader>
            <button
              className="bg-brown block font-light lg:w-96 mb-12 mx-auto text-base text-center w-68"
              type="button"
            >
              <a className="block py-2 text-white no-underline" href={header_button_link}>
                {header_button_text}
              </a>
            </button>
          </StyledHeroMobile>
          <StyledHeroTablet image={tablet_hero}>
            <StyledHeader>{header}</StyledHeader>
            <button
              className="bg-brown block font-light lg:w-96 mb-12 mx-auto text-base text-center w-68"
              type="button"
            >
              <a className="block py-2 text-white no-underline" href={header_button_link}>
                {header_button_text}
              </a>
            </button>
          </StyledHeroTablet>
        </div>
        <ValuePropSection page="patterns-landing" />
        <VideoComponent videoLinks={videos} />
        <div className="flex flex-col mt-15">
          <CustomSectionA
            section={{
              section_image: custom_section_1_image,
              section_link: custom_section_1_link,
              section_link_text: custom_section_1_link_text,
              section_text: custom_section_1_text,
              section_title: custom_section_1_title,
            }}
            border="green-aqua"
            icon="MachineWashableIcon"
          />
          <CustomSectionB
            section={{
              section_image: custom_section_2_image,
              section_link: custom_section_2_link,
              section_link_text: custom_section_2_link_text,
              section_text: custom_section_2_text,
              section_title: custom_section_2_title,
            }}
          />
          <CustomSectionA
            section={{
              section_image: custom_section_3_image,
              section_link: custom_section_3_link,
              section_link_text: custom_section_3_link_text,
              section_text: custom_section_3_text,
              section_title: custom_section_3_title,
            }}
            border="yellow-light"
            icon="SupportIcon"
          />
        </div>
        <ProductRecommendation title={productRecsTitles[page_title]} />
      </div>
      <div className="flex justify-center">
        <InstagramGridOne settings={settings} />
      </div>
    </div>
  );
};

const StyledHeader = styled.h1.attrs({
  className: 'mx-auto md:mb-8 text-blue-dark text-4xl lg:text-5xl text-center w-11/12 md:w-3/4',
})`
  @media screen and (min-width: 960px) {
    width: 700px !important;
  }
`;

const StyledHero = styled.div.attrs({
  className: 'hidden lg:block pt-10 bg-cover bg-no-repeat bg-center lg:h-110 h-100 w-full',
})`
  background-image: url(${(props) => props.image});
`;
const StyledHeroMobile = styled.div.attrs({
  className: ' md:hidden pt-10 bg-cover bg-no-repeat bg-center lg:h-110 h-100 w-full',
})`
  background-image: url(${(props) => props.image});
`;

const StyledHeroTablet = styled.div.attrs({
  className:
    'hidden md:block lg:hidden pt-10 bg-cover bg-no-repeat bg-center lg:h-110 h-100 w-full',
})`
  background-image: url(${(props) => props.image});
`;

CustomLandingOne.defaultProps = {
  settings: {},
  videos: {},
};

CustomLandingOne.propTypes = {
  settings: PropTypes.shape({
    page_title: PropTypes.string,
    desktop_hero: PropTypes.string,
    tablet_hero: PropTypes.string,
    mobile_hero: PropTypes.string,
    header: PropTypes.string,
    header_button_link: PropTypes.string,
    header_button_text: PropTypes.string,
    custom_section_1_image: PropTypes.string,
    custom_section_1_link: PropTypes.string,
    custom_section_1_link_text: PropTypes.string,
    custom_section_1_text: PropTypes.string,
    custom_section_1_title: PropTypes.string,
    custom_section_2_image: PropTypes.string,
    custom_section_2_link: PropTypes.string,
    custom_section_2_link_text: PropTypes.string,
    custom_section_2_text: PropTypes.string,
    custom_section_2_title: PropTypes.string,
    custom_section_3_image: PropTypes.string,
    custom_section_3_link: PropTypes.string,
    custom_section_3_link_text: PropTypes.string,
    custom_section_3_text: PropTypes.string,
    custom_section_3_title: PropTypes.string,
  }),
  videos: PropTypes.shape({}),
};

export default CustomLandingOne;
