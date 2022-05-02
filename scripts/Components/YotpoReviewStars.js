import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const getYotpoStars = (starRating) => {
  const stars = [];
  const fullStars = parseInt(starRating, 10);
  const partialStarRating = starRating % 1;
  const blankStars = parseInt(5 - starRating, 10);

  for (let i = 0; i < fullStars; i += 1) {
    stars.push(<span key={`fullstar-${i}`} className="yotpo-icon yotpo-icon-star pull-left" />);
  }

  for (let i = 0; i < 1; i += 1) {
    if (partialStarRating >= 0.8) {
      stars.push(
        <span key={`partialStar-${i}`} className="yotpo-icon yotpo-icon-star pull-left" />
      );
    } else if (partialStarRating < 0.8 && partialStarRating > 0) {
      stars.push(
        <span
          key={`partialStar-${i}`}
          className="yotpo-icon yotpo-icon-half-star yotpo-icon-star pull-left"
        />
      );
    }
  }

  for (let i = 0; i < blankStars; i += 1) {
    stars.push(
      <span key={`emptyStar-${i}`} className="yotpo-icon yotpo-icon-empty-star pull-left" />
    );
  }

  return stars;
};

const YotpoReviewStars = ({ starsOnly, stars, totalReviews, displayAvgStars, location }) => {
  if (starsOnly) {
    return (
      <div className="yotpo yotpo-small">
        <div className="yotpo-display-wrapper" style={{ visibility: 'hidden' }}>
          <div className="standalone-bottomline" tabIndex="-1">
            <div className="yotpo-bottomline pull-left grid items-center">
              <span className="yotpo-stars mr-2">{getYotpoStars(starsOnly)}</span>
              <div className="yotpo-clr" />
            </div>
            <div className="yotpo-clr" />
          </div>
          <div className="yotpo-clr" />
        </div>
      </div>
    );
  }

  const renderStars = () => {
    if (location === 'reviews-header') {
      return (
        <div className="text-brown text-xs text-center mt-1 md:inline-block">
          {Math.round(stars * 10) / 10} Stars
        </div>
      );
    }
    if (location === 'product-header') {
      return (
        <div className="text-brown text-s font-normal md:ml-0 ml-2 mr-1 mt-1 flex">
          {totalReviews} Reviews
          <StyledBorder />
          <div className="text-brown text-s font-normal ml-1">
            {Math.round(stars * 10) / 10} Stars
          </div>
        </div>
      );
    }
    return <div className="text-brown text-xs mt-1 md:inline-block">{totalReviews} Reviews</div>;
  };

  const parentStarsClass = (section) => {
    if (section === 'reviews-header') {
      return '';
    }
    if (section === 'product-header') {
      return 'flex items-center';
    }
    return 'grid grid-cols-2 items-center lg:grid-cols-2 md:grid-cols-3';
  };

  const childStarsClass = (section) => {
    if (section === 'reviews-header') {
      return 'yotpo-stars mx-auto md:inline-block md:mx-0';
    }
    if (section === 'product-header') {
      return 'yotpo-stars col-span-1 md:mr-2';
    }
    return 'yotpo-stars col-span-1 lg:col-span-1 md:col-span-2 md:mr-2';
  };

  return (
    <div className="yotpo yotpo-small">
      <div className="yotpo-display-wrapper" style={{ visibility: 'hidden' }}>
        <div className="standalone-bottomline" tabIndex="-1">
          <div className="yotpo-bottomline pull-left grid items-center">
            <div className={parentStarsClass(location)}>
              <div className={childStarsClass(location)}>{getYotpoStars(stars)}</div>
              {totalReviews && !displayAvgStars ? (
                renderStars()
              ) : (
                <div
                  className={`${
                    location === 'reviews-header' ? 'text-center' : 'inline-block mt-1 ml-2 md:ml-0'
                  } text-brown text-xs`}
                >
                  {Math.round(stars * 10) / 10} Stars
                </div>
              )}
            </div>
            <div className="yotpo-clr" />
          </div>
          <div className="yotpo-clr" />
        </div>
        <div className="yotpo-clr" />
      </div>
    </div>
  );
};

const StyledBorder = styled.div.attrs({
  className: 'h-3 ml-1 mt-1',
})`
  border-left: 1px solid #ac6433 !important;
`;

YotpoReviewStars.defaultProps = {
  starsOnly: 0,
  totalReviews: 0,
  displayAvgStars: false,
  stars: 0,
  location: '',
};

YotpoReviewStars.propTypes = {
  starsOnly: PropTypes.number,
  stars: PropTypes.number,
  totalReviews: PropTypes.number,
  displayAvgStars: PropTypes.bool,
  location: PropTypes.string,
};

export default YotpoReviewStars;
