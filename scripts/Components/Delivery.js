import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Delivery = ({ sectionDataWithIcons }) => (
  <>
    {sectionDataWithIcons.map((section, i) => (
      <div className="mb-4 md:col-span-2" key={i}>
        <IconTitleContainer>
          <div className="h-9 md:mt-10">{section.icon && section.icon}</div>
          <div>
            {section.title && (
              <h3 className="text-base text-blue-light font-serif font-normal md:mb-3">
                {section.title}
              </h3>
            )}
            {section.paragraph && (
              <p
                className="text-sm font-extralight mb-0 hidden md:block md:text-base"
                dangerouslySetInnerHTML={{ __html: section.paragraph }}
              />
            )}
            {section.linkUrl && section.linkText && (
              <Link className="hidden font-xs md:inline-block md:text-sm" href={section.linkUrl}>
                {section.linkText}
              </Link>
            )}
          </div>
        </IconTitleContainer>
        {section.paragraph && (
          <p
            className="text-sm font-extralight mb-0 md:hidden md:text-base"
            dangerouslySetInnerHTML={{ __html: section.paragraph }}
          />
        )}
        {section.linkUrl && section.linkText && (
          <Link className="md:hidden" href={section.linkUrl}>
            {section.linkText}
          </Link>
        )}
      </div>
    ))}
  </>
);

const IconTitleContainer = styled.div.attrs({
  className: 'grid items-center gap-x-4 mb-3 md:items-start',
})`
  grid-template-columns: 2fr 12fr;
`;

const Link = styled.a.attrs({
  className: 'font-serif mb-5 text-brown text-xs',
})`
  text-decoration: underline;
`;

Delivery.propTypes = {
  sectionDataWithIcons: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Delivery;
