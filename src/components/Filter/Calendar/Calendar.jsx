import React from "react";
import styles from './Calendar.module.css';


const Calendar = (props) =>{

    let choiceData = React.createRef();

    let setData = () =>{
        let dataValue = choiceData.current.value;
        props.setDataActionCreater(dataValue);
    }

    return( <div className={styles.calendar}>
                <label for="date">Виберіть зручну для вас дату:</label>
                <input id="date" type="date" ref={choiceData} onChange={setData} value={props.dataText} />
            </div>
    )


}

export default Calendar;