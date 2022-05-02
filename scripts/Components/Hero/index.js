/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Hero from './Hero';
import { isAnySaleOn } from '../../utils';

const HeroContainer = (props) => {
  const { themeSettings } = props;

  if (isAnySaleOn(themeSettings)) {
    return null;
  }

  return <Hero {...props} />;
};

HeroContainer.propTypes = {
  themeSettings: PropTypes.shape({}).isRequired,
};

export default HeroContainer;
