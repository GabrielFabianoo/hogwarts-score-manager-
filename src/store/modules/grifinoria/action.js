import { ADD_POINTS, REMOVE_POINTS } from "./actionType";

export const grifinoriaPointsAdd = (points) => ({
  type: ADD_POINTS,
  pointsAdd: points,
});

export const grifinoriaPointsRemove = (points) => ({
  type: REMOVE_POINTS,
  pointsRemove: points,
});
