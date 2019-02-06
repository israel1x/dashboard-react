/* import { combineReducers } from 'redux'; */
import { reducer as formReducer } from "redux-form";
import Auth from "./Auth";
import Layout from "./Layout";
import ThemeOptions from "./ThemeOptions";

export default {
  Auth,
  ThemeOptions,
  Layout,
  form: formReducer
};
