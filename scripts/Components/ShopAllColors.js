import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ShopAllColors = (props) => {
  const { settings, blocks } = props;
  const colorSections = blocks.filter((block) => block.type === 'section');
  const colorFooterSections = blocks.filter((block) => block.type === 'footer');

  return (
    <div className="relative px-4 md:px-0">
      <h2 className="mt-4 text-center text-2xl font-serif md:text-3xl">
        {settings.shop_all_colors_header}
      </h2>
      <div className="lg:w-8/12 md:px-10 md:w-auto mx-auto">
        <p className="mt-4 text-center text-base md:text-lg">
          {settings.shop_all_colors_header_text}
        </p>
        <ul
          className={`grid grid-cols-${colorSections.length} list-none mb-10 md:w-1/2 mx-auto pl-0 text-center`}
        >
          {colorSections.map((block) => (
            <li>
              <div className="mx-auto w-8">
                <a href={block.settings.colors_button_link}>
                  <img src={block.settings.colors_icon} alt="colors icon" />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* This section is for mobile */}
      {colorSections.map((block) => (
        <div className="mb-7 md:hidden">
          <div className="mb-2 text-center">
            <img src={block.settings.colors_image} alt="colors" />
          </div>
          <div>
            <div className="mb-2">
              <div className="inline-block w-8">
                <img src={block.settings.colors_icon} alt="colors icon" />
              </div>
              <h4 className="inline-block ml-4 text-blue-dark font-serif">
                {block.settings.colors_header}
              </h4>
            </div>
            <p className="mb-4 text-sm">{block.settings.colors_text}</p>
            <div className="text-center">
              <button
                className="w-10/12 bg-brown font-light text-base text-center font-serif"
                type="button"
              >
                <a
                  className="block py-2 text-white no-underline"
                  href={block.settings.colors_button_link}
                >
                  {block.settings.colors_button_text}
                </a>
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* End mobile section */}

      {/* This section is for desktop */}
      {colorSections.map((block) => {
        if (blocks.indexOf(block) % 2 === 0 || blocks.indexOf(block) === 0) {
          return (
            <div className="hidden lg:grid-cols-5 mb-4 md:grid md:grid-cols-4 relative">
              <img
                className={`${
                  blocks.indexOf(block) === 0 || blocks.indexOf(block) === blocks.length - 3
                    ? ''
                    : 'hidden'
                } absolute -z-10 -top-4 -left-20`}
                src={
                  blocks.indexOf(block) === 0
                    ? props.settings.shop_all_colors_background_one
                    : props.settings.shop_all_colors_background_two
                }
                alt="background"
              />
              <div className="lg:col-span-3 lg:h-full lg:mb-2 lg:ml-auto lg:mr-4 lg:px-1 lg:w-11/12 lg:block md:hidden">
                <img src={block.settings.colors_image} alt="colors" />
              </div>
              <TabletImage img={block.settings.colors_image} />
              <div className="lg:col-span-2 lg:ml-0 lg:my-auto lg:pr-10 md:col-span-2 md:ml-4">
                <div className="mb-2">
                  <div className="inline-block w-8">
                    <img src={block.settings.colors_icon} alt="colors icon" />
                  </div>
                  <h2 className="inline-block ml-4 font-serif text-2xl text-blue-dark">
                    {block.settings.colors_header}
                  </h2>
                </div>
                <p className="text-base">{block.settings.colors_text}</p>
                <div>
                  <button
                    className="w-3/4 bg-brown font-light text-base text-center font-serif"
                    type="button"
                  >
                    <a
                      className="block py-2 text-white no-underline"
                      href={block.settings.colors_button_link}
                    >
                      {block.settings.colors_button_text}
                    </a>
                  </button>
                </div>
              </div>
            </div>
          );
        }
        return (
          <div className="hidden lg:grid-cols-5 mb-4 md:grid md:grid-cols-4 relative">
            <img
              className={`${
                blocks.indexOf(block) === blocks.length - 3 ? '' : 'hidden'
              } absolute -z-10 -bottom-4 -right-20`}
              src={props.settings.shop_all_colors_background_two}
              alt="background"
            />
            <div className="lg:col-span-2 lg:mr-0 lg:my-auto lg:pl-10 md:col-span-2 md:mr-4 text-right">
              <div className="mb-2 text-right">
                <h2 className="inline-block mr-4 text-right font-serif text-2xl text-blue-dark">
                  {block.settings.colors_header}
                </h2>
                <div className="inline-block w-8">
                  <img src={block.settings.colors_icon} alt="colors icon" />
                </div>
              </div>
              <p className="text-base">{block.settings.colors_text}</p>
              <div>
                <button
                  className="w-3/4 bg-brown font-light text-base text-center font-serif"
                  type="button"
                >
                  <a
                    className="block py-2 text-white no-underline"
                    href={block.settings.colors_button_link}
                  >
                    {block.settings.colors_button_text}
                  </a>
                </button>
              </div>
            </div>
            <div className="lg:col-span-3 lg:h-full lg:mb-2 lg:mr-auto lg:ml-4 lg:px-1 lg:w-11/12 lg:block md:hidden">
              <img src={block.settings.colors_image} alt="colors" />
            </div>
            <TabletImage img={block.settings.colors_image} />
          </div>
        );
      })}
      {/* End desktop section */}

      <h2 className="mt-10 font-serif mb-6 text-center">
        {settings.shop_all_colors_footer_header}
      </h2>
      <div className={`mb-12 lg:grid lg:grid-cols-${colorFooterSections.length}`}>
        {colorFooterSections.map((block) => (
          <div
            className={`${colorFooterSections.indexOf(block) % 2 === 0 ? '' : 'lg:ml-auto'} 
                        mb-4 lg:relative lg:px-2 md:px-20`}
          >
            <div className="mb-2">
              <img src={block.settings.colors_footer_image} alt="footer" />
            </div>
            <h4 className="font-serif lg:text-left mb-2 md:text-center">
              {block.settings.colors_footer_header}
            </h4>
            <p className="lg:text-left md:text-center text-sm">
              {block.settings.colors_footer_text}
            </p>
            <div className="block border border-brown font-serif lg:-bottom-10 lg:absolute md:w-1/2 mx-auto rounded-3xl text-base text-center w-10/12">
              <a
                className="block py-2 text-brown no-underline"
                href={block.settings.colors_footer_button_link}
              >
                {block.settings.colors_footer_button_text}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const TabletImage = styled.div.attrs({
  className: 'hidden bg-cover lg:hidden md:block md:col-span-2 md:ml-0',
})`
  background-image: url(${(props) => props.img});
`;

ShopAllColors.defaultProps = {
  blocks: [],
  settings: [],
};

ShopAllColors.propTypes = {
  blocks: PropTypes.arrayOf(PropTypes.shape({})),
  settings: PropTypes.arrayOf(PropTypes.shape({})),
};

export default ShopAllColors;
