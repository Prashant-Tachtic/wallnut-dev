import getOptimizelyVariant from '../../utils/optimizely';
import MediaA from './MediaA';
import MediaB from './MediaB';

const optimizelyConfig = {
  experimentId: '21130670035',
  variants: [
    {
      id: '21108661003',
      component: MediaA,
    },
    {
      id: '21123860599',
      component: MediaB,
    },
  ],
};

const Media = (props) => getOptimizelyVariant(optimizelyConfig, props);

export default Media;
