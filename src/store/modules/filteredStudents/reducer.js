import { FILTERED_STUDENTS } from "./actionsType";

const filteredStudentsReducer = (state = [], action) => {
  switch (action.type) {
    case FILTERED_STUDENTS:
      const { studentsList } = action;
      return studentsList;
    default:
      return state;
  }
};

export default filteredStudentsReducer;
