import React from "react";
import styles from './Procedures.module.css';


const Procedures = () =>{

    return( <details className={styles.procedures}>
                <summary>Виберіть процедури:</summary> 
                <fieldset>
                    {/* <legend></legend> */}
                    <div>
                    <input type="checkbox" id="scales" name="scales"/>
                    <label for="scales">Scales</label>
                    </div>
                </fieldset>
            </details>
    )


}

export default Procedures;