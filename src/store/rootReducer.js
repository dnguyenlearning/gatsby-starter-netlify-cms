import { combineReducers } from "redux";
import filterReducer from '../filter/reducer';
import companyReducer from "../companies/reducer";

export default combineReducers({
    filter: filterReducer,
    company: companyReducer
});
