import { GET_STUDENT_LIST } from "./actionType";

const studentsListReducer = (state = [], action) => {
  switch (action.type) {
    case GET_STUDENT_LIST:
      const { studentsList } = action;
      return studentsList;
    default:
      return state;
  }
};

export default studentsListReducer;
