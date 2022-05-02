import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { PlusIcon } from '../Icons';
import { getOptionUrl, legOptions, getPriceInRanges } from '../../utils';

const SimplePLPItem = ({ product, colors = [], colorFilters = [] }) => {
  const [currentOption, setCurrentOption] = useState();
  const [legOption, setLegOption] = useState(legOptions[0]);
  const [colorOption, setColorOption] = useState();

  useEffect(() => {
    if (colors) {
      if (colorFilters && colorFilters.length > 0) {
        colorFilters.forEach((color) => {
          if (colors.includes(color.toLowerCase())) {
            setColorOption(color.toLowerCase());
          }
        });
      } else {
        setColorOption(colors[0]);
      }
    }
  }, [colors, colorFilters]);

  useEffect(() => {
    if (colorOption) {
      let filteredOption = product.variants.filter(
        (variant) => variant.option1.toLowerCase() === colorOption.toLowerCase()
      );
      if (product.options.length > 1) {
        filteredOption = filteredOption.filter((variant) =>
          legOption ? variant.option2.toLowerCase() === legOption.toLowerCase() : false
        );
      }

      setCurrentOption(filteredOption[0]);
    }
  }, [legOption, colorOption, product]);

  if (product.tags.includes('Gift card') || product.tags.includes('Extra Cover')) {
    if (colorFilters && colorFilters.length > 0) return null;

    return (
      <ItemContainer>
        <div className="relative overflow-hidden">
          <a href={`/products/${product.handle}?variant=${currentOption?.id}`}>
            <SmallImage alt="itemImage" src={product.featured_image} />
          </a>
        </div>
        <a
          className="no-underline"
          href={`/products/${product.handle}?variant=${currentOption?.id}`}
        >
          <div className="flex justify-between mt-2.5 md:mt-3.5 lg:mt-2.5">
            <span className="text-base lg:text-xl font-normal">{product.title}</span>
            <span className="text-base lg:text-xl font-medium">
              {getPriceInRanges(product.price_min, product.price_max)}
            </span>
          </div>
        </a>
      </ItemContainer>
    );
  }

  return (
    <ItemContainer>
      <div className="relative overflow-hidden">
        <a href={`/products/${product.handle}?variant=${currentOption?.id}`}>
          {currentOption && <Image alt="itemImage" src={currentOption.featured_image.src} />}
        </a>
      </div>
      <a className="no-underline" href={`/products/${product.handle}?variant=${currentOption?.id}`}>
        <div className="flex justify-between mt-2.5 md:mt-3.5 lg:mt-2.5">
          <span className="text-base lg:text-xl font-normal">{product.title}</span>
          <span className="text-base lg:text-xl font-medium">
            ${product.price.toString().split(0)[0]}
          </span>
        </div>
      </a>
      <div>
        <div className="flex w-full justify-between px-3 py-2 bg-white">
          <div>
            <ColorTitleWrapper>
              <span className="text-sm">Washable Fabric Color</span>
            </ColorTitleWrapper>
            <div className="flex">
              {colors.map((color, key) => {
                if (
                  (color === 'sedona ivory' && product.tags.includes('Scandinavian')) ||
                  (color === 'kali ikat blue' && product.tags.includes('Classic'))
                ) {
                  return null;
                }
                return (
                  <div
                    className={`w-9 h-9 border-solid border-2 mr-1 rounded-full flex justify-items-center items-center ${
                      color === colorOption ? ' border-blue' : 'border-lynxwhite'
                    }`}
                    onClick={() => setColorOption(color)}
                    onKeyUp={() => {}}
                    role="button"
                    tabIndex="0"
                    key={key}
                  >
                    <div
                      className="h-8 w-8 rounded-full"
                      style={{
                        backgroundColor: 'white',
                        backgroundImage: `url(${getOptionUrl(color)})`,
                      }}
                    />
                  </div>
                );
              })}
              <div className="self-center ml-1">
                <a href={`/products/${product.handle}`}>
                  <PlusIcon height="10" width="10" />
                </a>
              </div>
              <div className="self-center font-serif ml-1">
                <a href={`/products/${product.handle}`}>15</a>
              </div>
            </div>
          </div>
          {product.options.length > 1 && !product.title.includes('The Classic Lounge Chair') && (
            <div>
              <ColorTitleWrapper>
                <span className="text-sm">Leg Color</span>
              </ColorTitleWrapper>
              <div className="flex justify-center">
                {legOptions.map((option, i) => (
                  <div
                    key={i}
                    className={`w-9 h-9 border-solid border-2 mr-1 rounded-full grid justify-items-center items-center ${
                      option === legOption ? ' border-blue' : 'border-lynxwhite'
                    }`}
                    onClick={() => setLegOption(option)}
                    onKeyUp={() => {}}
                    role="button"
                    tabIndex="0"
                  >
                    <div className={`h-8 w-8 rounded-full wood-color-swatch ${option}`} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </ItemContainer>
  );
};

SimplePLPItem.propTypes = {
  colorFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  product: PropTypes.shape({
    featured_image: PropTypes.string,
    handle: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string),
    price: PropTypes.number,
    price_max: PropTypes.number,
    price_min: PropTypes.number,
    tags: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
    variants: PropTypes.arrayOf(
      PropTypes.shape({
        featured_image: PropTypes.shape({
          alt: PropTypes.string,
          height: PropTypes.number,
          product_id: PropTypes.number,
          src: PropTypes.string,
          variant_ids: PropTypes.arrayOf(PropTypes.number),
          width: PropTypes.number,
        }),
        featured_media: PropTypes.shape({
          alt: PropTypes.string,
          id: PropTypes.number,
          position: PropTypes.number,
          preview_image: PropTypes.shape({
            aspect_ratio: PropTypes.number,
            height: PropTypes.number,
            src: PropTypes.string,
            width: PropTypes.number,
          }),
        }),
        id: PropTypes.number,
        name: PropTypes.string,
        option1: PropTypes.string,
        option2: PropTypes.string,
        option3: PropTypes.string,
        options: PropTypes.arrayOf(PropTypes.string),
        price: PropTypes.number,
        public_title: PropTypes.string,
        sku: PropTypes.string,
        taxable: PropTypes.bool,
        title: PropTypes.string,
      })
    ),
  }).isRequired,
};

const ItemContainer = styled.div(() => [tw`flex flex-col cursor-pointer`, `max-width: 520px;`]);

const ColorTitleWrapper = styled.div.attrs({
  className: 'w-full flex justify-center ',
})``;

const Image = styled.img(({ hover }) => [
  tw`transition-all duration-300`,
  hover && tw`transform scale-75 -translate-y-16`,
]);
const SmallImage = styled.img(({ hover }) => [
  tw`transition-all duration-300`,
  hover && tw`transform scale-90 -translate-y-8`,
]);

export default SimplePLPItem;
