import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getBestSellers from './getBestSellers';
import ColorSwatch from '../ColorSwatch';
import { handleAddToCart, getExtraChairCoverProducts } from '../../utils';
import chairCoverFabrics from './chairCoverFabrics';

const title = (currentChairCover) => {
  if (currentChairCover.option1.toLowerCase().includes('lounge')) {
    return 'Extra Lounge Chair Cover';
  }
  return 'Extra Dining Chair Cover';
};

const getPrice = (currentChairCover) => currentChairCover.price.toString().replace(/0/g, '');

const abbreviatedColor = (color) => {
  if (color.includes('Dark Denim Blue')) {
    return color.replace('Dark Denim Blue', 'Dk Denim');
  }
  if (color.includes('Gingham')) {
    return color.replace('Gingham', '');
  }
  if (color.includes('Light')) {
    return color.replace('Light', 'Lt');
  }
  if (color.includes('Pinstripe')) {
    return color.replace('Dark Gray', '');
  }
  if (color.includes('Dark')) {
    return color.replace('Dark', 'Dk');
  }
  if (color.includes('Soft')) {
    return color.replace('Soft', '');
  }
  if (color.includes('Charcoal')) {
    return color.replace('Gray', '');
  }
  if (color.includes('Blue')) {
    return color.replace('Blue', '');
  }
  if (color.includes('Yellow')) {
    return color.replace('Yellow', '');
  }
  if (color.includes('Mezzo Diamond')) {
    return color.replace('Mezzo Diamond', 'Mezzo');
  }
  if (color.includes('Mosaic')) {
    return color.replace('Woven', '');
  }
  if (color.includes('Staccato')) {
    return color.replace('Staccato Salt and Pepper', 'Salt & Pepper');
  }
  if (color.includes('Shagreen')) {
    return color.replace('Storm Gray', '');
  }
  if (color.includes('Cowhide')) {
    return color.replace('Black and White', '');
  }
  if (color.includes('Evergreen')) {
    return color.replace('Forest', '');
  }
  if (color.includes('Camellia Sunset Orange')) {
    return color.replace('Orange', '');
  }
  return color;
};

const getColorVariants = (allChairCovers, firstChair) => {
  const { variants } = allChairCovers;
  const arrayHandle = firstChair.handle.includes('exclusive')
    ? firstChair.handle.replace('-exclusive', '').split('-')
    : firstChair.handle.split('-');
  // TODO: This needs refactoring. It is not scalable.
  const wordsToFilter = ['the', 'chair', 'archived', 'walnut', 'cherry', 'black'];
  const filteredHandle = arrayHandle.filter((word) => !wordsToFilter.includes(word)).join('');
  const getChairVariants = variants.filter(
    (variant) => variant.option1.replace(/ /g, '').toLowerCase() === filteredHandle
  );
  const onlyColors = getChairVariants.map((variant) => variant.option2);
  const reOrder = chairCoverFabrics.reduce((acc, fabricName) => {
    const items = onlyColors.filter((color) => color.toLowerCase() === fabricName);
    return [...acc, ...items];
  }, []);

  return reOrder;
};

const getFirstChair = (chairsInCart) => {
  const notChairs = ['E-Gift Card', 'Extra Chair Cover'];
  const chairsOnly = chairsInCart.filter((product) => !notChairs.includes(product.product_title));

  return chairsOnly[chairsOnly.length - 1];
};

const ChairCoverUpsell = ({ cart }) => {
  const [cartItems] = useState(cart.items);
  const [allChairCovers, setAllChairCovers] = useState();
  const [currentChairCover, setCurrentChairCover] = useState();
  const [hasPulledChairCover, setHasPulledChairCover] = useState(false);
  const [colorsMenuOpen, setColorsMenuOpen] = useState(false);

  const chairsInCart = cartItems.filter((item) => !item.handle.includes('cover'));

  const [firstChair] = useState(getFirstChair(chairsInCart));

  useEffect(() => {
    const fetchExtraChairCovers = async () => {
      const response = await getExtraChairCoverProducts();
      setAllChairCovers(response);
    };

    if (chairsInCart.length > 0) {
      fetchExtraChairCovers();
    }
  }, [chairsInCart.length, firstChair]);

  useEffect(() => {
    if (allChairCovers && !hasPulledChairCover) {
      const { variants } = allChairCovers;

      if (firstChair) {
        setCurrentChairCover(getBestSellers(firstChair, variants, cartItems));
      }
      setHasPulledChairCover(true);
    }
  }, [allChairCovers, firstChair, chairsInCart, cartItems, hasPulledChairCover]);

  const changeVariant = (color) => {
    const selectedVariant = allChairCovers.variants.find(
      (variant) => variant.option1 === currentChairCover.option1 && variant.option2 === color
    );
    setCurrentChairCover(selectedVariant);
  };

  return (
    <div className={`${chairsInCart.length === 0 ? 'hidden' : ''} px-2`}>
      {currentChairCover && allChairCovers && (
        <>
          <p className="mb-0 font-normal text-left text-sm">Before you go</p>
          <div className="grid grid-cols-3 border-b border-gray-300 bg-gray-100">
            <img
              className="mt-2 pl-2"
              src={currentChairCover.featured_image.src}
              alt="chair cover"
            />
            <div className="col-span-2">
              <div className="grid grid-cols-5">
                <p className="col-span-4 font-normal font-serif ml-2 mt-4 mb-0 text-left text-sm">
                  <a href={`/products/${currentChairCover.handle}?variant=${currentChairCover.id}`}>
                    {title(currentChairCover)}
                  </a>
                </p>
                <p className="mt-4 mb-0 pr-3 text-right text-sm">${getPrice(currentChairCover)}</p>
              </div>
              <p className="font-serif ml-2 text-left text-xs">{currentChairCover.option2}</p>
              <div
                className="bg-white border border-gray-300 font-serif ml-auto mr-2 mt-2 mb-4 rounded text-sm w-1/3 cursor-pointer"
                onClick={(e) => handleAddToCart(e, currentChairCover, 1, currentChairCover.id)}
                tabIndex={0}
                onKeyDown={() => {}}
                role="button"
                aria-label="Add to Cart"
              >
                Add
              </div>
            </div>
          </div>
          <div>
            <div
              className="bg-gray-100 grid grid-cols-2 relative"
              onClick={() => setColorsMenuOpen(!colorsMenuOpen)}
              role="button"
              tabIndex={0}
              onKeyDown={() => {}}
            >
              <p className="font-normal mb-0 pl-2 py-2 text-left text-sm">Select Color</p>
              <div
                className={`${colorsMenuOpen ? 'hidden' : 'block'}  pr-2 text-right cursor-pointer`}
              >
                +
              </div>
              <div
                className={`${colorsMenuOpen ? 'block' : 'hidden'} pr-2 text-right cursor-pointer`}
              >
                -
              </div>
            </div>
            <div className={`${colorsMenuOpen ? 'block' : 'hidden'} bg-gray-100`}>
              <ul className="grid grid-cols-6 border-t border-gray-300">
                {getColorVariants(allChairCovers, firstChair).map((color, i) => (
                  <li key={i} className="mt-2 px-0.5">
                    <div
                      className={`${
                        currentChairCover.option2 === color ? 'border-blue' : 'border-gray-100'
                      } relative grid justify-items-center items-center border-solid border-2 h-10 w-10 mx-auto bg-gray-100 rounded-full`}
                    >
                      <div
                        onClick={() => changeVariant(color)}
                        tabIndex={0}
                        onKeyDown={() => {}}
                        role="button"
                        aria-label="change variant"
                      >
                        <ColorSwatch option={color} small />
                      </div>
                    </div>
                    <p className="text-center text-xxxs font-normal font-serif">
                      {abbreviatedColor(color)}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

ChairCoverUpsell.defaultProps = {
  cart: {
    items: [],
  },
};

ChairCoverUpsell.propTypes = {
  cart: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        handle: PropTypes.string.isRequired,
      })
    ),
  }),
};

export default ChairCoverUpsell;
