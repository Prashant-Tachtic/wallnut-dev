import React from 'react';
import PropTypes from 'prop-types';
import LayoutOne from './LayoutOne';
import LayoutTwo from './LayoutTwo';
import LayoutThree from './LayoutThree';
import { isSaleOn } from '../../utils';

const layouts = {
  layout_1: LayoutOne,
  layout_2: LayoutTwo,
  layout_3: LayoutThree,
};

const Sale = (props) => {
  const { settings, themeSettings } = props;
  const { sale_start, sale_end } = themeSettings;

  const salesOn = isSaleOn(sale_start, sale_end);
  const Component = layouts[settings.page_layout];

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...props} isSaleOn={salesOn} />;
};

Sale.propTypes = {
  settings: PropTypes.shape({
    page_layout: PropTypes.string,
  }).isRequired,
  themeSettings: PropTypes.shape({
    sale_start: PropTypes.string,
    sale_end: PropTypes.string,
  }).isRequired,
};

export default Sale;
