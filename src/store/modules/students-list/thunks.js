import axios from "axios";
import { getStudentList } from "./action";

export const getStudentListThunk = () => (dispatch, getState) => {
  axios
    .get("https://hp-api.herokuapp.com/api/characters/students")
    .then((res) => dispatch(getStudentList(res.data)));
};
