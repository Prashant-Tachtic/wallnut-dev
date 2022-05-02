import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CustomSectionB = ({ section }) => {
  const { section_image, section_link, section_link_text, section_text, section_title } = section;
  return (
    <div className="lg:relative p-4 md:p-5 mb-10 mx-auto md:w-11/12 lg:max-w-6xl bg-blue-baby">
      <StyledImage image={section_image} />
      <StyledText>
        <h2 className="mt-10 mb-5 font-serif">{section_title}</h2>
        <p className="mb-12 text-base text-blue-dark">{section_text}</p>
        <button
          className="bg-brown block font-light lg:w-full mb-12 mx-auto text-base text-center w-68"
          type="button"
        >
          <a className="block py-2 text-white no-underline" href={section_link}>
            {section_link_text}
          </a>
        </button>
      </StyledText>
    </div>
  );
};

const StyledImage = styled.img.attrs(({ image }) => ({
  className: 'block lg:ml-0 lg:mr-auto lg:w-7/12 mx-auto',
  src: image,
  alt: 'fall gif',
}))`
  @media screen and (min-width: 960px) {
    height: 450px;
  }
`;

const StyledText = styled.div.attrs({
  className:
    'lg:-translate-y-1/2 lg:absolute lg:pl-0 lg:pr-5 lg:right-5 lg:top-1/2 lg:transform md:px-38 relative',
})`
  @media screen and (min-width: 960px) {
    width: 420px;
  }
`;

CustomSectionB.defaultProps = {
  section: {
    section_image: '',
    section_link: '',
    section_link_text: '',
    section_text: '',
    section_title: '',
  },
};

CustomSectionB.propTypes = {
  section: PropTypes.shape({
    section_image: PropTypes.string,
    section_link: PropTypes.string,
    section_link_text: PropTypes.string,
    section_text: PropTypes.string,
    section_title: PropTypes.string,
  }),
};

export default CustomSectionB;
