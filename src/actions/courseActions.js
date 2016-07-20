/**
 * Created by Kimmo on 19.7.2016.
 */
import * as types from './actionsTypes';

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course };
}
