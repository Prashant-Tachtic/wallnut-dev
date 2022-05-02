import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';
import { isSaleOn, isAnySaleOn } from '../../../utils/index';
import SaleNavHeroImage from '../../Sale/SaleNavHeroImage';
import NavHero from '../NavHero';

const Nav = (props) => {
  const { themeSettings, newsettings } = props;
  const {
    sale_end,
    sale_start,
    black_friday_sale_start,
    black_friday_sale_end,
    cyber_monday_sale_start,
    cyber_monday_sale_end,
  } = themeSettings;

  const [hoverIndex, setHoverIndex] = useState(6);
  const links = [
    {
      image: newsettings.image_link_1,
      name: newsettings.text_link_1,
      url: newsettings.url_link_1,
    },
    {
      image: newsettings.image_link_2,
      name: newsettings.text_link_2,
      url: newsettings.url_link_2,
    },
    {
      image: newsettings.image_link_3,
      name: newsettings.text_link_3,
      url: newsettings.url_link_3,
    },
    {
      image: newsettings.image_link_4,
      name: newsettings.text_link_4,
      url: newsettings.url_link_4,
    },
    {
      image: newsettings.image_link_5,
      name: newsettings.text_link_5,
      url: newsettings.url_link_5,
    },
    {
      image: newsettings.image_link_6,
      name: newsettings.text_link_6,
      url: newsettings.url_link_6,
    },
  ];

  return (
    <NavContainer>
      <LinkBox>
        {links.map((link, index) => {
          if (index === 5) {
            return (
              <ShopAllLink
                key={index}
                href={link.url}
                onMouseEnter={() => setHoverIndex(index + 1)}
              >
                <LinkWrapper>{link.name}</LinkWrapper>
              </ShopAllLink>
            );
          }
          return (
            <MenuLink key={index} href={link.url}>
              <LinkWrapper onMouseEnter={() => setHoverIndex(index + 1)}>{link.name}</LinkWrapper>
            </MenuLink>
          );
        })}
      </LinkBox>
      <GifBox>
        {links.map((link, index) => {
          if (index === 5) {
            return (
              <a href={link.url} key={index}>
                <MainGif hover={hoverIndex === 6} src={link.image} />
              </a>
            );
          }
          return (
            <a href={link.url} key={index}>
              <Gif hover={hoverIndex === index + 1} src={link.image} />
            </a>
          );
        })}
      </GifBox>
      {isSaleOn(sale_start, sale_end) && (
        <SaleNavHeroImage
          show_sale_hero_button={newsettings.show_sale_hero_button}
          sale_hero_image={newsettings.sale_hero_image}
          sale_hero_link={newsettings.sale_hero_link}
          newNav
        />
      )}

      {isSaleOn(black_friday_sale_start, black_friday_sale_end) && (
        <SaleNavHeroImage
          show_sale_hero_button={newsettings.show_sale_hero_button}
          sale_hero_image={newsettings.black_friday_sale_hero_image}
          sale_hero_link={newsettings.black_friday_sale_hero_link}
          newNav
        />
      )}

      {isSaleOn(cyber_monday_sale_start, cyber_monday_sale_end) && (
        <SaleNavHeroImage
          show_sale_hero_button={newsettings.show_sale_hero_button}
          sale_hero_image={newsettings.cyber_monday_sale_hero_image}
          sale_hero_link={newsettings.cyber_monday_sale_hero_link}
          newNav
        />
      )}

      {!isAnySaleOn(themeSettings) && (
        <NavHero
          hero_image={newsettings.hero_image}
          hero_link={newsettings.hero_link}
          hero_link_text={newsettings.hero_link_text}
          newNav
        />
      )}
    </NavContainer>
  );
};

const NavContainer = styled.div.attrs({
  className: 'flex font-serif text-base max-w-screen-xxl',
})``;

const LinkBox = styled.div.attrs({
  className:
    'flex flex-col text-left bg-white rounded-lg my-10 mr-5 py-4 pl-8 cursor-pointer w-98 h-68',
})``;

const LinkWrapper = styled.div.attrs({
  className: 'h-7 w-max border-b-2  border-transparent hover:border-orange-burnt',
})``;

const MenuLink = styled.a.attrs({
  className: 'h-7 bg-white mb-4 hover:no-underline',
})``;

const ShopAllLink = styled.a.attrs({
  className: 'h-7 bg-white mb-4 hover:no-underline',
})``;

const GifBox = styled.div.attrs({
  className: 'relative bg-white rounded-lg my-10 w-68 h-68 ',
})``;

const Gif = styled.img(({ hover }) => [
  tw`absolute invisible top-0 left-0 rounded-lg`,
  hover && tw`visible`,
]);

const MainGif = styled.img(({ hover }) => [
  tw`absolute invisible top-0 left-0 rounded-lg`,
  hover && tw`visible`,
]);

Nav.defaultProps = {
  sale_start: '',
  sale_end: '',
  black_friday_sale_start: '',
  black_friday_sale_end: '',
  cyber_monday_sale_start: '',
  cyber_monday_sale_end: '',
};

Nav.propTypes = {
  themeSettings: PropTypes.shape({
    sale_end: PropTypes.string,
    sale_start: PropTypes.string,
    black_friday_sale_start: PropTypes.string,
    black_friday_sale_end: PropTypes.string,
    cyber_monday_sale_start: PropTypes.string,
    cyber_monday_sale_end: PropTypes.string,
  }).isRequired,
  newsettings: PropTypes.shape({
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
    image_link_6: PropTypes.string,
    text_link_6: PropTypes.string,
    url_link_6: PropTypes.string,
    hero_link: PropTypes.string,
    hero_link_text: PropTypes.string,
    hero_image: PropTypes.string,
    sale_hero_link: PropTypes.string,
    sale_hero_image: PropTypes.string,
    sale_hero_text: PropTypes.string,
    show_sale_hero_button: PropTypes.bool,
    black_friday_sale_hero_link: PropTypes.string,
    black_friday_sale_hero_image: PropTypes.string,
    cyber_monday_sale_hero_link: PropTypes.string,
    cyber_monday_sale_hero_image: PropTypes.string,
  }).isRequired,
  sale_start: PropTypes.string,
  sale_end: PropTypes.string,
  black_friday_sale_start: PropTypes.string,
  black_friday_sale_end: PropTypes.string,
  cyber_monday_sale_start: PropTypes.string,
  cyber_monday_sale_end: PropTypes.string,
};

export default Nav;
