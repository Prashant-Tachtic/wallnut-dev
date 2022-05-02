import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { pushEvent } from '../../utils/optimizely/index';
import { HANDLE_FEATUREDIN_ARTICLE } from '../../utils/optimizely/constants';

const FeaturedIn = ({ settings }) => {
  const articles = [
    {
      logo_image: settings.logo_image_1,
      quote: settings.quote_1,
      author: settings.author_1,
      url: settings.link_1,
    },
    {
      logo_image: settings.logo_image_2,
      quote: settings.quote_2,
      author: settings.author_2,
      url: settings.link_2,
    },
    {
      logo_image: settings.logo_image_3,
      quote: settings.quote_3,
      author: settings.author_3,
      url: settings.link_3,
    },
    {
      logo_image: settings.logo_image_4,
      quote: settings.quote_4,
      author: settings.author_4,
      url: settings.link_4,
    },
  ];
  const title = 'Featured in';
  return (
    <div className="bg-blue-babyNew flex flex-col px-8 md:px-12 pt-10 pb-12 md:pb-20 my-8 max-w-screen-xxl mx-auto">
      <span className="flex justify-center mb-10 md:mb-12 text-2.5xl lg:text-3xl text-blue">
        {title}
      </span>
      <div className="grid grid-cols-1 gap-15 md:grid-cols-2 md:gap-y-12 md:gap-x-6 lg:grid-cols-4 lg:gap-8">
        {articles.map((article, index) => (
          <Article
            onClick={() => pushEvent(HANDLE_FEATUREDIN_ARTICLE, { revenue: 0, value: 0.0 })}
            href={article.url}
            target="_blank"
            key={index}
          >
            <LogoContainer>{article.logo_image && <Logo src={article.logo_image} />}</LogoContainer>
            <ArticleContainer>
              <QuoteContainer dangerouslySetInnerHTML={{ __html: article.quote }} />
              <AuthorContainer>{article.author}</AuthorContainer>
            </ArticleContainer>
          </Article>
        ))}
      </div>
    </div>
  );
};

FeaturedIn.propTypes = {
  settings: PropTypes.shape({
    logo_image_1: PropTypes.string,
    quote_1: PropTypes.string,
    author_1: PropTypes.string,
    link_1: PropTypes.string,
    logo_image_2: PropTypes.string,
    quote_2: PropTypes.string,
    author_2: PropTypes.string,
    link_2: PropTypes.string,
    logo_image_3: PropTypes.string,
    quote_3: PropTypes.string,
    author_3: PropTypes.string,
    link_3: PropTypes.string,
    logo_image_4: PropTypes.string,
    quote_4: PropTypes.string,
    author_4: PropTypes.string,
    link_4: PropTypes.string,
  }).isRequired,
};

const Article = styled.a.attrs(() => ({
  className: `text-center flex flex-col hover:no-underline`,
}))``;

const ArticleContainer = styled.div.attrs(() => ({
  className: `text-center font-serif text-base text-blue h-full flex flex-col justify-between`,
}))``;
const LogoContainer = styled.div.attrs(() => ({
  className: `mb-6 md:mb-8`,
}))``;
const Logo = styled.img.attrs(() => ({
  className: ` bg-center bg-no-repeat h-7`,
}))``;
const QuoteContainer = styled.div.attrs(() => ({
  className: ``,
}))``;
const AuthorContainer = styled.div.attrs(() => ({
  className: `font-medium underline`,
}))``;

export default FeaturedIn;
