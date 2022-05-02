import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import fabrics from './fabrics';
import ColorSwatch from '../../../ColorSwatch';
import FilterTabs from './FilterTabs';

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

  if (location.search.includes('variant=')) {
    return color.toLowerCase().replace(/\s/g, '-');
  }

  return 'off-white';
};

const getFilterType = (handle, selectedVariant) => {
  const { option1, option2 } = selectedVariant;
  const filterTypeName = handle.includes('cover') ? option2 : option1;
  const option = filterTypeName.toLowerCase().replace(/\s/g, '-');
  const hasVariantParams = location.search.includes('variant=');

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

  return 'Best Sellers';
};

const PDPColorFilter = ({
  product,
  selectedVariant,
  setSelectedVariant,
  currentOptions,
  setCurrentOptions,
}) => {
  const { handle, variants } = product;
  const { option1, option2 } = selectedVariant;
  const filterType = getFilterType(handle, selectedVariant);
  const defaultColor = getDefaultColor(handle, option1, option2);

  const [type, setType] = useState(filterType);
  const [group, setGroup] = useState('All');
  const [selectedColor, setSelectedColor] = useState(defaultColor);

  useEffect(() => {
    if (!location.search.includes('variant=')) {
      const defaultVariant = product.variants.find((variant) =>
        variant.title.includes('Off White')
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

  const groupList = fabrics[type];

  const handleColorSelect = (color) => {
    const variantColorOption = color.toLowerCase().replace(/-/g, ' ');
    let findVariant = '';
    if (handle.includes('cover')) {
      findVariant = variants.find(
        (variant) =>
          variant.option1 === currentOptions.option1 &&
          variant.option2.toLowerCase() === variantColorOption &&
          variant.option3 === currentOptions.option3
      );
    } else {
      findVariant = variants.find(
        (variant) =>
          variant.option1.toLowerCase() === variantColorOption &&
          variant.option2 === currentOptions.option2 &&
          variant.option3 === currentOptions.option3
      );
    }
    history.pushState('', '', `?variant=${findVariant.id}`);
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

  return (
    <div>
      <div className="flex gap-2 mb-2">
        {Object.keys(fabrics).map((item, i) => (
          <FilterTabs
            key={i}
            onClick={() => {
              setType(item);
              setGroup('All');
            }}
            text={item}
            active={item === type}
            large
          />
        ))}
      </div>

      <div className="border-gray border-b" />

      {Object.keys(groupList).length > 1 && (
        <StyledGroupList type={type}>
          {Object.keys(groupList).map((item, i) => (
            <FilterTabs
              key={i}
              onClick={() => setGroup(item)}
              text={item}
              active={item === group}
            />
          ))}
        </StyledGroupList>
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
      <div className="lg:h-50">
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

const StyledGroupList = styled.div.attrs(({ type }) => {
  let className = 'flex gap-3 my-2 md:gap-2';
  if (type === 'Solids') {
    className = `${className} justify-center`;
  }
  return {
    className,
  };
})`
  @media screen and (max-width: 430px) {
    flex-wrap: wrap;
  }
`;

const ColorSwatchContainer = styled.div.attrs(({ isSelected }) => {
  let className =
    'relative grid justify-items-center items-center border h-9 w-9 mx-auto rounded-full md:h-11 md:w-11';

  if (isSelected) {
    className = `${className} border-gray-300`;
  } else {
    className = `${className} border-white`;
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
  currentOptions: PropTypes.shape({
    option1: PropTypes.string,
    option2: PropTypes.string,
    option3: PropTypes.string,
  }).isRequired,
  setCurrentOptions: PropTypes.func.isRequired,
};
export default PDPColorFilter;
