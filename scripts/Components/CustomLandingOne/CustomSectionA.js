import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ArrowRightIcon from '../Icons/ArrowRightIcon';
import { MachineWashableIcon, SupportIcon } from '../Icons';

const CustomSectionA = ({ section, border, icon }) => {
  const { section_image, section_link, section_link_text, section_text, section_title } = section;

  const iconSize = window.innerWidth > 640 ? 80 : 48;

  const icons = {
    MachineWashableIcon: (
      <MachineWashableIcon width={iconSize} height={iconSize} page="patterns-section" />
    ),
    SupportIcon: <SupportIcon width={iconSize} height={iconSize} page="patterns-section" />,
  };
  return (
    <div className="relative lg:block flex flex-col-reverse mx-auto mb-10 md:w-11/12 lg:max-w-6xl">
      <StyledText border={border}>
        <div className="absolute block left-8 lg:left-4 md:left-24 md:top-9 top-12">
          {icons[icon]}
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl mt-10 text-blue-light">{section_title}</h1>
          <p className="mb-12 text-base text-blue-dark">{section_text}</p>
          <div className="flex mb-14">
            <a
              className="border-b-4 border-orange-burnt font-normal no-underline pb-1 text-base text-navy"
              href={section_link}
            >
              {section_link_text}
            </a>
            <ArrowRightIcon />
          </div>
        </div>
      </StyledText>
      <StyledImage image={section_image} />
    </div>
  );
};

const StyledText = styled.div.attrs(({ border }) => ({
  className: `bg-offwhite-cream border-b-8 border-${border} lg:-translate-y-1/2 lg:absolute relative pl-24 pr-2 lg:pl-28 md:px-48 lg:pr-10 lg:top-1/2 lg:transform`,
}))`
  @media screen and (min-width: 960px) {
    width: 460px;
  }
`;

const StyledImage = styled.img.attrs(({ image }) => ({
  className: 'block lg:ml-auto',
  src: image,
  alt: 'fall chair',
}))`
  @media screen and (min-width: 960px) {
    height: 450px;
  }
`;

CustomSectionA.defaultProps = {
  section: {
    section_image: '',
    section_link: '',
    section_link_text: '',
    section_text: '',
    section_title: '',
  },
  border: '',
  icon: '',
};

CustomSectionA.propTypes = {
  section: PropTypes.shape({
    section_image: PropTypes.string,
    section_link: PropTypes.string,
    section_link_text: PropTypes.string,
    section_text: PropTypes.string,
    section_title: PropTypes.string,
  }),
  border: PropTypes.string,
  icon: PropTypes.string,
};

export default CustomSectionA;
