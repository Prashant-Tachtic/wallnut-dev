import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FilterTabs = ({ onClick, onMouseEnter, text, active }) => (
  <StyledFilterTabs
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    tabIndex={0}
    onKeyDown={() => {}}
    role="button"
    active={active}
    text={text}
  >
    {text}
  </StyledFilterTabs>
);

const StyledFilterTabs = styled.div.attrs(({ active }) => {
  let className = 'center text-base py-1 px-1 text-lg font-serif font-extralight w-2/5';

  if (active) {
    className = `${className} border-b-4 border-orange-burnt font-light`;
  }

  return {
    className,
  };
})``;

FilterTabs.propTypes = {
  onClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

export default FilterTabs;
