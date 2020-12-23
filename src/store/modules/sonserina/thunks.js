import { sonserinaPointsAdd, sonserinaPointsRemove } from "./action";

export const sonserinaPointsAddThunk = (val) => (dispatch, getState) => {
  const { Sonserina } = getState();

  dispatch(sonserinaPointsAdd(Sonserina + val));
};

export const sonserinaPointsRemoveThunk = (val) => (dispatch, getState) => {
  const { Sonserina } = getState();

  dispatch(sonserinaPointsRemove(Sonserina - val));
};
