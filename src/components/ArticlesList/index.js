import React from 'react';
import { Container } from './articleslist.theme';
import Article from 'components/Article';

const ArticlesList = ({ articles }) => (
  <Container>
    { articles.map(article => <Article key={article.id} data={article} />) }
  </Container>
);

export default ArticlesList;
