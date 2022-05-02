import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import fabrics from './fabrics';
import ColorSwatch from '../../../ColorSwatch';
import FilterTabs from './FilterTabs';
import ColorGroupFilter from './ColorGroupFilter';
import { pushEvent } from '../../../../utils/optimizely';
import {
  HANDLE_CLICK_ON_ALL_FILTER,
  HANDLE_HOVER_ON_ALL_FILTER,
  HANDLE_CLICK_ON_BEST_SELLERS_FILTER,
  HANDLE_HOVER_ON_BEST_SELLERS_FILTER,
} from '../../../../utils/optimizely/constants';

const filterColorGroup = (product, group, option) => {
  if (product.handle === 'extra-chair-cover') {
    const productVariants = product.variants.filter((variant) => variant.option1 === option);

    return group.filter((color) => {
      const variant = productVariants.find((productVariant) =>
        productVariant.options.join(' ').replace(/ /g, '-').toLowerCase().includes(color)
      );

      return !!variant;
    });
  }
  return group.filter((color) => {
    const variant = product.variants.find((productVariant) =>
      productVariant.options.join(' ').replace(/ /g, '-').toLowerCase().includes(color)
    );

    return !!variant;
  });
};

const getDefaultColor = (handle, option1, option2) => {
  const color = handle.includes('cover') ? option2 : option1;

  if (location.search.includes('?variant')) {
    return color.toLowerCase().replace(/\s/g, '-');
  }

  return 'herringbone-off-white';
};

const getFilterType = (handle, selectedVariant) => {
  const { option1, option2 } = selectedVariant;
  const filterTypeName = handle.includes('cover') ? option2 : option1;
  const option = filterTypeName.toLowerCase().replace(/\s/g, '-');
  const hasVariantParams =
    location.search.includes('variant=') || location.search.includes('color=');

  if (hasVariantParams) {
    const filterType = Object.keys(fabrics).reduce((acc, key) => {
      const groupValue = fabrics[key];

      if (groupValue.All.includes(option)) {
        return key;
      }

      return acc;
    }, '');

    return filterType;
  }

  return 'All';
};

const showColorGroups = (showMore, colorGroups) => {
  if (!showMore) {
    return colorGroups.filter((group, i) => i < 6);
  }
  return colorGroups;
};

const showText = (showMore, setShowMore) => {
  if (!showMore) {
    return (
      <div
        className="relative col-span-2 text-center border border-blue rounded-md text-base h-8 my-auto md:hidden"
        onClick={() => setShowMore(!showMore)}
        tabIndex={0}
        onKeyDown={() => {}}
        role="button"
      >
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2 transform w-11/12 font-serif">
          +5 more
        </div>
      </div>
    );
  }
  return (
    <div
      className="relative col-span-2 text-base md:hidden"
      onClick={() => setShowMore(!showMore)}
      tabIndex={0}
      onKeyDown={() => {}}
      role="button"
    >
      <div className="underline -translate-y-1/2 absolute left-0 top-1/2 transform w-11/12 font-serif">
        show less
      </div>
    </div>
  );
};

const PDPColorFilter = ({ product, selectedVariant, setSelectedVariant, setCurrentOptions }) => {
  const { handle, variants } = product;
  const { option1, option2 } = selectedVariant;
  const filterType = getFilterType(handle, selectedVariant);
  const defaultColor = getDefaultColor(handle, option1, option2);

  const [type, setType] = useState(filterType);
  const [group, setGroup] = useState('All');
  const [selectedColor, setSelectedColor] = useState(defaultColor);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    if (!location.search.includes('variant=')) {
      const defaultVariant = product.variants.find((variant) =>
        variant.title.includes('Herringbone Off White')
      );

      if (defaultVariant) {
        setSelectedVariant(defaultVariant);
        setCurrentOptions({
          option1: defaultVariant.option1,
          option2: defaultVariant.option2,
          option3: defaultVariant.option3,
        });
      }
    } else {
      setSelectedColor(getDefaultColor(handle, option1, option2));
    }
  }, [
    handle,
    product,
    setCurrentOptions,
    setSelectedVariant,
    selectedVariant,
    selectedColor,
    option1,
    option2,
  ]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    if (mediaQuery.matches) {
      setShowMore(true);
    }
  }, [setShowMore]);

  const groupList = fabrics[type];

  const handleColorSelect = (color) => {
    const colorOptionIndex = product.options.indexOf('Color');
    const findVariant = variants.find((variantItem) =>
      variantItem.options.map((option) => option.toLowerCase().replace(/ /g, '-')).includes(color)
    );

    history.pushState(
      '',
      '',
      `?variant=${findVariant.id}&color=${findVariant.options[colorOptionIndex]}`
    );
    setSelectedVariant(findVariant);
    setCurrentOptions({
      option1: findVariant.option1,
      option2: findVariant.option2,
      option3: findVariant.option3,
    });
    window.optimizely.push({
      type: 'event',
      eventName: 'handle-color-swatch',
      tags: {
        revenue: 0, // Optional in cents as integer (500 == $5.00)
        value: 0.0, // Optional as float
      },
    });
  };

  const handleFilterTab = (tabName) => {
    if (tabName !== type) {
      setType(tabName);
      setGroup('All');
      setSelectedColor(fabrics[tabName].All[0]);
      handleColorSelect(fabrics[tabName].All[0]);
    }
  };

  const handleClickOptimizely = (tabName) => {
    const handles = {
      All: HANDLE_CLICK_ON_ALL_FILTER,
      'Best Sellers': HANDLE_CLICK_ON_BEST_SELLERS_FILTER,
    };
    pushEvent(handles[tabName], { revenue: 0, value: 0.0 });
  };

  const handleHoverOptimizely = (tabName) => {
    const handles = {
      All: HANDLE_HOVER_ON_ALL_FILTER,
      'Best Sellers': HANDLE_HOVER_ON_BEST_SELLERS_FILTER,
    };
    pushEvent(handles[tabName], { revenue: 0, value: 0.0 });
  };

  return (
    <div>
      <div className="flex justify-around">
        {Object.keys(fabrics).map((tab, i) => (
          <FilterTabs
            key={i}
            onClick={() => {
              handleFilterTab(tab);
              handleClickOptimizely(tab);
            }}
            onMouseEnter={() => {
              handleFilterTab(tab);
              handleHoverOptimizely(tab);
            }}
            text={tab}
            active={tab === type}
          />
        ))}
      </div>
      <div className="border-gray border-b" />
      <StyledCopy type={type}>Filter by Color:</StyledCopy>
      {Object.keys(groupList).length > 1 && (
        <div className="grid grid-cols-7 md:flex md:justify-between my-2">
          {showColorGroups(showMore, Object.keys(groupList))
            .filter((groupItem) => groupItem !== 'All')
            .map((item, i) => (
              <ColorGroupFilter
                key={i}
                fabrics={fabrics}
                type={type}
                setSelectedColor={setSelectedColor}
                handleColorSelect={handleColorSelect}
                group={group}
                setGroup={setGroup}
                groupName={item}
              />
            ))}
          {showText(showMore, setShowMore)}
        </div>
      )}
      <h5 className="text-sm text-left mt-3">
        Washable Fabric Color{' '}
        <>
          -{' '}
          <span className="brown-text md:text-sm">
            {handle.includes('cover') ? option2 : option1}
          </span>
        </>
      </h5>
      <div className="lg:max-h-80">
        <ul className="lg:border-b grid grid-cols-8 lg:border-none lg:pb-0 pb-2">
          {filterColorGroup(product, groupList[group], option1).map((color, i) => (
            <li key={i} className="mt-2">
              <ColorSwatchContainer
                isSelected={color === selectedColor}
                onClick={() => {
                  setSelectedColor(color);
                  handleColorSelect(color);
                }}
                tabIndex={0}
                onKeyDown={() => {}}
                role="button"
                aria-label="change color"
              >
                <ColorSwatch option={color} />
              </ColorSwatchContainer>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ColorSwatchContainer = styled.div.attrs(({ isSelected }) => {
  let className =
    'relative grid justify-items-center items-center h-9 w-9 mx-auto rounded-full md:h-11 md:w-11';

  if (isSelected) {
    className = `${className} border border-blue`;
  } else {
    className = `${className} border-2 border-gray-300`;
  }

  return {
    className,
  };
})``;

const StyledCopy = styled.p.attrs(({ type }) => {
  let className = 'mt-3 mb-0 text-base';

  if (type !== 'All') {
    className = `${className} hidden`;
  }

  return {
    className,
  };
})``;

PDPColorFilter.defaultProps = {
  selectedVariant: {
    option2: null,
    option3: null,
  },
};
PDPColorFilter.propTypes = {
  product: PropTypes.shape({
    options: PropTypes.arrayOf(PropTypes.string),
    handle: PropTypes.string,
    variants: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
  selectedVariant: PropTypes.shape({
    option1: PropTypes.string.isRequired,
    option2: PropTypes.string,
    option3: PropTypes.string,
    name: PropTypes.string.isRequired,
  }),
  setSelectedVariant: PropTypes.func.isRequired,
  setCurrentOptions: PropTypes.func.isRequired,
};
export default PDPColorFilter;
