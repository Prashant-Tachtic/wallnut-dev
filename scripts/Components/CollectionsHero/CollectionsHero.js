import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CollectionsHero = ({ settings, collection }) => {
  const {
    lounge_image,
    lounge_mobile_image,
    lounge_tablet_image,
    dining_image,
    dining_mobile_image,
    dining_tablet_image,
  } = settings;

  if (collection.includes('Lounge')) {
    return (
      <div>
        <HeroImage img={lounge_image} />
        <TabletHero img={lounge_tablet_image} />
        <MobileHero img={lounge_mobile_image} />
      </div>
    );
  }

  if (collection.includes('Dining')) {
    return (
      <div>
        <HeroImage img={dining_image} />
        <TabletHero img={dining_tablet_image} />
        <MobileHero img={dining_mobile_image} />
      </div>
    );
  }
  return null;
};

const HeroImage = styled.div.attrs({
  className:
    'hidden bg-bottom bg-cover w-full h-100 justify-items-center items-center xl:grid xl:grid-cols-1',
})`
  background-image: url(${(props) => props.img});
`;

const TabletHero = styled.div.attrs({
  className:
    'hidden w-full h-100 bg-cover bg-bottom justify-items-center items-center lg:grid lg:grid-cols-1 xl:hidden',
})`
  background-image: url(${(props) => props.img});
`;

const MobileHero = styled.div.attrs({
  className: 'w-full h-96 md:h-100 bg-cover bg-bottom lg:hidden',
})`
  background-image: url(${(props) => props.img});
`;

CollectionsHero.propTypes = {
  collection: PropTypes.string.isRequired,
  settings: PropTypes.shape({
    lounge_image: PropTypes.string.isRequired,
    lounge_mobile_image: PropTypes.string.isRequired,
    lounge_tablet_image: PropTypes.string.isRequired,
    dining_image: PropTypes.string.isRequired,
    dining_mobile_image: PropTypes.string.isRequired,
    dining_tablet_image: PropTypes.string.isRequired,
  }).isRequired,
  themeSettings: PropTypes.shape({
    sale_start: PropTypes.string,
    sale_end: PropTypes.string,
  }).isRequired,
};

export default CollectionsHero;
