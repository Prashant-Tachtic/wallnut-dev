import getOptimizelyVariant from '../../../../utils/optimizely';
import ProductSelectorAA from './ProductSelectorAA';
import ProductSelectorAB from './ProductSelectorAB';
import ProductSelectorAC from './ProductSelectorAC';

const optimizelyConfig = {
  experimentId: '21020291289',
  variants: [
    {
      id: '21025542558',
      component: ProductSelectorAA,
    },
    {
      id: '21027122662',
      component: ProductSelectorAB,
    },
    {
      id: '21019523034',
      component: ProductSelectorAC,
    },
  ],
};

const ProductSelectorA = (props) => getOptimizelyVariant(optimizelyConfig, props);

export default ProductSelectorA;
