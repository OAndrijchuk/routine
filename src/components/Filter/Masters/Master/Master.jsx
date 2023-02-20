import React from "react";
import styles from './Master.module.css';


const Master = (props) =>{

    return( 
            <div className={styles.master}>
                <input type="radio" id={props.id} name="masters"  value={props.id} />
                <label for={props.id}>{props.name}</label>
            </div>
                       
    )
// checked 

}

export default Master;