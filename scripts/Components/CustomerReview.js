import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import VerifiedCheck from './Icons/VerifiedCheck';
import YotpoReviewStars from './YotpoReviewStars';
import ImageModal from './ImageModal';
import { convertToReadableDate, decodeHtml } from '../utils';

const truncate = (str, no_words) => str.split(' ').splice(0, no_words).join(' ');

const wordCount = (str) => str.split(' ').length;

const CustomerReview = (props) => {
  const { review } = props;
  const minWords = 30;
  const [content, setContent] = useState(truncate(review.content, minWords));

  return (
    <div className="border-b border-gray-300 py-5 md:pb-12 ">
      <div className="sm:grid sm:grid-cols-3">
        <div className="">
          <div className="flex justify-between">
            <div className="col-span-3 text-base">
              <span>{review.user.display_name}</span>
              {review.verified_buyer && (
                <SVG>
                  <VerifiedCheck />
                </SVG>
              )}
            </div>
            <div className="text-gray-400 text-xs text-right sm:hidden">
              {convertToReadableDate(review.created_at)}
            </div>
          </div>
          <div className="mb-1 col-span-3">
            <YotpoReviewStars stars={review.score} location="customer-review" />
          </div>
        </div>
        <div className="col-span-2">
          <div className="flex justify-between">
            <div className="font-normal text-sm mb-3">{review.title}</div>
            <div className="text-gray-400 text-xs hidden text-right sm:block">
              {convertToReadableDate(review.created_at)}
            </div>
          </div>
          <div className="font-extralight text-sm overflow-ellipsis overflow-hidden inline-block">
            {decodeHtml(content)}
            {wordCount(review.content) > minWords && wordCount(content) <= minWords && (
              <span>...</span>
            )}
            {wordCount(review.content) > minWords && wordCount(content) <= minWords && (
              <span
                className="cursor-pointer ml-1 text-sm text-brown underline"
                onClick={() => setContent(review.content)}
                onKeyDown={() => {}}
                role="button"
                tabIndex={0}
              >
                read more
              </span>
            )}
          </div>

          {review.images_data && (
            <div className="gap-y-3 grid grid-cols-2 justify-items-center mt-5 py-3 rounded-sm md:grid-cols-6 gap-3">
              {review.images_data.map((image) => (
                <ImageModal key={image.id} image={image} review={review} />
              ))}
            </div>
          )}
          <div className={review.comment ? 'bg-gray-100 mt-4 pb-0.5 pt-6 px-4 lg:px-8' : 'hidden'}>
            <div className="mb-3 text-blue-dark text-sm font-normal">Response From Levity</div>
            {review.comment && (
              <p className="font-extralight text-sm">{decodeHtml(review.comment.content)}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const SVG = styled.div.attrs({
  className: 'inline-block ml-1',
})`
  vertical-align: middle;
`;

CustomerReview.defaultProps = {
  review: {
    images_data: {},
    title: '',
  },
};

CustomerReview.propTypes = {
  review: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    user: PropTypes.shape({
      display_name: PropTypes.string.isRequired,
    }).isRequired,
    comment: PropTypes.shape({
      content: PropTypes.string,
    }),
    verified_buyer: PropTypes.bool.isRequired,
    score: PropTypes.number.isRequired,
    images_data: PropTypes.arrayOf(PropTypes.shape({})),
  }),
};

export default CustomerReview;
