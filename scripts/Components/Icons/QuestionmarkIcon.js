import React from 'react';
import PropTypes from 'prop-types';

const QuestionmarkIcon = ({ width, height }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM6.45274 7.29282H5.37201V6.77569C5.37201 6.14917 5.69331 5.84088 6.35537 5.50276C7.00771 5.17459 7.29006 4.96575 7.29006 4.47845C7.29006 3.88177 6.8714 3.4442 6.0146 3.4442C5.33306 3.4442 4.79757 3.7326 4.70994 4.68729H3.6C3.67789 3.1558 4.71968 2.4 6.05355 2.4C7.4069 2.4 8.4 3.16575 8.4 4.44862C8.4 5.40332 7.80609 5.83094 7.22191 6.12928C6.63773 6.42762 6.45274 6.55691 6.45274 6.98453V7.29282ZM6.6572 8.89392C6.6572 9.3116 6.3359 9.6 5.91724 9.6C5.49858 9.6 5.18702 9.3116 5.18702 8.89392C5.18702 8.47624 5.49858 8.19779 5.91724 8.19779C6.3359 8.19779 6.6572 8.47624 6.6572 8.89392Z"
      fill="#757575"
      id="questionicon"
    />
  </svg>
);

QuestionmarkIcon.defaultProps = {
  width: '14',
  height: '14',
};

QuestionmarkIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

export default QuestionmarkIcon;
