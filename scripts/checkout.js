import './tailwind.css';

import { createReactComponents } from './utils';
import CheckoutProgress from './Components/CheckoutProgress';

const components = [{ id: 'react-checkout-progress', module: CheckoutProgress }];

createReactComponents(components);
