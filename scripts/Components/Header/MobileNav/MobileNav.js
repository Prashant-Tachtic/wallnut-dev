import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MobileNavIcon from './MobileNavIcon';
import MobileNavSlider from './MobileNavSlider';

const MobileNav = ({ settings, themeSettings }) => {
  const links = [
    {
      image: settings.image_link_1,
      name: settings.text_link_1,
      url: settings.url_link_1,
    },
    {
      image: settings.image_link_2,
      name: settings.text_link_2,
      url: settings.url_link_2,
    },
    {
      image: settings.image_link_3,
      name: settings.text_link_3,
      url: settings.url_link_3,
    },
    {
      image: settings.image_link_4,
      name: settings.text_link_4,
      url: settings.url_link_4,
    },
    {
      image: settings.image_link_5,
      name: settings.text_link_5,
      url: settings.url_link_5,
    },
  ];

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    document.querySelector('.js').style.paddingBottom = '0px';
    if (document.querySelector('#preview-bar-iframe')) {
      document.querySelector('#preview-bar-iframe').remove();
    }
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.height = '100vh';
      document.documentElement.style.height = '100vh';
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    }
    if (!open) {
      document.body.style.overflow = 'auto';
      document.body.style.postion = '';
      document.body.style.height = '';
      document.documentElement.style.overflow = '';
      document.documentElement.style.height = '';
    }
  }, [open]);

  return (
    <MobileNavWrapper>
      <MobileNavSlider
        isOpen={open}
        links={links}
        themeSettings={themeSettings}
        settings={settings}
      />
      <BgOverlay isOpen={open} />
      <div
        onClick={handleClick}
        onKeyPress={() => {}}
        role="button"
        tabIndex="0"
        className="h-6 flex justify-center lg:hidden"
      >
        <MobileNavIcon isOpen={open} setOpen={setOpen} />
      </div>
    </MobileNavWrapper>
  );
};

const MobileNavWrapper = styled.div.attrs({
  className: 'flex items-center pl-1.5 lg:hidden h-full',
})``;

const BgOverlay = styled.div(({ isOpen }) => [
  ` background-color: #000;
  height: 100 vh;
  width: 100 vw;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 10;
  opacity: 0.65;
  `,
  !isOpen && `display: none;`,
  isOpen && `display:block;`,
]);

MobileNav.propTypes = {
  themeSettings: PropTypes.shape({}).isRequired,
  settings: PropTypes.shape({
    image_link_1: PropTypes.string,
    text_link_1: PropTypes.string,
    url_link_1: PropTypes.string,
    image_link_2: PropTypes.string,
    text_link_2: PropTypes.string,
    url_link_2: PropTypes.string,
    image_link_3: PropTypes.string,
    text_link_3: PropTypes.string,
    url_link_3: PropTypes.string,
    image_link_4: PropTypes.string,
    text_link_4: PropTypes.string,
    url_link_4: PropTypes.string,
    image_link_5: PropTypes.string,
    text_link_5: PropTypes.string,
    url_link_5: PropTypes.string,
    sale_hero_image: PropTypes.string,
    sale_hero_link: PropTypes.string,
    show_hero_button: PropTypes.bool,
    show_hero_all: PropTypes.bool,
  }).isRequired,
};

export default MobileNav;
