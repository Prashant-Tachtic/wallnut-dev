import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const NavHero = ({
  hero_image_medium,
  hero_image,
  hero_image_small,
  hero_link,
  hero_link_text,
  setBreakText,
  newNav,
}) => {
  const [image, setImage] = useState(hero_image);

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 1600) {
      setImage(hero_image);
    } else if (window.innerWidth >= 1440) {
      setImage(hero_image_medium);
      setBreakText(false);
    } else {
      setImage(hero_image_small);
      setBreakText(true);
    }
  }, [hero_image_medium, hero_image, hero_image_small, setBreakText]);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  useEffect(() => {
    handleResize();
  }, [handleResize]);

  if (newNav) {
    return (
      <PromoBox img={hero_image} href={hero_link}>
        <div
          className="
              transition
              duration-100
              absolute
              flex
              justify-center
              items-center
              rounded-full
              px-5
              py-1
              bg-white
              bottom-4
              text-base
            "
        >
          <div
            className="border-b-2 border-transparent
              hover:border-orange-burnt"
          >
            {hero_link_text}
          </div>
        </div>
      </PromoBox>
    );
  }

  return (
    hero_image && (
      <HeroImageContainer bgImg={image} href="/collections/best-sellers/">
        <div
          className="
              transition
              duration-100
              hover:text-brown
              hover:underline
              absolute
              rounded-full
              px-5
              py-1
              bg-white
              top-2
              left-4
              text-base
            "
        >
          Shop Our Best Sellers
        </div>
      </HeroImageContainer>
    )
  );
};

const HeroImageContainer = styled.a.attrs({
  className:
    'bg-cover bg-left-bottom bg-no-repeat h-50 mt-9 rounded-2xl relative w-full flex flex-col items-center justify-center',
})`
  background-image: url(${(props) => props.bgImg});
`;

const PromoBox = styled.a.attrs({
  className:
    'bg-cover bg-center bg-no-repeat my-10 ml-5  w-68 h-68 rounded-lg relative flex flex-col items-center justify-center',
})`
  background-image: url(${(props) => props.img});
`;

NavHero.defaultProps = {
  hero_image: '',
  hero_image_medium: '',
  hero_image_small: '',
  hero_link: '',
  hero_link_text: 'Shop New Patterns',
  setBreakText: () => null,
  newNav: false,
};

NavHero.propTypes = {
  hero_image: PropTypes.string,
  hero_image_medium: PropTypes.string,
  hero_image_small: PropTypes.string,
  hero_link: PropTypes.string,
  hero_link_text: PropTypes.string,
  setBreakText: PropTypes.func,
  newNav: PropTypes.bool,
};

export default NavHero;
