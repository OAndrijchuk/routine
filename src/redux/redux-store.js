import {legacy_createStore as createStore} from "redux"
// import{combineReducers, createStore} from "redux"
import registrationReducer from "./registration-reducer";

// let reducers = combineReducers({
//     registration: registrationReducer,
// });

let store = createStore(registrationReducer);


export default store;