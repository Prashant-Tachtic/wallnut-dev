import PubSub from 'pubsub-js';
import { UPDATE_CART_COUNT, RENDER_UPSELL, UPDATECARD_PRICE } from './constants';

// eslint-disable-next-line import/prefer-default-export
export const subscribeToUpdateCartCount = (callback) =>
  PubSub.subscribe(UPDATE_CART_COUNT, (eventName, data) => {
    callback(eventName, data);
  });

export const subscribeToRenderUpsell = (callback) =>
  PubSub.subscribe(RENDER_UPSELL, (eventName, data) => {
    callback(eventName, data);
  });
export const subscribeToUpdatePrice = (callback) =>
  PubSub.subscribe(UPDATECARD_PRICE, (eventName, data) => {
    callback(eventName, data);
  });
