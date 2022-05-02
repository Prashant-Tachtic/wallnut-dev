import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SaleNavHeroImage = ({ sale_hero_image, sale_hero_link, newNav }) => {
  if (sale_hero_image) {
    if (newNav) {
      return (
        <PromoBox img={sale_hero_image} href={sale_hero_link}>
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
          />
        </PromoBox>
      );
    }

    return <HeroImageContainer bgImg={sale_hero_image} href="/collections/labor-day-sale" />;
  }

  return null;
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

SaleNavHeroImage.defaultProps = {
  sale_hero_link: '',
  newNav: false,
};

SaleNavHeroImage.propTypes = {
  sale_hero_image: PropTypes.string.isRequired,
  sale_hero_link: PropTypes.string,
  newNav: PropTypes.bool,
};

export default SaleNavHeroImage;
