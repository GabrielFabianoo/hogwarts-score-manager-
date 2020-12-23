import { grifinoriaPointsAdd, grifinoriaPointsRemove } from "./action";

export const grifinoriaPointsAddThunk = (val) => (dispatch, getState) => {
  const { Grifinoria } = getState();
  console.log(Grifinoria);
  dispatch(grifinoriaPointsAdd(Grifinoria + val));
};

export const grifinoriaPointsRemoveThunk = (val) => (dispatch, getState) => {
  const { Grifinoria } = getState();

  dispatch(grifinoriaPointsRemove(Grifinoria - val));
};
