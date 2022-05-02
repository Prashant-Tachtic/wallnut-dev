/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

const getOptimizelyVariant = (configs, props) => {
  const optimizelySession = sessionStorage.getItem('optimizely');
  const { experimentId, variants } = configs;
  const OriginaVariant = variants[0].component;

  if (optimizelySession) {
    const { experiment, variation } = JSON.parse(optimizelySession);

    if (experiment === experimentId) {
      const currentVariant = variants.find((variant) => variant.id === variation);

      if (currentVariant) {
        return <currentVariant.component {...props} />;
      }
    }
  }

  if (window.optimizely && window.optimizely.initialized) {
    const experimentStates = window.optimizely.get('state').getExperimentStates();

    if (experimentStates[experimentId] && experimentStates[experimentId].variation) {
      const variantId = experimentStates[experimentId].variation.id;

      const currentVariant = variants.find((variant) => variant.id === variantId);

      if (currentVariant) {
        return <currentVariant.component {...props} />;
      }

      if (variants.length === 1) {
        return null;
      }
    }
  }

  return <OriginaVariant {...props} />;
};

export const setOptimizelySession = () => {
  const urlParams = new URLSearchParams(window.location.search);

  if (urlParams.has('experiments') && urlParams.has('variations')) {
    sessionStorage.setItem(
      'optimizely',
      `{
        "experiment": "${urlParams.get('experiments')}",
        "variation": "${urlParams.get('variations')}"
      }`
    );
  }
};

export const pushEvent = (eventName, tags) => {
  window.optimizely.push({
    type: 'event',
    eventName,
    tags,
  });
};

export default getOptimizelyVariant;
