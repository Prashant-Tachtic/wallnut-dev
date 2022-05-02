import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ColorsNav = (props) => {
  const { settings } = props;
  return (
    <ColorContainer>
      <ColorColumnContainer>
        <ColorColumnHeader href={settings.hero_link}>{settings.hero_link_text}</ColorColumnHeader>
        <ColorsWrapper>
          <ColorColumn>
            <NavigationColor href={settings.color1_link}>
              <Image src={`https:${settings.color1_pic}`} />
              <ColorTitle>{settings.color1_name}</ColorTitle>
            </NavigationColor>
            <NavigationColor href={settings.color2_link}>
              <Image src={`https:${settings.color2_pic}`} />
              <ColorTitle>{settings.color2_name}</ColorTitle>
            </NavigationColor>
          </ColorColumn>
          <ColorColumn>
            <NavigationColor href={settings.color3_link}>
              <Image src={`https:${settings.color3_pic}`} />
              <ColorTitle>{settings.color3_name}</ColorTitle>
            </NavigationColor>
            <NavigationColor href={settings.color4_link}>
              <Image src={`https:${settings.color4_pic}`} />
              <ColorTitle>{settings.color4_name}</ColorTitle>
            </NavigationColor>
          </ColorColumn>
          <ColorColumn>
            <NavigationColor href={settings.color5_link}>
              <Image src={`https:${settings.color5_pic}`} />
              <ColorTitle>{settings.color5_name}</ColorTitle>
            </NavigationColor>
            <NavigationColor href={settings.color6_link}>
              <Image src={`https:${settings.color6_pic}`} />
              <ColorTitle>{settings.color6_name}</ColorTitle>
            </NavigationColor>
          </ColorColumn>
        </ColorsWrapper>
        <ShopAllLink href="/pages/all-chair-colors">Shop All Colors</ShopAllLink>
      </ColorColumnContainer>
      {settings.hero_image && (
        <HeroImageContainer href="/collections/best-sellers">
          <span className="invisible">best seller</span>
          <div className="relative rounded-lg">
            <HeroButton>Shop Our Best Sellers</HeroButton>
            <HeroImage src={settings.hero_image} />
          </div>
          <span className="invisible">best seller</span>
        </HeroImageContainer>
      )}
    </ColorContainer>
  );
};

const ColorContainer = styled.div.attrs({
  className: 'grid grid-cols-5 xxl:grid-cols-4 lg:px-6 pb-9 pt-10 gap-6 bg-grey',
})``;

const ColorsWrapper = styled.div.attrs({
  className: 'grid grid-cols-3 px-4 lg:px-12 xxl:px-24 py-6 bg-white rounded-lg',
})``;
const Image = styled.img.attrs({ className: 'w-15 h-15 mr-2 lg:mr-3.5 col-span-1' })``;

const NavigationColor = styled.a.attrs({ className: 'grid grid-cols-3' })``;

const ColorColumn = styled.div.attrs({ className: 'grid justify-items-start gap-7' })``;

const ColorColumnContainer = styled.div.attrs({ className: 'col-span-3 grid  gap-y-2' })``;
const ShopAllLink = styled.a.attrs({
  className:
    'justify-self-start cursor-pointer pl-5 text-base transition duration-100 hover:text-brown hover:underline',
})``;

const ColorTitle = styled.span.attrs({
  className:
    'col-span-2 justify-self-start self-center whitespace-nowrap text-base transition duration-100 hover:text-brown hover:underline',
})``;

const ColorColumnHeader = styled.a.attrs({
  className: 'justify-self-start pl-5 font-normal text-base',
})``;

const HeroImageContainer = styled.a.attrs({
  className: 'relative grid grid-cols-1 col-span-2 xxl:col-span-1 gap-y-2 self-start max-w-sm',
})``;

const HeroImage = styled.img.attrs({ className: 'h-50' })``;

const HeroButton = styled.div.attrs({
  className: 'transition duration-100 hover:text-brown hover:underline',
})`
  position: absolute;
  width: 222px;
  height: 38px;
  bottom: 17px;
  right: 20px;
  background: #f7f7f7;
  border-radius: 20px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

ColorsNav.propTypes = {
  settings: PropTypes.shape({
    hero_link: PropTypes.string.isRequired,
    hero_link_text: PropTypes.string.isRequired,
    color1_link: PropTypes.string.isRequired,
    color1_pic: PropTypes.string.isRequired,
    color1_name: PropTypes.string.isRequired,
    color2_link: PropTypes.string.isRequired,
    color2_pic: PropTypes.string.isRequired,
    color2_name: PropTypes.string.isRequired,
    color3_link: PropTypes.string.isRequired,
    color3_pic: PropTypes.string.isRequired,
    color3_name: PropTypes.string.isRequired,
    color4_link: PropTypes.string.isRequired,
    color4_pic: PropTypes.string.isRequired,
    color4_name: PropTypes.string.isRequired,
    color5_link: PropTypes.string.isRequired,
    color5_pic: PropTypes.string.isRequired,
    color5_name: PropTypes.string.isRequired,
    color6_link: PropTypes.string.isRequired,
    color6_pic: PropTypes.string.isRequired,
    color6_name: PropTypes.string.isRequired,
    hero_image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ColorsNav;
