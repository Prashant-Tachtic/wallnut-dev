import React from 'react';
import PropTypes from 'prop-types';

import { isSaleOn } from '../utils';

const DesktopAnnouncement = ({ settings, themeSettings }) => {
  const {
    announcement,
    referral_link_text,
    sale_announcement,
    sale_link,
    black_friday_sale_announcement,
    black_friday_sale_link,
    cyber_monday_sale_announcement,
    cyber_monday_sale_link,
  } = settings;
  const {
    sale_start,
    sale_end,
    black_friday_sale_start,
    black_friday_sale_end,
    cyber_monday_sale_start,
    cyber_monday_sale_end,
  } = themeSettings;

  if (isSaleOn(sale_start, sale_end)) {
    return (
      <div className="bg-blue center font-normal font-serif mx-0 lg:py-2 text-xs lg:text-base text-white w-full">
        <a className="text-white hover:no-underline" href={sale_link} id="message">
          {sale_announcement}
        </a>
      </div>
    );
  }

  if (isSaleOn(black_friday_sale_start, black_friday_sale_end)) {
    return (
      <div className="bg-blue center font-normal font-serif mx-0 lg:py-2 text-xs lg:text-base text-white w-full">
        <a className="text-white hover:no-underline" href={black_friday_sale_link} id="message">
          {black_friday_sale_announcement}
        </a>
      </div>
    );
  }

  if (isSaleOn(cyber_monday_sale_start, cyber_monday_sale_end)) {
    return (
      <div className="bg-blue center font-normal font-serif mx-0 lg:py-2 text-xs lg:text-base text-white w-full">
        <a className="text-white hover:no-underline" href={cyber_monday_sale_link} id="message">
          {cyber_monday_sale_announcement}
        </a>
      </div>
    );
  }

  return (
    <div
      id="message"
      className="bg-blue center font-normal font-serif mx-0 lg:py-2 text-xs lg:text-base text-white w-full"
    >
      <div className="relative max-w-screen-xxl mx-auto">
        {announcement}
        <div className="absolute top-1/2 xxl:right-0 right-10 transform -translate-y-1/2 hidden lg:block">
          <a className="no-underline text-white" href="/pages/refer-a-friend">
            {referral_link_text}
          </a>
        </div>
      </div>
    </div>
  );
};

DesktopAnnouncement.propTypes = {
  settings: PropTypes.shape({
    announcement: PropTypes.string,
    referral_link_text: PropTypes.string,
    sale_announcement: PropTypes.string,
    sale_link: PropTypes.string,
    black_friday_sale_announcement: PropTypes.string,
    black_friday_sale_link: PropTypes.string,
    cyber_monday_sale_announcement: PropTypes.string,
    cyber_monday_sale_link: PropTypes.string,
  }).isRequired,
  themeSettings: PropTypes.shape({
    sale_start: PropTypes.string,
    sale_end: PropTypes.string,
    black_friday_sale_start: PropTypes.string,
    black_friday_sale_end: PropTypes.string,
    cyber_monday_sale_start: PropTypes.string,
    cyber_monday_sale_end: PropTypes.string,
  }).isRequired,
};

export default DesktopAnnouncement;
