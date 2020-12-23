import { GET_STUDENT_LIST } from "./actionType";

export const getStudentList = (studentsList) => ({
  type: GET_STUDENT_LIST,
  studentsList,
});
