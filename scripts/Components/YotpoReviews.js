import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import YotpoReviewStars from './YotpoReviewStars';
import ReviewFilter from './ReviewFilter';
import CustomerReview from './CustomerReview';
import Button from './Button';

import { getYotpoReviewsData } from '../utils';

const YotpoReviews = ({ reviews, product }) => {
  const [filters, setFilters] = useState({});
  const [allReviews, setAllReviews] = useState([]);
  const [yotpoReviews, setYotpoReviews] = useState({});
  const [page, setPage] = useState(1);

  useEffect(() => {
    setYotpoReviews(reviews);
    setAllReviews(reviews.reviews);
  }, [reviews]);

  useEffect(() => {
    if (Object.keys(filters).length > 0) {
      (async () => {
        const newReviews = await getYotpoReviewsData(product.id, page, filters);

        setAllReviews(newReviews.reviews);
      })();
    }
  }, [filters, page, product]);

  const updateFilters = (filterData) => {
    setFilters(filterData);
  };

  const handleShowMore = async () => {
    try {
      if (yotpoReviews.pagination.total > allReviews.length) {
        const newReviews = await getYotpoReviewsData(product.id, page + 1, filters);

        setAllReviews([...allReviews, ...newReviews.reviews]);
        setPage(page + 1);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="font-serif grid justify-items-center md:mx-0 md:py-0 p-9 md:px-28">
      {yotpoReviews.reviews && (
        <>
          <div
            className="border-b border-gray-300 pb-3 w-full max-w-screen-xxl grid grid-cols-1"
            id="reviews"
          >
            <div className="md:grid md:grid-cols-4">
              <div className=" col-span-1" />
              <div className="flex col-span-2 justify-center">
                <h2 className="center font-serif mb-1 mr-4 text-xl lg:text-3xl">
                  {yotpoReviews.bottomline.total_review} Reviews
                </h2>
                <div className="border-blue border-l-2 h-4 mt-1.5 lg:h-6" />
                <div className="yotpo-stars grid grid-cols-1 justify-items-center ml-4">
                  <YotpoReviewStars
                    totalReviews={yotpoReviews.bottomline.total_review}
                    stars={yotpoReviews.bottomline.average_score}
                    displayAvgStars
                    location="reviews-header"
                  />
                </div>
              </div>
              <div className="hidden col-span-1 md:w-56 justify-self-end">
                <ReviewFilter
                  updateFilters={updateFilters}
                  filterName="Rating"
                  options={[
                    { component: 'All', value: { stars: '' } },
                    { component: <YotpoReviewStars starsOnly={5} />, value: { star: 5 } },
                    { component: <YotpoReviewStars starsOnly={4} />, value: { star: 4 } },
                    { component: <YotpoReviewStars starsOnly={3} />, value: { star: 3 } },
                    { component: <YotpoReviewStars starsOnly={2} />, value: { star: 2 } },
                    { component: <YotpoReviewStars starsOnly={1} />, value: { star: 1 } },
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="font-serif py-2 border-b border-gray-300 w-full hidden">
            <ReviewFilter
              updateFilters={updateFilters}
              filterName="Rating"
              options={[
                { component: 'All', value: { stars: '' } },
                { component: <YotpoReviewStars starsOnly={5} />, value: { star: 5 } },
                { component: <YotpoReviewStars starsOnly={4} />, value: { star: 4 } },
                { component: <YotpoReviewStars starsOnly={3} />, value: { star: 3 } },
                { component: <YotpoReviewStars starsOnly={2} />, value: { star: 2 } },
                { component: <YotpoReviewStars starsOnly={1} />, value: { star: 1 } },
              ]}
            />
          </div>
          <div className="max-w-screen-xxl">
            {allReviews.map((review) => (
              <CustomerReview key={review.id} review={review} />
            ))}
          </div>
          {yotpoReviews.pagination.total > allReviews.length && allReviews.length > 0 && (
            <div className="grid justify-items-center">
              <div className="mt-6 md:pb-10 mb-2 w-56 md:w-auto lg:w-90 whitespace-nowrap">
                <Button buttonAction={handleShowMore}>See more Reviews</Button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

YotpoReviews.defaultProps = {
  reviews: {},
};

YotpoReviews.propTypes = {
  reviews: PropTypes.shape({
    reviews: PropTypes.arrayOf(PropTypes.shape({})),
  }),
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    metafields: PropTypes.shape({
      yotpoProductId: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default YotpoReviews;
