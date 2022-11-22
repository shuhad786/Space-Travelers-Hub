import {
  applyMiddleware, compose, combineReducers, createStore,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketReducer from './rockets/rockets';

const rootReducers = combineReducers({

  rockets: rocketReducer,
});

const store = createStore(rootReducers, compose(applyMiddleware(thunk, logger)));

export default store;
