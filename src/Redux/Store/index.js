import showReducer from "../Reducer/Reducer";
import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

const rootReducer=combineReducers({
    showReducer
})
const Store=legacy_createStore(rootReducer, applyMiddleware(thunk))
export default Store;
