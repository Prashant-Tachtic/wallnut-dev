import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { ReviewStarIcon } from '../Icons';

const ReviewComponent = () => {
  const reviews = [
    {
      review: `"If you have a dog, toddler, or really any human in your household, I highly recommend!"`,
      author: `Tracey C.`,
      chairType: `The Classic Lounge`,
    },
    {
      review: `"Thank you, Levity for solving all my furniture issues <3"`,
      author: `Colleen H.`,
      chairType: `The Classic Lounge`,
    },
    {
      review: `"We love the comfort of it! It’s big enough to curl up in and feels so cozy."`,
      author: `Jamie M.`,
      chairType: `The Classic Lounge`,
    },
  ];

  const returnStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i += 1) {
      stars.push(
        <div className="mr-1">
          <ReviewStarIcon />
        </div>
      );
    }
    return stars;
  };
  return (
    <Container>
      <ReviewContainer>
        {reviews.map((review, index) => (
          <ReviewContent index={index} key={index}>
            <ReviewStars>{returnStars()}</ReviewStars>
            <Review>{review.review}</Review>
            <ReviewAuthor>
              <span className="mr-1">-</span> <span>{review.author}</span>{' '}
              <span className="mx-2">|</span>
              <ReviewChairType>{review.chairType}</ReviewChairType>
            </ReviewAuthor>
          </ReviewContent>
        ))}
      </ReviewContainer>
      <LinkContainer>
        <a href="/pages/reviews" className="hover:no-underline">
          <LinkTitle>Read All Reviews</LinkTitle>
        </a>
      </LinkContainer>
    </Container>
  );
};

const Container = styled.div.attrs({
  className: 'flex flex-col items-center font-serif bg-creamwhite py-8 py-14',
})``;
const ReviewContainer = styled.div.attrs({
  className: 'flex flex-col md:flex-row  px-4 md:  max-w-screen-xxl ',
})``;

const ReviewContent = styled.div(({ index }) => [
  tw`bg-white p-7 md:py-15 text-center mb-6 md:mr-4 xl:mr-8 `,
  (index + 1) % 3 === 0 && tw`mr-0 md:hidden lg:block`,
  (index + 1) % 2 === 0 && tw`md:mr-0 lg:mr-4 xl:mr-8`,
]);

const ReviewStars = styled.div.attrs({
  className: 'flex justify-center mb-4',
})``;
const Review = styled.div.attrs({
  className: 'mb-6 h-20',
})``;
const ReviewAuthor = styled.div.attrs({
  className: 'flex whitespace-nowrap justify-center',
})``;
const ReviewChairType = styled.div.attrs({
  className: '',
})``;

const LinkContainer = styled.div.attrs({
  className: 'mt-8 md:mt-6',
})``;

const LinkTitle = styled.div.attrs({
  className: 'text-base font-normal border-b-2  border-transparent hover:border-orange-burnt',
})``;

export default ReviewComponent;
