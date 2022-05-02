import React from 'react';
import ReactDOM from 'react-dom';
import './base.css';
import { subscribeToRenderUpsell, subscribeToUpdatePrice } from './pub-sub';
import { createReactComponents } from './utils';
import { addClientIdToHeap } from './utils/heap';
import { setOptimizelySession } from './utils/optimizely';

import BestSellers from './Components/BestSellers';
import DesktopAnnouncement from './Components/DesktopAnnouncement';
import ChairCoverUpsell from './Components/ChairCoverUpsell';
import AfterPayCopy from './Components/AfterPayCopy';
import Sale from './Components/Sale';
import Header from './Components/Header';
import CyberMondaySale from './Components/CyberMondaySale';
import BlackFridaySale from './Components/BlackFridaySale';
import ProductRecommendation from './Components/ProductRecommendation';

addClientIdToHeap();
setOptimizelySession();

import('./Components/CartHighlight').then((data) => {
  createReactComponents([
    { id: 'react-cart-highlight-mobile', module: data.default },
    { id: 'react-cart-highlight', module: data.default },
  ]);
});

import('./Components/ColorsNav').then((data) => {
  createReactComponents([{ id: 'react-colors-nav', module: data.default }]);
});

import('./Components/PopUpModal').then((data) => {
  createReactComponents([{ id: 'react-pop-up-modal', module: data.default }]);
});

import('./Components/EmptyCart').then((data) => {
  createReactComponents([{ id: 'react-empty-cart', module: data.default }]);
});

import('./Components/CustomLandingOne').then((data) => {
  createReactComponents([{ id: 'react-custom-landing-one', module: data.default }]);
});

import('./Components/About').then((data) => {
  createReactComponents([{ id: 'react-about-page', module: data.default }]);
});

const components = [
  { id: 'react-desktop-announcement', module: DesktopAnnouncement },
  { id: 'react-best-sellers', module: BestSellers },
  { id: 'react-sale-hero', module: Sale },
  { id: 'react-black-friday-sale-hero', module: BlackFridaySale },
  { id: 'react-cyber-monday-sale-hero', module: CyberMondaySale },
  { id: 'react-header', module: Header },
  { id: 'react-product-recommendation', module: ProductRecommendation },
];

createReactComponents(components);

subscribeToRenderUpsell((_actionName, data) => {
  ReactDOM.render(
    <ChairCoverUpsell cart={data} />,
    document.getElementById('react-chair-cover-upsell')
  );
});

subscribeToUpdatePrice((actionName, data) => {
  ReactDOM.render(
    <AfterPayCopy price={data} product={null} />,
    document.getElementById('react-afterpay-cart-copy')
  );
});
