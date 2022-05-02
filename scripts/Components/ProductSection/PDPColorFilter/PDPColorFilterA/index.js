import getOptimizelyVariant from '../../../../utils/optimizely';

import PDPColorFilterAA from './PDPColorFilterAA';
// import PDPColorFilterAB from './PDPColorFilterAB';

const optimizelyConfig = {
  experimentId: '21022950299',
  variants: [
    {
      id: '20997990334',
      component: PDPColorFilterAA,
    },
    {
      id: '20997780111',
      component: PDPColorFilterAA,
    },
  ],
};

const ProductSelector = (props) => getOptimizelyVariant(optimizelyConfig, props);

export default ProductSelector;
