import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ColorSwatch from '../../ColorSwatch';

const getOptionName = (option) => {
  if (option === 'Color') {
    return 'Washable Fabric Color';
  }

  if (option === 'Leg') {
    return 'Leg Style';
  }

  if (option === 'Amount') {
    return 'Select Amount';
  }

  return option;
};

const getOptionValue = (selectedVariant, selectOption) => {
  if (selectOption.name === 'Chair Style') {
    return selectedVariant.option1;
  }

  return selectedVariant.option2;
};

const PDPSimpleFilter = ({
  product,
  selectedVariant,
  selectOptions,
  handleColorSwatch,
  handleOptionClick,
  handleSelectingOption,
}) => {
  const { handle } = product;

  return (
    <SimpleFilterContainer handle={handle}>
      {selectOptions.map((selectOption, i) => {
        const optionKey = `option${i + 1}`;
        const currentOptionValue = getOptionValue(selectedVariant, selectOption);

        if (selectOption.name === 'Leg') {
          if (product.title.includes('The Classic Lounge Chair')) {
            return null;
          }
        }

        return (
          <SelectionsContainer
            isColor={selectOption.name === 'Color'}
            key={i}
            onClick={selectOption.name === 'Color' ? () => handleColorSwatch() : undefined}
            tabIndex={0}
            onKeyDown={() => {}}
            role="button"
          >
            <h5 className="text-sm text-left mb-3">
              {getOptionName(selectOption.name)}{' '}
              {selectOption.name !== 'Amount' && (
                <>
                  - <span className="brown-text md:text-sm">{currentOptionValue}</span>
                </>
              )}
            </h5>

            <OptionsContainer hasGap={selectOption.name === 'Amount'} handle={handle}>
              {selectOption.options.map((option) => (
                <Option
                  selectOptionName={selectOption.name}
                  handle={handle}
                  key={option.name || option}
                  role="menuitem"
                  onKeyDown={() => {}}
                  tabIndex={0}
                >
                  {handle === 'extra-chair-cover' && selectOption.name === 'Chair Style' && (
                    <StandardOption
                      isSelected={option.name === currentOptionValue}
                      className="chair-style h-14 w-14"
                    >
                      <div
                        onClick={() => handleSelectingOption(option.handle)}
                        className={`h-12 w-12 rounded-full design-color-swatch ${option.name}`}
                        role="button"
                        onKeyDown={() => {}}
                        tabIndex={0}
                        aria-label="Select Chair Style"
                      />
                    </StandardOption>
                  )}

                  {selectOption.name === 'Leg' && (
                    <LegColorOption isSelected={option.name === selectedVariant.option2}>
                      <div
                        onClick={() => handleSelectingOption(option.handle)}
                        className={`h-7 w-7 md:h-9 md:w-9 rounded-full wood-color-swatch ${option.name}`}
                        role="button"
                        onKeyDown={() => {}}
                        tabIndex={0}
                        aria-label="Select Chair Leg Color"
                      />
                    </LegColorOption>
                  )}

                  {selectOption.name === 'Color' && (
                    <LegColorOption isSelected={option === currentOptionValue}>
                      <ColorSwatch option={option} />
                    </LegColorOption>
                  )}

                  {selectOption.name === 'Amount' && (
                    <div
                      onClick={() => handleOptionClick(option, optionKey)}
                      className={`p-2 text-sm font-extralight h-full w-full center border-solid grid justify-items-center items-center rounded cursor-pointer ${
                        option === currentOptionValue
                          ? ' border-blue border-2'
                          : 'border-gray-300 border'
                      }`}
                      role="button"
                      onKeyDown={() => {}}
                      tabIndex={0}
                      aria-label="Select Amount"
                    >
                      <div className="h-full w-full">${option}</div>
                    </div>
                  )}
                </Option>
              ))}
            </OptionsContainer>
          </SelectionsContainer>
        );
      })}
    </SimpleFilterContainer>
  );
};

const SimpleFilterContainer = styled.div.attrs(({ handle }) => {
  const specialBorderPages = ['the-classic-dining-chair', 'extra-chair-cover'];
  let className = 'product_form product_form';

  if (specialBorderPages.includes(handle)) {
    className = `${className} mb-3 pb-1 pt-3 border-grey-50 border-b lg:border-t border-solid lg:border-none`;
  }

  return { className };
})``;

const SelectionsContainer = styled.div.attrs(({ isColor }) => {
  let className = 'text-left';

  if (isColor) {
    className = `${className} hidden`;
  }

  return { className };
})``;

const OptionsContainer = styled.div.attrs(({ hasGap, handle }) => {
  let className = 'flex flex-wrap mb-3 w-72 md:w-90';

  if (hasGap) {
    className = `${className} gap-3`;
  }

  if (handle === 'extra-chair-cover') {
    className = `${className} flex-row`;
  }

  return { className };
})``;

const Option = styled.div.attrs(({ selectOptionName, handle }) => {
  let className = '';

  if (selectOptionName !== 'Amount') {
    className = `${className} color`;
  }

  if (handle === 'extra-chair-cover') {
    className = `${className} col-span-1`;
  }

  if (selectOptionName === 'Amount') {
    className = `${className} col-span-2`;
  }

  return { className };
})``;

const StandardOption = styled.div.attrs(({ isSelected }) => {
  let className =
    'border-solid border-2 rounded-full grid justify-items-center items-center cursor-pointer';

  if (isSelected) {
    className = `${className} border-blue`;
  } else {
    className = `${className} border-white`;
  }

  return { className };
})``;

const LegColorOption = styled(StandardOption).attrs(({ isSelected }) => {
  let className = 'h-9 w-9 md:h-11 md:w-11 border-2';

  if (isSelected) {
    className = `${className} border-blue`;
  } else {
    className = `${className} border-white`;
  }

  return { className };
})``;

PDPSimpleFilter.defaultProps = {
  product: {
    variants: [],
  },
};

PDPSimpleFilter.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    variants: PropTypes.arrayOf(
      PropTypes.shape({
        option1: PropTypes.string,
        option2: PropTypes.string,
        option3: PropTypes.string,
      })
    ),
    handle: PropTypes.string,
    title: PropTypes.string,
  }),
  selectedVariant: PropTypes.shape({
    option1: PropTypes.string,
    option2: PropTypes.string,
    option3: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  selectOptions: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.string]))
    .isRequired,
  handleColorSwatch: PropTypes.func.isRequired,
  handleOptionClick: PropTypes.func.isRequired,
  handleSelectingOption: PropTypes.func.isRequired,
};

export default PDPSimpleFilter;
