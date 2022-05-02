/* eslint-disable import/prefer-default-export */

export const getImageByDevice = (images) => {
  const desktop = window.matchMedia('(min-width: 1440px)');
  const tablet = window.matchMedia('(min-width: 768px) and (max-width: 1024px)');
  const mobile = window.matchMedia('(max-width: 768px)');

  if (desktop.matches) {
    return images.desktop;
  }

  if (tablet.matches) {
    return images.tablet;
  }

  if (mobile.matches) {
    return images.mobile;
  }

  return images.desktop;
};
