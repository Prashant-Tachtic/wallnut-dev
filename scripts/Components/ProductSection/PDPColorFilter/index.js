import getOptimizelyVariant from '../../../utils/optimizely';
import PDPColorFilterAA from './PDPColorFilterA/PDPColorFilterAA';
import PDPColorFilterAB from './PDPColorFilterA/PDPColorFilterAB';
import PDPColorFilterC from './PDPColorFilterC';

const optimizelyConfig = {
  experimentId: '21131482616',
  variants: [
    {
      id: '21100402250',
      component: PDPColorFilterAA,
    },
    {
      id: '21127801823',
      component: PDPColorFilterC,
    },
    {
      id: '21161390353',
      component: PDPColorFilterAB,
    },
  ],
};

const PDPColorFilter = (props) => getOptimizelyVariant(optimizelyConfig, props);

export default PDPColorFilter;
