import { ADD_POINTS, REMOVE_POINTS } from "./actionType";

export const lufaLufaPointsAdd = (points) => ({
  type: ADD_POINTS,
  pointsAdd: points,
});

export const lufaLufaPointsRemove = (points) => ({
  type: REMOVE_POINTS,
  pointsRemove: points,
});
