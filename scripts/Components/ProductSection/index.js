import getOptimizelyVariant from '../../utils/optimizely';
import ProductSectionA from './ProductSectionA';
// import ProductSectionB from './ProductSectionB';

const optimizelyConfig = {
  experimentId: '20999060237',
  variants: [
    {
      id: '20989500177',
      component: ProductSectionA,
    },
    {
      id: '20972130141',
      component: ProductSectionA,
    },
  ],
};

const ProductSection = (props) => getOptimizelyVariant(optimizelyConfig, props);

export default ProductSection;
