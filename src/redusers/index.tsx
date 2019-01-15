import { combineReducers } from "redux";
import html from "./html";

export interface IState {
  html: string;
}

export default combineReducers({
  html
});
