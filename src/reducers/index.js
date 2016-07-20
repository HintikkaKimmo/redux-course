/**
 * Created by Kimmo on 19.7.2016.
 */
import { combineReducers } from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
  courses
});

export default rootReducer;
