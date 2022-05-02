import React from 'react';
import PropTypes from 'prop-types';
import tw from 'twin.macro';
import styled from 'styled-components';

const ProgressLine = ({ className, stroke }) => {
  const Path = styled.path(() => [
    tw`stroke-current`,
    !stroke && tw`text-offwhite`,
    stroke && tw`text-orange-burnt`,
  ]);

  return (
    <svg
      className={className}
      width="52"
      height="2"
      viewBox="0 0 52 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path d="M1 1L51 1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

ProgressLine.defaultProps = {
  className: '',
  stroke: false,
};

ProgressLine.propTypes = {
  className: PropTypes.string,
  stroke: PropTypes.bool,
};

export default ProgressLine;
