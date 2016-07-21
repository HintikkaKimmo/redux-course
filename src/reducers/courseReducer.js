/**
 * Created by Kimmo on 19.7.2016.
 */
import * as types from '../actions/actionsTypes';

export default function courseReducer(state = [], action) {
  switch(action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;

    default:
      return state;
  }
}
