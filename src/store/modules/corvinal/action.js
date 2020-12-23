import { ADD_POINTS, REMOVE_POINTS } from "./actionType";

export const corvinalPointsAdd = (points) => ({
  type: ADD_POINTS,
  pointsAdd: points,
});

export const corvinalPointsRemove = (points) => ({
  type: REMOVE_POINTS,
  pointsRemove: points,
});
