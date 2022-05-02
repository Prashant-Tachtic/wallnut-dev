/* eslint-disable dot-notation */
import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { getYotpoReviewsData, productIDs, getExtraChairCoverProducts, isSaleOn } from '../../utils';
import BreadCrumbs from '../BreadCrumbs';
import MobileProductDetailsSection from './MobileProductDetailsSection';
import DesktopProductDetails from './DesktopProductDetails';
import ProductRecommendation from '../ProductRecommendation';
import YotpoReviews from '../YotpoReviews';
import ProductSelector from './ProductSelector';
import VideoPlayer from '../VideoPlayer';
import PDPValueProps from './PDPValueProps';
import InstagramGridTwo from '../InstagramGrid/InstagramGridTwo';

const getProductTypeBlocks = (product, blocks) => {
  if (product.handle.includes('exclusive')) {
    const handle = product.handle.replace(/-exclusive/, '');
    return blocks.filter(
      (block) => block.type === 'product_details' && block.settings.product === handle
    );
  }
  return blocks.filter(
    (block) => block.type === 'product_details' && block.settings.product === product.handle
  );
};

const ProductSectionB = (props) => {
  const { blocks, product, currentVariant, assetURL, themeSettings } = props;

  const { sale_start, sale_end } = themeSettings;
  const salesOn = isSaleOn(sale_start, sale_end);

  const [reviews, setReviews] = useState({});
  const [extraCoverProduct, setExtraCoverProduct] = useState();

  const reviewsRef = useRef();
  const productTypeBlocks = getProductTypeBlocks(product, blocks);
  const currentProduct = product.handle === 'extra-chair-cover' ? extraCoverProduct : product;

  useEffect(() => {
    const fetchExtraCoverProducts = async () => {
      const extraCoverProductsRes = await getExtraChairCoverProducts(product);

      setExtraCoverProduct(extraCoverProductsRes);
    };

    if (product.handle === 'extra-chair-cover') {
      fetchExtraCoverProducts();
    }
  }, [product, product.handle]);

  useEffect(() => {
    // eslint-disable-next-line no-underscore-dangle, no-use-before-define
    const _learnq = _learnq || [];

    const productID = product.handle.includes('exclusive')
      ? productIDs.find((item) => item.exclusiveHandle === product.handle).id
      : product.id;

    (async () => {
      const yotpoReviews = await getYotpoReviewsData(productID);

      setReviews(yotpoReviews);
    })();
  }, [product.id, product.handle]);

  // Added this so that there isn't a change between off-white and patterns when making api call to get extra chairs.
  if (product.handle === 'extra-chair-cover' && !extraCoverProduct) {
    return null;
  }

  return (
    <section>
      <div className="px-4">
        <BreadCrumbs />
        {product.handle !== 'e-gift-card' && (
          <StyledDiv
            handle={product.handle}
            template={productTypeBlocks[0]?.settings.exclusive_template}
            salesOn={salesOn}
          >
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 text-center top-1/2 transform w-11/12">
              <h1 className="block font-serif mb-0 md:inline md:text-3xl mt-4 text-2xl whitespace-nowrap">
                {productTypeBlocks[0]?.settings.direct_response_text}{' '}
              </h1>
              <DRBannerDiscount>
                {productTypeBlocks[0]?.settings.direct_response_discount}% OFF
              </DRBannerDiscount>
            </div>
          </StyledDiv>
        )}
        <div className="grid grid-cols-1 justify-items-auto xl:justify-items-center mb-5">
          <ProductSelector
            product={currentProduct}
            currentVariant={currentVariant}
            setReviews={setReviews}
            reviews={reviews}
            reviewsRef={reviewsRef}
            assetURL={assetURL}
            discount={
              product.handle !== 'e-gift-card'
                ? productTypeBlocks[0]?.settings.direct_response_discount
                : '0'
            }
            productMessaging={{
              productMessage: productTypeBlocks[0]?.settings.product_messaging,
              productMessageInfo: productTypeBlocks[0]?.settings.product_messaging_info,
              productMessageHeight: productTypeBlocks[0]?.settings.product_messaging_height,
            }}
          />
        </div>
      </div>
      <DesktopProductDetails productTypeBlocks={productTypeBlocks} blocks={blocks} />
      <div className="mb-8 md:hidden px-4">
        {productTypeBlocks.map((block, i) => {
          const {
            about_heading,
            about_paragraph,
            about_paragraphNote,
            about_desktop_heading,
            about_image,
            about_video_url,
            about_media_type,
          } = block.settings;
          return (
            <div key={i}>
              <div className="pb-5 border-grey-50 border-b border-solid">
                <h5 className="font-serif text-orange-burnt text-base font-normal mb-1 text-lg">
                  {about_heading}
                </h5>
                <StyledMobileMedia mediaType={about_media_type}>
                  {about_image && about_media_type === 'image' && <img src={about_image} alt="" />}
                  {about_video_url && about_media_type === 'video' && (
                    <VideoPlayer link={about_video_url} autoPlay loop />
                  )}
                </StyledMobileMedia>
                <div className="font-serif mb-3 mt-2">{about_desktop_heading}</div>
                <p className="text-sm font-extralight mb-3">{about_paragraph}</p>
                {about_paragraphNote && (
                  <p className="text-sm font-normal mb-3 text-brown">{about_paragraphNote}</p>
                )}
              </div>
              <PDPValueProps width={80} height={80} />
              <MobileProductDetailsSection productTypeBlock={block} blocks={blocks} />
            </div>
          );
        })}
      </div>
      <InstagramGridTwo settings={productTypeBlocks[0].settings} />
      <ProductRecommendation product={currentProduct} title="You might also like" />
      <div ref={reviewsRef}>
        {reviews.reviews && <YotpoReviews reviews={reviews} product={currentProduct} />}
      </div>
    </section>
  );
};

const DRBannerDiscount = styled.h1.attrs({
  className: 'block font-serif font-normal md:inline md:text-3xl text-2xl text-orange-burnt',
})`
  text-shadow: 2px 2px #f2caaf;
`;

const StyledMobileMedia = styled.div.attrs(({ mediaType }) => {
  const className = mediaType === 'video' ? 'mb-5' : '';

  return {
    className,
  };
})``;

const StyledDiv = styled.div.attrs(({ handle, template, salesOn }) => {
  let className = 'relative my-2 mx-auto w-full h-20 md:my-6 lg:max-w-7xl bg-blue-baby';

  if (handle.includes('exclusive') || (template && salesOn)) {
    className = `${className} block`;
  } else {
    className = `${className} hidden`;
  }
  return {
    className,
  };
})``;

ProductSectionB.defaultProps = {
  product: {
    variants: [],
    compare_at_price: null,
  },
  handle: '',
};

ProductSectionB.propTypes = {
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
    compare_at_price: PropTypes.number,
  }),
  blocks: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentVariant: PropTypes.shape({
    option1: PropTypes.string,
    option2: PropTypes.string,
    option3: PropTypes.string,
  }).isRequired,
  themeSettings: PropTypes.shape({
    sale_start: PropTypes.string,
    sale_end: PropTypes.string,
  }).isRequired,
  handle: PropTypes.string,
  assetURL: PropTypes.string.isRequired,
};

export default ProductSectionB;
