import React from 'react';
import PropTypes from 'prop-types';
import LayoutOne from './LayoutOne';
import LayoutTwo from './LayoutTwo';
import { isSaleOn } from '../../utils';

const layouts = {
  layout_1: LayoutOne,
  layout_2: LayoutTwo,
};

const BlackFridaySale = (props) => {
  const { settings, themeSettings } = props;
  const { black_friday_sale_start, black_friday_sale_end } = themeSettings;

  const salesOn = isSaleOn(black_friday_sale_start, black_friday_sale_end);
  const Component = layouts[settings.page_layout];

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...props} isSaleOn={salesOn} />;
};

BlackFridaySale.propTypes = {
  settings: PropTypes.shape({
    page_layout: PropTypes.string,
  }).isRequired,
  themeSettings: PropTypes.shape({
    black_friday_sale_start: PropTypes.string,
    black_friday_sale_end: PropTypes.string,
  }).isRequired,
};

export default BlackFridaySale;
