import React from 'react';
import PropTypes from 'prop-types';
import LayoutOne from './LayoutOne';
import LayoutTwo from './LayoutTwo';
import { isSaleOn } from '../../utils';

const layouts = {
  layout_1: LayoutOne,
  layout_2: LayoutTwo,
};

const CyberMondaySale = (props) => {
  const { settings, themeSettings } = props;
  const { cyber_monday_sale_start, cyber_monday_sale_end } = themeSettings;

  const salesOn = isSaleOn(cyber_monday_sale_start, cyber_monday_sale_end);
  const Component = layouts[settings.page_layout];

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...props} isSaleOn={salesOn} />;
};

CyberMondaySale.propTypes = {
  settings: PropTypes.shape({
    page_layout: PropTypes.string,
  }).isRequired,
  themeSettings: PropTypes.shape({
    cyber_monday_sale_start: PropTypes.string,
    cyber_monday_sale_end: PropTypes.string,
  }).isRequired,
};

export default CyberMondaySale;
