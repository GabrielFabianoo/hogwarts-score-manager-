import { ADD_POINTS, REMOVE_POINTS } from "./actionType";

export const sonserinaPointsAdd = (points) => ({
  type: ADD_POINTS,
  pointsAdd: points,
});

export const sonserinaPointsRemove = (points) => ({
  type: REMOVE_POINTS,
  pointsRemove: points,
});
