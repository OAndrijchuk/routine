
import { connect } from "react-redux";
import { setDataActionCreater } from "../../../redux/registration-reducer";
import Calendar from "./Calendar";


let mapStateToProps = (state) => {
    return{
        dataText: state.dataText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        setDataActionCreater: (dataText)=>{
            let action = setDataActionCreater(dataText);
            dispatch(action);
        },
    }
}

const CalendarContainer = connect(mapStateToProps,mapDispatchToProps)(Calendar);


export default CalendarContainer;