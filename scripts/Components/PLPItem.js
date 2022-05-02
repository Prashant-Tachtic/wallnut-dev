import PropTypes from 'prop-types';
import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { MinusIcon, PlusIcon } from './Icons';
import {
  legOptions,
  convertPriceFromNumber,
  handleAddToCart,
  getSingleViewImage,
  getPriceInRanges,
  isMobile,
  herringboneGroups,
  whiteGroups,
} from '../utils';
import PLPButton from './PLP/PLPButton';
import ColorSwatch from './ColorSwatch';
import Media from './Media';

const getColorTotal = (colors, product) => {
  if (product.handle.includes('the-classic-dining-chair')) {
    return product.variants.length / 3 - colors.length;
  }

  return product.variants.length - colors.length;
};

const getProductUrl = (product, colorOption, legOption, collectionTitle, chairCovers) => {
  let productHandle = product.handle;

  if (product.handle.includes('the-classic-dining-chair')) {
    productHandle = `${productHandle}-${legOption.toLowerCase()}`;
  }

  if (colorOption) {
    const color = colorOption.replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));

    return `/products/${productHandle}?color=${color}`;
  }

  if (product.handle.includes('extra-chair-cover')) {
    if (collectionTitle === 'Herringbone Chairs' || collectionTitle === 'White Chairs') {
      return chairCovers[collectionTitle].link;
    }
    return `/products/scandinavian-lounge-extra-chair-cover`;
  }

  return `/products/${productHandle}`;
};

const chairCoverByCollection = {
  'Herringbone Chairs': {
    handle: herringboneGroups[4].colors[0],
    link: herringboneGroups[4].link,
  },
  'White Chairs': {
    handle: whiteGroups[4].colors[0],
    link: whiteGroups[4].link,
  },
};

const PLPItem = ({ product, colors = [], colorFilters = [], noColorSelector, collectionTitle }) => {
  const [qty, setQuantity] = useState(1);
  const [hover, setHover] = useState(false);
  const [currentOption, setCurrentOption] = useState(product.variant);
  const [legOption, setLegOption] = useState(legOptions[0]);
  const [colorOption, setColorOption] = useState(colors[0]);
  const PLPItemRef = useRef();

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const isObservable = isMobile(navigator) && mediaQuery.matches && PLPItemRef.current;
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio < 1) {
            setHover(false);
          } else {
            setHover(true);
          }
        });
      },
      { threshold: 1 }
    );

    if (isObservable) {
      intersectionObserver.observe(PLPItemRef.current);
    }

    window.addEventListener('resize', () => {
      if (!mediaQuery.matches && PLPItemRef.current) {
        intersectionObserver.unobserve(PLPItemRef.current);
      } else if (isObservable) {
        intersectionObserver.observe(PLPItemRef.current);
      }
    });
  }, []);

  useEffect(() => {
    if (currentOption && currentOption.options.some((option) => legOptions.includes(option))) {
      setLegOption(currentOption.option2);
    }
  }, [currentOption, product]);

  const handleSubmit = (e) => {
    handleAddToCart(e, currentOption, qty, currentOption.id, () => {
      setQuantity(1);
      window.optimizely.push({
        type: 'event',
        eventName: 'add-to-cart',
        tags: {
          revenue: 0, // Optional in cents as integer (500 == $5.00)
          value: 0.0, // Optional as float
        },
      });
      window.optimizely.push({
        type: 'event',
        eventName: 'quick-add-to-cart',
        tags: {
          revenue: 0, // Optional in cents as integer (500 == $5.00)
          value: 0.0, // Optional as float
        },
      });
    });
  };

  const handleClick = (action) => {
    if (action === 'sub') {
      if (qty > 1) {
        setQuantity(qty - 1);
      }
    }
    if (action === 'add') {
      setQuantity(qty + 1);
    }
  };

  const handleColorChange = (color) => {
    const newVariant = product.variants.find((item) => {
      if (item.option2) {
        return item.option1.toLowerCase() === color && item.option2 === legOption;
      }
      return item.option1.toLowerCase() === color;
    });
    setCurrentOption(newVariant);
    setColorOption(color);
  };

  const chairCoverVariant = Object.keys(chairCoverByCollection).includes(collectionTitle)
    ? `scandinavian-lounge-${chairCoverByCollection[collectionTitle].handle}`
    : 'scandinavian-lounge-herringbone-off-white';

  const handleLegChange = (leg) => {
    const newVariant = product.variants.find(
      (item) => item.option1.toLowerCase() === colorOption && item.option2 && item.option2 === leg
    );
    setCurrentOption(newVariant);
    setLegOption(leg);
  };

  if (product.handle.includes('exclusive')) {
    return null;
  }

  if (product.tags.includes('Gift card') || product.tags.includes('Extra Cover')) {
    if (colorFilters && colorFilters.length > 0) return null;

    const variantName = product.tags.includes('Extra Cover') ? chairCoverVariant : 'e-gift-card';

    return (
      <ItemContainer
        ref={PLPItemRef}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="relative overflow-hidden">
          <a
            href={getProductUrl(
              product,
              colorOption,
              legOption,
              collectionTitle,
              chairCoverByCollection
            )}
          >
            <div className="bg-grey">
              <Media
                alt={`${product.handle.replace(/-/g, ' ')}`}
                image={getSingleViewImage(product, variantName)}
              />
            </div>
          </a>
        </div>
        <a
          className="no-underline"
          href={getProductUrl(
            product,
            colorOption,
            legOption,
            collectionTitle,
            chairCoverByCollection
          )}
        >
          <TitlePriceContainer>
            <span className="text-base lg:text-xl font-normal">{product.title}</span>
            <span className="text-base lg:text-xl font-medium">
              {product.compare_at_price ? (
                <div>
                  <span className="text-errorRed">
                    {convertPriceFromNumber(product.price_min)} -{' '}
                    {convertPriceFromNumber(product.price_max)}
                  </span>
                  <span className="ml-2 text-grey-dark font-normal line-through">
                    {convertPriceFromNumber(product.compare_at_price_min)} -
                    {convertPriceFromNumber(product.compare_at_price_max)}
                  </span>
                </div>
              ) : (
                <>
                  {convertPriceFromNumber(product.price_min)} -
                  {convertPriceFromNumber(product.price_max)}
                </>
              )}
            </span>
          </TitlePriceContainer>
        </a>
      </ItemContainer>
    );
  }

  return (
    <ItemContainer
      ref={PLPItemRef}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative overflow-hidden bg-gray-50">
        <a
          href={getProductUrl(
            product,
            colorOption,
            legOption,
            collectionTitle,
            chairCoverByCollection
          )}
        >
          {currentOption && (
            <ImageContainer isHovered={hover} noColorSelector={noColorSelector}>
              <Media
                alt={`${product.handle}-${currentOption.options.join(' ').toLowerCase().trim()}`}
                image={getSingleViewImage(product, currentOption)}
              />
            </ImageContainer>
          )}
        </a>
        <HoverContainer isHovered={hover}>
          {!noColorSelector && (
            <ColorContainer>
              <div>
                <ColorTitleWrapper>
                  <span className="text-sm">Washable Fabric Color</span>
                </ColorTitleWrapper>
                <div className="flex">
                  {colors.map((color) => {
                    if (
                      (color === 'sedona ivory' && product.tags.includes('Scandinavian')) ||
                      (color === 'kali ikat blue' && product.tags.includes('Classic'))
                    ) {
                      return null;
                    }
                    return (
                      <ColorSwatchWrapper
                        border={color === colorOption}
                        onClick={() => handleColorChange(color)}
                        onKeyUp={() => {}}
                        role="button"
                        tabIndex="0"
                        key={color}
                      >
                        <ColorSwatch option={color} small />
                      </ColorSwatchWrapper>
                    );
                  })}
                  <div className="self-center">
                    <a
                      className="flex items-center justify-center gap-1 text-base"
                      href={getProductUrl(
                        product,
                        colorOption,
                        legOption,
                        collectionTitle,
                        chairCoverByCollection
                      )}
                    >
                      <PlusIcon height="10" width="10" />
                      <span>{getColorTotal(colors, product)}</span>
                    </a>
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
                        className={`w-9 h-9 border-solid border-2 mr-1 lg:mr-0 xxl:mr-1 rounded-full grid justify-items-center items-center ${
                          option === legOption ? ' border-blue' : 'border-lynxwhite'
                        }`}
                        onClick={() => handleLegChange(option)}
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
            </ColorContainer>
          )}
          <AddToCartContainer>
            <CounterContainer>
              <div
                onClick={() => handleClick('sub')}
                className="self-center"
                onKeyUp={() => {}}
                role="button"
                tabIndex="0"
              >
                <MinusIcon fill={qty > 1 ? '#000000' : '#D5D5D5'} />
              </div>
              <span className="self-center">{qty.toString()}</span>
              <div
                onClick={() => handleClick('add')}
                className="self-center"
                onKeyPress={() => {}}
                role="button"
                tabIndex="0"
              >
                <PlusIcon height="10" width="10" />
              </div>
            </CounterContainer>
            <ButtonWrapper>
              <PLPButton
                className="bg-white text-base whitespace-nowrap px-4 md:px-12"
                buttonAction={handleSubmit}
                brown
              >
                Add to cart
              </PLPButton>
            </ButtonWrapper>
          </AddToCartContainer>
        </HoverContainer>
      </div>
      <a
        className="no-underline"
        href={getProductUrl(
          product,
          colorOption,
          legOption,
          collectionTitle,
          chairCoverByCollection
        )}
      >
        <TitlePriceContainer>
          <span className="text-base lg:text-xl font-normal">{product.title}</span>
          <span className="text-base lg:text-xl font-medium">
            {getPriceInRanges(product.price_min, product.price_max)}
          </span>
        </TitlePriceContainer>
      </a>
      <span className="text-sm lg:text-base text-orange-burnt capitalize text-left">
        {colorOption}
      </span>
    </ItemContainer>
  );
};

PLPItem.defaultProps = {
  noColorSelector: false,
  colors: [],
  colorFilters: [],
  collectionTitle: '',
};

PLPItem.propTypes = {
  noColorSelector: PropTypes.bool,
  colorFilters: PropTypes.arrayOf(PropTypes.string),
  colors: PropTypes.arrayOf(PropTypes.string),
  product: PropTypes.shape({
    title: PropTypes.string,
    handle: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string),
    price: PropTypes.number,
    compare_at_price: PropTypes.number,
    compare_at_price_max: PropTypes.number,
    compare_at_price_min: PropTypes.number,
    price_max: PropTypes.number,
    price_min: PropTypes.number,
    tags: PropTypes.arrayOf(PropTypes.string),
    variants: PropTypes.arrayOf(
      PropTypes.shape({
        option1: PropTypes.string,
        option2: PropTypes.string,
      })
    ),
    variant: PropTypes.shape({
      option1: PropTypes.string,
    }),
  }).isRequired,
  collectionTitle: PropTypes.string,
};

const ItemContainer = styled.div(() => [tw`flex flex-col cursor-pointer`, `max-width: 520px;`]);

const ColorTitleWrapper = styled.div.attrs({
  className: 'w-full flex justify-center ',
})``;

const TitlePriceContainer = styled.div.attrs({
  className: 'flex justify-start flex-col text-left mt-2.5 md:mt-3.5 lg:mt-2.5',
})``;

const HoverContainer = styled.div(({ isHovered }) => [
  tw`absolute w-full`,
  isHovered && tw`visible`,
  !isHovered && tw`hidden`,
  `bottom: 0;`,
]);
const ImageContainer = styled.div(({ isHovered, noColorSelector }) => [
  tw`transition-all duration-300`,
  isHovered && !noColorSelector && tw`transform scale-75 -translate-y-16`,
  isHovered && noColorSelector && tw`transform scale-75 -translate-y-5`,
]);

const AddToCartContainer = styled.div.attrs({
  className: 'flex gap-2 w-full justify-between px-2 md:px-3 py-2.5 md:py-3',
})`
  background: #e1eaf8;
  height: 72px !important;
`;
const ButtonWrapper = styled.div(() => []);

const CounterContainer = styled.div.attrs({
  className: 'flex w-26 lg:w-32 justify-around h-12',
})`
  background: white;
`;
const ColorContainer = styled.div.attrs({
  className: 'flex w-full justify-between px-3 py-2 bg-lynxwhite',
})``;

const ColorSwatchWrapper = styled.div.attrs(({ border }) => {
  const borderStyle = border ? 'border-2 border-blue' : 'border border-gray-300';
  return {
    className: `w-9 h-9 border-solid border-2 mr-1 lg:mr-0 xxl:mr-1 rounded-full grid justify-items-center items-center ${borderStyle} `,
  };
})``;

export default PLPItem;
