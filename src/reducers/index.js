import { combineReducers } from 'redux';
import appReducer from './app';
import articlesReducer from './articles';

export default () => combineReducers({
  app: appReducer,
  articles: articlesReducer,
});
