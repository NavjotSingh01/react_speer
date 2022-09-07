
import callReducer from "./callReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    callReducer
});

const rootReducer = (state, action) => {
    return allReducers(state, action);
};

export default rootReducer;
