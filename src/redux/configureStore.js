import { createStore, combineReducers, applyMiddleware } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import thunk from 'thunk';
import logger from 'redux-logger';
import reducerCountries from './countries/countries';

const reducer = combineReducers({
  countries: reducerCountries,
  loadingBar: loadingBarReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;
