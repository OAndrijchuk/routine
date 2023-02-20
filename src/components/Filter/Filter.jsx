import React from "react";
import Rezult from "./Rezult/Rezult";
import styles from './Filter.module.css';
import Calendar from "./Calendar/Calendar";
import Masters from "./Masters/Masters";
import Procedures from "./Procedures/Procedures";


const Filter = (props) =>{

    return( <div className={styles.filter}>
                <form className={styles.conteiner}>
                    <Calendar dispatch={props.dispatch} dataText={props.dataText}/>
                    <Masters mastersPerson ={props.mastersPerson}/>
                    <Procedures/>
                    <Rezult/>
                </form>
            </div>
    )


}

export default Filter;