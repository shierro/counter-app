import initState from './initState';
import { ADD_COUNTER, GET_COUNTERS } from '../constants/actionTypes';

export default function counterReducer(state = initState.counters, action) {
  switch (action.type) {
    case ADD_COUNTER:
      state.push(action.counter);
      return state;
    case GET_COUNTERS:
      return action.counters;
    default:
      return state;
  }
}
