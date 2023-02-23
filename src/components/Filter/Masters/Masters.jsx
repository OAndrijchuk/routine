import React from "react";
import Master from "./Master/Master";
import styles from './Masters.module.css';


const Masters = (props) =>{

let masters = props.masters;


let mastersElements = masters.map(person => <Master name={person.name} id={person.id}/>)
    return( <details open className={styles.masters}>
                <summary>Виберіть вашого майстра:</summary>
                <fieldset>
                    {mastersElements}
                    
                </fieldset>  
            </details>
    )


}

export default Masters;