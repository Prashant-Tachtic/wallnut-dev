import PropTypes from 'prop-types';
import React, { useState, useEffect, useContext } from 'react';
import Rectangle from '../Icons/Rectangle';
import plpContext from './plpContext';

const toggleFilters = (allFilters, filterName, tempArr, chairType, style, color) => {
  if (filterName === 'style') {
    window.optimizely.push({
      type: 'event',
      eventName: 'plp-filter-style',
      tags: {
        revenue: 0, // Optional in cents as integer (500 == $5.00)
        value: 0.0, // Optional as float
      },
    });
    if (allFilters.color.length === 0 && !tempArr.includes('All')) {
      return { ...allFilters, style: [...tempArr], color: ['All'] };
    }
    if (
      (tempArr.length === 0 &&
        chairType.length === 0 &&
        color.includes('All') &&
        window.location.href.includes('all')) ||
      (tempArr.length === 0 &&
        chairType.length === 0 &&
        color.includes('All') &&
        window.location.href.includes('pattern-chairs')) ||
      (tempArr.length === 0 &&
        chairType.length === 0 &&
        color.includes('All') &&
        window.location.href.includes('seasonal-favorites'))
    ) {
      return { ...allFilters, style: [...tempArr], color: [] };
    }
    if (
      (tempArr.length === 0 &&
        chairType.length === 0 &&
        color.includes('All') &&
        !window.location.href.includes('all')) ||
      (tempArr.length === 0 &&
        chairType.length === 0 &&
        color.includes('All') &&
        !window.location.href.includes('pattern-chairs')) ||
      (tempArr.length === 0 &&
        chairType.length === 0 &&
        color.includes('All') &&
        !window.location.href.includes('seasonal-favorites'))
    ) {
      return { style: [], chairType: [], color: ['All'] };
    }
    return { ...allFilters, style: [...tempArr] };
  }

  if (filterName === 'chairType') {
    window.optimizely.push({
      type: 'event',
      eventName: 'plp-filter-chair-type',
      tags: {
        revenue: 0, // Optional in cents as integer (500 == $5.00)
        value: 0.0, // Optional as float
      },
    });
    if (allFilters.color.length === 0) {
      return { ...allFilters, chairType: [...tempArr], color: ['All'] };
    }
    if (tempArr.length === 0 && style.length === 0 && color.includes('All')) {
      return { ...allFilters, chairType: [...tempArr], color: [] };
    }
    if (
      (tempArr.length === 0 &&
        style.length === 0 &&
        color.includes('All') &&
        !window.location.href.includes('all')) ||
      (tempArr.length === 0 &&
        style.length === 0 &&
        color.includes('All') &&
        !window.location.href.includes('pattern-chairs')) ||
      (tempArr.length === 0 &&
        style.length === 0 &&
        color.includes('All') &&
        !window.location.href.includes('seasonal-favorites'))
    ) {
      return { style: [], chairType: [], color: ['All'] };
    }
    return { ...allFilters, chairType: [...tempArr] };
  }

  return '';
};

const FilterItem = ({ option, filterName }) => {
  const { allFilters, setAllFilters } = useContext(plpContext);
  const { style, chairType, color } = allFilters;
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    let tempArr = [...allFilters[filterName]];
    tempArr = tempArr.includes(option)
      ? tempArr.filter((item) => item !== option)
      : [...tempArr, option];
    const styleAndChairTypeFilters = toggleFilters(
      allFilters,
      filterName,
      tempArr,
      chairType,
      style,
      color
    );

    setAllFilters(styleAndChairTypeFilters);
  };

  useEffect(() => {
    if (allFilters[filterName].includes(option)) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [allFilters, filterName, option]);

  return (
    <div
      className="cursor-pointer flex"
      onClick={handleClick}
      onKeyPress={() => {}}
      role="button"
      tabIndex="0"
    >
      <div className="self-center mr-2">
        <Rectangle fill={selected ? '#AC6433' : 'none'} />
      </div>
      <span>{option}</span>
    </div>
  );
};

FilterItem.propTypes = {
  option: PropTypes.string.isRequired,
  filterName: PropTypes.string.isRequired,
};

export default FilterItem;
