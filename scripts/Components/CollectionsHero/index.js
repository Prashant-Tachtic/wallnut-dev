/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import CollectionsHero from './CollectionsHero';
import { isAnySaleOn } from '../../utils';

const CollectionsHeroContainer = (props) => {
  const { themeSettings } = props;

  if (isAnySaleOn(themeSettings)) {
    return null;
  }

  return <CollectionsHero {...props} />;
};

CollectionsHeroContainer.propTypes = {
  themeSettings: PropTypes.shape({}).isRequired,
};
export default CollectionsHeroContainer;
