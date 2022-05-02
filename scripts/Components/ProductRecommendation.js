import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fetchRecommendations } from '../utils';
import PLPItem from './PLPItem';

const ProductRecommendation = ({ product, title }) => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchRecommendations(product?.id);

        setRecommendations(response);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, [product.id]);

  const getVariant = (recommendation) => {
    const productVariant = recommendation.variants.find(
      (variant) => variant.option1.toLowerCase() === recommendation.colors[0]
    );

    return productVariant;
  };

  return (
    <ProductRecommendationContainer>
      <h2 className="font-normal text-center font-serif mb-1 md:pb-5 md:text-2xl md:text-base">
        {title}
      </h2>
      <div className="grid grid-cols-1 overflow-hidden md:justify-items-center">
        <RecommendationContainer recommendations={recommendations}>
          {recommendations.map((recommendation) => {
            const newProduct = { ...recommendation, variant: getVariant(recommendation) };
            return (
              <PLPItem
                key={recommendation.id}
                product={newProduct}
                colors={recommendation.colors}
              />
            );
          })}
        </RecommendationContainer>
      </div>
    </ProductRecommendationContainer>
  );
};

const ProductRecommendationContainer = styled.div.attrs({
  className: 'px-2 py-8 mb-8 md:px-0 md:py-10 md:text-center',
})`
  @media (min-width: 740px) {
    margin-right: -8%;
    margin-left: -8%;
  }
`;

const RecommendationContainer = styled.div.attrs(({ recommendations }) => ({
  className: `grid grid-col-1 justify-items-center md:justify-items-start md:grid-cols-2 xl:grid-cols-${recommendations.length} gap-2 md:w-10/12 max-w-screen-xxl`,
}))``;

ProductRecommendation.defaultProps = {
  product: {},
  title: '',
};

ProductRecommendation.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
  }),
  title: PropTypes.string,
};

export default ProductRecommendation;
