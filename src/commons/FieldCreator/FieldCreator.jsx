import React from "react";
import styles from './FieldCreator.module.css'
import {ErrorMessage, Field} from "formik";

const FieldCreator = ({fieldName, fieldType, labelName, as = 'input'}) => {
    return <div>
        <div className={styles.field}>
        <Field className={styles.input} as={as} type={fieldType} name={fieldName} placeholder={labelName}/>

        <div className={styles.errorMessage}>
            <ErrorMessage name={fieldName}/>
        </div>
        </div>
    </div>
}

export default FieldCreator