import{combineReducers, createStore} from "redux"
import registrationReducer from "./registration-reducer";

let reducers = combineReducers({
    registration: registrationReducer,
});

let store = createStore(reducers);


export default store;