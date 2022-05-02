import './base.css';
import { createReactComponents } from './utils';
import ShopAllColors from './Components/ShopAllColors';
import SweepstakesRules from './Components/SweepstakesRules';
import ProductFeature from './Components/ProductFeature';

const components = [
  { id: 'react-shop-all-colors', module: ShopAllColors },
  { id: 'react-sweepstakes-rules', module: SweepstakesRules },
  { id: 'react-product-feature-landing', module: ProductFeature },
];

createReactComponents(components);
