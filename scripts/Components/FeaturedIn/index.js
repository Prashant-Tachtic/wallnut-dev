import FeaturedIn from './FeaturedIn';
import getOptimizelyVariant from '../../utils/optimizely';

const optimizelyConfig = {
  experimentId: '21055470245',
  variants: [
    {
      id: '21036730177',
      component: () => null,
    },
    {
      id: '21063160326',
      component: FeaturedIn,
    },
  ],
};

const Featuredin = (props) => getOptimizelyVariant(optimizelyConfig, props);

export default Featuredin;
