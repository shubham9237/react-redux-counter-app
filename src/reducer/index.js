import reduce from "./reduce";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    reduce: reduce
})

export default rootReducer;