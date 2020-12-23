import { FILTERED_STUDENTS } from "./actionsType";

export const filteredStudents = (studentsList) => ({
  type: FILTERED_STUDENTS,
  studentsList,
});
