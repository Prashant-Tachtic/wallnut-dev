import './base.css';
import { createReactComponents } from './utils';
import ValuePropComponent from './Components/ProductFeature/ValuePropComponent';

import Hero from './Components/Hero';

import('./Components/VideoPromoSection').then((data) => {
  createReactComponents([{ id: 'react-promo-video-section', module: data.default }]);
});

import('./Components/ProductRecommendation').then((data) => {
  createReactComponents([{ id: 'react-product-recommendation', module: data.default }]);
});

import('./Components/FeaturedIn').then((data) => {
  createReactComponents([{ id: 'react-featured-in', module: data.default }]);
});

import('./Components/WhatsNew').then((data) => {
  createReactComponents([{ id: 'react-whats-new', module: data.default }]);
});

const components = [
  { id: 'react-value-prop-section', module: ValuePropComponent },
  { id: 'react-hero', module: Hero },
];

createReactComponents(components);
