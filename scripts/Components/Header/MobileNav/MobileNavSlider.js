import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';
import { ArrowDownIcon } from '../../Icons';
import { isSaleOn } from '../../../utils';

const MobileNavSlider = ({ isOpen, links, themeSettings, settings }) => {
  const {
    sale_start,
    sale_end,
    black_friday_sale_start,
    black_friday_sale_end,
    cyber_monday_sale_start,
    cyber_monday_sale_end,
  } = themeSettings;

  const [openShop, setOpenShop] = useState(true);

  return (
    <>
      <Container isOpen={isOpen} id="mobile-nav-slider">
        <ShopContainer openShop={openShop} role="button" tabIndex="0" onKeyPress={() => {}}>
          <a href="/collections/all">
            <Title>Shop</Title>
          </a>
          <IconContainer onClick={() => setOpenShop(!openShop)}>
            <IconWrapper openShop={openShop}>
              <ArrowDownIcon />
            </IconWrapper>
          </IconContainer>
        </ShopContainer>
        <ShopMenuContainer openShop={openShop}>
          {links.map((link, index) => (
            <ShopItem href={link.url} key={index}>
              <Image src={link.image} />
              <ProductLink>{link.name}</ProductLink>
            </ShopItem>
          ))}

          {(isSaleOn(sale_start, sale_end) || settings.show_hero_all) && (
            <HeroLink href={settings.sale_hero_link}>
              <HeroLinkContainer img={settings.sale_hero_image}>
                {settings.show_hero_button && <HeroLinkButton>Shop New Patterns</HeroLinkButton>}
              </HeroLinkContainer>
            </HeroLink>
          )}

          {isSaleOn(black_friday_sale_start, black_friday_sale_end) && (
            <HeroLink href={settings.black_friday_sale_hero_link}>
              <HeroLinkContainer img={settings.black_friday_sale_hero_image} />
            </HeroLink>
          )}

          {isSaleOn(cyber_monday_sale_start, cyber_monday_sale_end) && (
            <HeroLink href={settings.cyber_monday_sale_hero_link}>
              <HeroLinkContainer img={settings.cyber_monday_sale_hero_image} />
            </HeroLink>
          )}
        </ShopMenuContainer>
        <div className="flex flex-col h-1/4">
          <a href="/pages/about" className="mb-2">
            <Title>About</Title>
          </a>
          <a href="/pages/how-it-works">
            <Title>How it works</Title>
          </a>
        </div>
      </Container>
      <BgOverlay isOpen={isOpen} />
    </>
  );
};

const ShopItem = styled.a.attrs({
  className: 'bg-white rounded-xl mb-2 pl-2 py-3',
})``;

const ShopMenuContainer = styled.div(({ openShop }) => [
  tw`flex flex-col transition duration-150 ease-in-out h-auto visible`,
  !openShop && tw`h-0 invisible`,
]);

const ShopContainer = styled.div(({ openShop }) => [
  tw`flex mt-4 w-full`,
  openShop ? tw`mb-6` : tw`mb-0`,
]);

const IconContainer = styled.div(() => [tw`flex items-center w-full justify-end `]);

const HeroLink = styled.a.attrs({
  className: '',
})``;

const HeroLinkContainer = styled.div.attrs({
  className: 'relative h-32 bg-contain bg-no-repeat rounded-xl flex mb-8',
})`
  background-image: url(${(props) => props.img});
`;

const HeroLinkButton = styled.div.attrs({
  className:
    'bg-white capitalize center font-normal font-serif hover:no-underline m-auto mb-2.5 pointer px-11 py-1.5 rounded-full text-sm whitespace-nowrap',
})``;

const IconWrapper = styled.div(({ openShop }) => [
  tw`transform transition-transform duration-150 ease-in-out`,
  !openShop && tw`rotate-180`,
]);

const Image = styled.img(() => [tw`w-12`]);

const ProductLink = styled.span(() => [
  tw`text-base font-extralight capitalize font-serif ml-2.5`,
  `font-weight:300`,
]);

const Title = styled.div(() => [tw`text-base font-normal font-serif uppercase`]);

const Container = styled.div.attrs(({ isOpen }) => {
  const className =
    'top-14 absolute overflow-y-auto px-4.5 pb-33 left-0 w-screen h-screen bg-grey transform  lg:hidden';
  return {
    className:
      className + (isOpen ? 'translate-y-0 z-50 opacity-100' : 'translate-y-full opacity-0'),
  };
})`
  max-width: 400px;
  @media screen and (min-width: 768px) {
    top: 83px !important;
  }
`;

const BgOverlay = styled.div(({ isOpen }) => [
  tw`bg-black h-screen w-screen left-0 fixed z-10 opacity-60`,
  `top: 83px;`,
  !isOpen && tw`hidden`,
  isOpen && tw`block`,
]);

MobileNavSlider.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      url: PropTypes.string,
    })
  ).isRequired,
  themeSettings: PropTypes.shape({
    sale_start: PropTypes.string,
    sale_end: PropTypes.string,
    black_friday_sale_start: PropTypes.string,
    black_friday_sale_end: PropTypes.string,
    cyber_monday_sale_start: PropTypes.string,
    cyber_monday_sale_end: PropTypes.string,
  }).isRequired,
  settings: PropTypes.shape({
    sale_hero_link: PropTypes.string,
    sale_hero_image: PropTypes.string,
    show_hero_button: PropTypes.bool,
    show_hero_all: PropTypes.bool,
    black_friday_sale_hero_link: PropTypes.string,
    black_friday_sale_hero_image: PropTypes.string,
    cyber_monday_sale_hero_link: PropTypes.string,
    cyber_monday_sale_hero_image: PropTypes.string,
  }).isRequired,
};

export default MobileNavSlider;
