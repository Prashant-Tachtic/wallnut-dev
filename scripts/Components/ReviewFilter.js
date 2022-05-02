import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ArrowDownIcon from './Icons/ArrowDownIcon';

const ReviewFilter = ({ filterName, updateFilters, options }) => {
  const [currentFilter, setCurrentFilter] = useState(filterName);
  const [isHidden, setIsHidden] = useState(true);

  const handleOptionClick = (option) => {
    setIsHidden(true);
    setCurrentFilter(option.component);
    updateFilters(option.value);
  };

  return (
    <div className="bg-white border border-gray-300 p-2.5 text-sm relative md:text-xs md:px-5 md:py-1">
      <div
        className="grid grid-cols-12 items-center"
        onClick={() => setIsHidden(!isHidden)}
        tabIndex={0}
        onKeyDown={() => {}}
        role="button"
      >
        <div className="col-span-11">{currentFilter}</div>
        <div className="col-span-1">
          <ArrowDownIcon />
        </div>
      </div>
      <div
        className={`absolute bg-white border border-gray-300 left-0 p-2.5 rounded-sm w-full mt-2 z-10 ${
          isHidden ? 'hidden' : ''
        }`}
      >
        {options.map((option, i) => (
          <div
            className="my-1"
            key={i}
            onClick={() => handleOptionClick(option)}
            tabIndex={0}
            onKeyDown={() => {}}
            role="button"
          >
            {option.component}
          </div>
        ))}
      </div>
    </div>
  );
};

ReviewFilter.propTypes = {
  filterName: PropTypes.string.isRequired,
  updateFilters: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      component: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    })
  ).isRequired,
};

export default ReviewFilter;
