import React from 'react';
import PropTypes from 'prop-types';

const MachineWashableIconColored = ({ width, height, bgCircleFill }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="40" cy="40" r="40" fill={bgCircleFill} />
    <path
      d="M53.0554 20.4C45.0552 14.8 35.4556 12 27.0554 12C18.6552 12 14.6554 20 13.4554 24.4C12.2554 28.8 12.6554 35.6 15.0554 39.6C17.4554 43.6 16.2554 46.4 16.2554 49.2C16.2554 52 17.4554 55.2 19.4554 58.8C21.4554 62.4 27.0554 66 31.4554 67.2C35.8554 68.4 40.2554 68 46.6556 67.6C53.0558 67.2 57.8554 62.4 60.6556 59.2C63.4558 56 66.6558 51.2 66.6556 47.6V47.5969C66.6554 43.9975 66.6552 39.5991 65.0556 36.4C63.4556 33.2 61.0556 26 53.0554 20.4Z"
      fill="#D6EAE7"
    />
    <rect x="19.2094" y="14.3999" width="41.6" height="51.2" rx="2" stroke="#435570" />
    <line x1="19.2094" y1="25.0999" x2="60.8094" y2="25.0999" stroke="#435570" />
    <rect x="22.4095" y="17.5999" width="11.2" height="4.8" rx="1" stroke="#435570" />
    <circle cx="38.4092" cy="19.9999" r="2.4" stroke="#435570" />
    <circle cx="40.0094" cy="43.1999" r="9.6" stroke="#435570" />
    <circle cx="45.6096" cy="19.9999" r="2.4" stroke="#435570" />
    <rect x="50.4094" y="19.2" width="7.2" height="1.6" rx="0.8" stroke="#435570" />
    <path
      d="M30.4094 44.6219C30.4094 44.6219 37.2094 41.4219 42.4094 44.6219C47.6094 47.8219 49.6094 44.6219 49.6094 44.6219"
      stroke="#435570"
    />
    <line
      x1="19.7094"
      y1="61.1001"
      x2="48.3094"
      y2="61.1001"
      stroke="#435570"
      strokeLinecap="round"
    />
    <line
      x1="52.5095"
      y1="61.1001"
      x2="60.3095"
      y2="61.1001"
      stroke="#435570"
      strokeLinecap="round"
    />
  </svg>
);

MachineWashableIconColored.defaultProps = {
  width: '100%',
  height: '100%',
  bgCircleFill: '#FCF9F7',
};

MachineWashableIconColored.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  bgCircleFill: PropTypes.string,
};

export default MachineWashableIconColored;
