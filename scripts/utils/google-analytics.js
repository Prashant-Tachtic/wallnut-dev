// eslint-disable-next-line import/prefer-default-export

export const getClientId = () => {
  if (window.ga && ga.create) {
    const tracker = ga.getAll()[0];

    return tracker.get('clientId');
  }

  return '';
};

export const addEventToDataLayer = (event) => {
  dataLayer.push(event);
};
