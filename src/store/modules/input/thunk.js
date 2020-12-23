import { setValue } from "./actions";

export const setValueThunk = (value) => (dispatch, getState) => {
  dispatch(setValue(value));
};
