import {combineReducers, createStore} from "redux";
import usersReducer from "./users-reducer";

const reducers = combineReducers({
    userPage: usersReducer,
})

const store = createStore(reducers)
window.store = store


export default store