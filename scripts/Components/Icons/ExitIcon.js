import React from 'react';
import PropTypes from 'prop-types';

const Exit = ({ width = '20', height = '20' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.33346 0.228786C1.02841 -0.076262 0.533834 -0.076262 0.228786 0.228786C-0.076262 0.533834 -0.076262 1.02841 0.228786 1.33346L8.89576 10.0004L0.23798 18.6582C-0.0670682 18.9633 -0.0670685 19.4578 0.23798 19.7629C0.543028 20.0679 1.03761 20.0679 1.34266 19.7629L10.0004 11.1051L18.6665 19.7712C18.9716 20.0763 19.4662 20.0763 19.7712 19.7712C20.0763 19.4662 20.0763 18.9716 19.7712 18.6665L11.1051 10.0004L19.7629 1.34268C20.0679 1.03763 20.0679 0.543052 19.7629 0.238003C19.4578 -0.0670447 18.9632 -0.0670447 18.6582 0.238003L10.0004 8.89576L1.33346 0.228786Z"
      fill="#130F26"
    />
  </svg>
);

Exit.defaultProps = {
  width: '20',
  height: '20',
};

Exit.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Exit;
