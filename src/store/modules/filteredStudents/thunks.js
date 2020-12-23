import { filteredStudents } from "./actions";

export const filteredStudentsThunk = (studentList) => (dispatch, getState) => {
  dispatch(filteredStudents(studentList));
};
