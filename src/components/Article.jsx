import React from 'react';

import styled from 'styled-components';

const Article = ({ article }) => {
  const wordList = article.content ? new Set(article.content.split(' ')) : [];

  return (
    <ArticleWrapper>
      <a href={article.url} className="title">
        {article.title.slice(0, 80) + '...'}
      </a>
      <div>{article.publishedAt.slice(0, 10)}</div>
      <hr />
    </ArticleWrapper>
  );
};

export default Article;

const ArticleWrapper = styled.div`
  height: 60px;
  width: 600px;
  font-size: 0.8em;
  .title {
    font-weight: bold;
  }
`;
