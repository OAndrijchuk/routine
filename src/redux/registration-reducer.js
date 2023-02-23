
const SET_DATA = "SET-DATA";
// const SET_MASTER = "SET-MASTER";

let initialState = {
    data:'2023-02-19',
    masters:[
        {name:"Аліна", id:"my0001"},
        {name:"Марина", id:"my0002"},
        {name:"Саша", id:"my0003"},
        {name:"Каріна", id:"my0004"},
        ],
}

const registrationReducer = (state = initialState, action) =>{
    switch(action.type){
        case SET_DATA:
            let stateCopy = {...state}
            stateCopy.data = action.newData;
            return stateCopy;
        default:
            return state;
    }
}

export const setDataActionCreater = (dataValue) =>{
    return{
        type:SET_DATA,
        newData:dataValue
    };
}
export default registrationReducer;