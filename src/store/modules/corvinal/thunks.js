import { corvinalPointsAdd, corvinalPointsRemove } from "./action";

export const corvinalPointsAddThunk = (val) => (dispatch, getState) => {
  const { Corvinal } = getState();

  console.log(Corvinal);
  dispatch(corvinalPointsAdd(Corvinal + val));
};

export const corvinalPointsRemoveThunk = (val) => (dispatch, getState) => {
  const { Corvinal } = getState();

  dispatch(corvinalPointsRemove(Corvinal - val));
};
