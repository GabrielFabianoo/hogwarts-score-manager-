import { ADD_POINTS, REMOVE_POINTS } from "./actionType";

const sonserinaPointsReducer = (state = 500, action) => {
  switch (action.type) {
    case ADD_POINTS:
      const { pointsAdd } = action;
      return pointsAdd;

    case REMOVE_POINTS:
      const { pointsRemove } = action;
      return pointsRemove;
    default:
      return state;
  }
};

export default sonserinaPointsReducer;
