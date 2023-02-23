import React from "react";
import Rezult from "./Rezult/Rezult";
import styles from './Filter.module.css';
import Procedures from "./Procedures/Procedures";
import CalendarContainer from "./Calendar/CalendarContainer";
import MastersContainer from "./Masters/MastersContainer";


const Filter = (props) =>{

    return( <div className={styles.filter}>
                <form className={styles.conteiner}>
                    <CalendarContainer/>
                    <MastersContainer/>
                    <Procedures/>
                    <Rezult/>
                </form>
            </div>
    )


}

export default Filter;