import { SET_VALUE } from "./actionsType";

const setValueReducer = (state = "", action) => {
  switch (action.type) {
    case SET_VALUE:
      const { value } = action;
      return value;
    default:
      return state;
  }
};

export default setValueReducer;
