import './base.css';
import ProductSection from './Components/ProductSection';
import { createReactComponents } from './utils';

const components = [{ id: 'react-product-section', module: ProductSection }];

createReactComponents(components);
