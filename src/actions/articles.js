import axios from 'axios';
import { FETCH_ARTICLES } from './types';

export const fetchArticles = () => async dispatch => {
  const res = await axios.get('http://172.104.142.224/articles.php');
  const articles = res.data;

  dispatch({
    type: FETCH_ARTICLES,
    payload: articles,
  });
};
