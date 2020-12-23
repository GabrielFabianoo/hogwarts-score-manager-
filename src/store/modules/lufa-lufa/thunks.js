import { lufaLufaPointsAdd, lufaLufaPointsRemove } from "./action";

export const lufaLufaPointsAddThunk = (val) => (dispatch, getState) => {
  const { LufaLufa } = getState();

  dispatch(lufaLufaPointsAdd(LufaLufa + val));
};

export const lufaLufaPointsRemoveThunk = (val) => (dispatch, getState) => {
  const { LufaLufa } = getState();

  dispatch(lufaLufaPointsRemove(LufaLufa - val));
};
