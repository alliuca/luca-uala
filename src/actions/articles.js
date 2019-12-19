import axios from 'axios';
import { FETCH_ARTICLES } from './types';

export const fetchArticles = () => async dispatch => {
  const res = await axios.get('https://my-json-server.typicode.com/alliuca/luca-uala/articles');
  const articles = res.data;

  dispatch({
    type: FETCH_ARTICLES,
    payload: articles,
  });
};
