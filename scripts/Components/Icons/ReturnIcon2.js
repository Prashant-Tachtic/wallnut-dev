import React from 'react';
import PropTypes from 'prop-types';

const ReturnIcon2 = ({ width = '100%', height = '100%' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 72 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.5278 17.8008C14.4291 17.8008 12.7998 19.427 12.7998 21.5229V40.4786C12.7998 42.5746 14.4291 44.2008 16.5278 44.2008H48.4718C50.5705 44.2008 52.1998 42.5746 52.1998 40.4786V21.5229C52.1998 19.491 50.5063 17.8008 48.4718 17.8008H16.5278ZM13.6488 21.5229C13.6488 19.9102 14.9004 18.7131 16.5278 18.7131H48.4077C50.0322 18.7131 51.2866 19.9714 51.2866 21.5229V40.4786C51.2866 42.0914 50.0351 43.2885 48.4077 43.2885H47.3248V26.3259C47.3248 24.2299 45.6955 22.6037 43.5968 22.6037H35.9712V22.5476C35.9712 22.2137 35.7998 21.9635 35.5613 21.8047C35.3183 21.643 35.0748 21.6431 34.9433 21.6431L34.9164 21.6431L32.7996 22.0914H31.4093C31.2803 22.0914 31.1679 22.1538 31.0916 22.2299C31.0154 22.306 30.9528 22.4184 30.9528 22.5476V22.6037H20.8896C19.0503 22.6037 17.6107 23.971 17.6107 25.8776V43.2885H16.5278C14.9032 43.2885 13.6488 42.0301 13.6488 40.4786V21.5229ZM35.0166 22.5555H35.0447C35.0501 22.5617 35.0546 22.567 35.058 22.5716L35.0578 23.5643H35.047L35.0429 23.5684L32.8953 23.0009C32.8947 22.9957 32.8941 22.9901 32.8937 22.9841C32.8923 22.9652 32.8922 22.9477 32.8922 22.9318C32.8922 22.8992 32.8947 22.8943 32.8954 22.8928L32.8955 22.8928C32.8958 22.8924 32.8969 22.891 32.8996 22.8888C32.904 22.8853 32.9141 22.8783 32.9338 22.8705L35.0166 22.5555ZM31.8018 23.052V23.0037H31.9818C31.9803 23.0191 31.9794 23.0352 31.9791 23.052H31.8018ZM18.5238 34.0044V43.2244H46.3891V26.2619C46.3891 24.6908 45.3307 23.452 43.7251 23.452H36.0353V23.5722C36.0353 23.7089 35.991 23.8535 35.9232 23.9793C35.8548 24.1061 35.7542 24.2294 35.6254 24.3151L35.6151 24.322L35.6039 24.3275L35.5881 24.3354C35.4719 24.3936 35.3054 24.4766 35.129 24.4766H34.9106L32.7938 23.9003H31.4406L29.3578 33.0366C28.9508 34.5939 27.5911 35.6195 26.1495 35.6195H26.1427C25.89 35.6195 25.6771 35.6195 25.3977 35.5501L18.5238 34.0044ZM18.5238 25.8776C18.5238 24.5155 19.5244 23.5161 20.8896 23.5161H29.8109L18.5238 32.507V25.8776ZM25.6206 34.7131L19.0308 33.2042L30.4464 24.1466L28.4571 32.8733C28.0952 34.1899 26.7824 35.0031 25.6206 34.7131Z"
      fill="#435570"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.64645 10.3539C8.45118 10.1586 8.45118 9.84205 8.64645 9.64679L11.8284 6.46481C12.0237 6.26954 12.3403 6.26954 12.5355 6.46481C12.7308 6.66007 12.7308 6.97665 12.5355 7.17191L10.2071 9.50034H43C54.3218 9.50034 63.5 18.6785 63.5 30.0003V32.0003C63.5 43.3222 54.3218 52.5003 43 52.5003H19.8C19.5239 52.5003 19.3 52.2765 19.3 52.0003C19.3 51.7242 19.5239 51.5003 19.8 51.5003H43C53.7696 51.5003 62.5 42.7699 62.5 32.0003V30.0003C62.5 19.2308 53.7696 10.5003 43 10.5003H10.2071L12.5355 12.8288C12.7308 13.024 12.7308 13.3406 12.5355 13.5359C12.3403 13.7311 12.0237 13.7311 11.8284 13.5359L8.64645 10.3539Z"
      fill="#435570"
    />
  </svg>
);

ReturnIcon2.defaultProps = {
  width: '100%',
  height: '100%',
};

ReturnIcon2.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default ReturnIcon2;
