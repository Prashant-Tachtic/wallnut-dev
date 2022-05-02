import { getClientId } from './google-analytics';

// eslint-disable-next-line import/prefer-default-export
export const addClientIdToHeap = () => {
  if (heap) {
    heap.identify(getClientId());
  }
};

export const trackHeapEvent = (eventName, data) => {
  heap.track(eventName, data);
};
