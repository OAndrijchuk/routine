// import{createStore} from "redux"

import registrationReducer from "./registration-reducer";



let store = {
    _state:{
        data:'2023-02-19',
        masters:[
            {name:"Аліна", id:"my0001"},
            {name:"Марина", id:"my0002"},
            {name:"Саша", id:"my0003"},
            {name:"Каріна", id:"my0004"},
            ],
    }, 
    _rerenderStore () {
        console.log("Store changed")
    },
    getState(){
        return this._state;
    },
    subscribe (observer) {
        this._rerenderStore = observer;
    },
// --------------------------------------------------------------------------------
    dispatch(action){
        this._state = registrationReducer(this._state, action);
        this._rerenderStore(this._state);
    },
    
}


export default store;
window.store = store;