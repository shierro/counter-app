import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import counterReducer from './counterReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  counters: counterReducer
});

export default rootReducer;
