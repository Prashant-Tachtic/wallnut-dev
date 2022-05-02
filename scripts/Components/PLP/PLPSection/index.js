import getOptimizelyVariant from '../../../utils/optimizely';
import PLPSectionA from './PLPSectionA';
// import PLPSectionC from './PLPSectionC';

const optimizelyConfig = {
  experimentId: '21002541157',
  variants: [
    {
      id: '21013341171',
      component: PLPSectionA,
    },
    {
      id: '21016150121',
      component: PLPSectionA,
    },
  ],
};

const PLPSection = (props) => getOptimizelyVariant(optimizelyConfig, props);

export default PLPSection;
