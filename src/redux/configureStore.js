import { combineReducers, configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rockets/rockets';
import missionReducer from './missions/missions';

const rootReducers = combineReducers({
  rocket: rocketReducer,
  mission: missionReducer,
});

const store = configureStore({
  reducer: rootReducers,
});

export default store;
