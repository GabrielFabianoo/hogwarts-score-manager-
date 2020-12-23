import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import studentsListReducer from "./modules/students-list/reducer";

import corvinalPointsReducer from "./modules/corvinal/reducer";
import grifinoriaPointsReducer from "./modules/grifinoria/reducer";
import lufaLufaPointsReducer from "./modules/lufa-lufa/reducer";
import sonserinaPointsReducer from "./modules/sonserina/reducer";
import filteredStudentsReducer from "./modules/filteredStudents/reducer";
import setValueReducer from "./modules/input/reducer";

const reducers = combineReducers({
  students: studentsListReducer,
  Grifinoria: grifinoriaPointsReducer,
  Sonserina: sonserinaPointsReducer,
  LufaLufa: lufaLufaPointsReducer,
  Corvinal: corvinalPointsReducer,
  value: setValueReducer,
  filteredStudents: filteredStudentsReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
