import './base.css';
import { createReactComponents } from './utils';
import PLPSection from './Components/PLP/PLPSection';

const components = [{ id: 'react-plp-section', module: PLPSection }];

createReactComponents(components);
