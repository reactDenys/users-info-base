import React from "react";
import {Field, Form, Formik} from "formik";
import styles from '../../commonStyles.module.css'
import FieldCreator from "../../commons/FieldCreator/FieldCreator";
import {NavLink, useNavigate} from "react-router-dom";
import * as Yup from "yup";


const Registration = (props) => {
    let navigate = useNavigate()
    const initialValues = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        birthDate: '',
        gender: ''
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Required'),
        password: Yup.string().required('Required'),
        firstname: Yup.string().required('Required'),
        lastname: Yup.string().required('Required'),
    })

    const onSubmit = (data) => {
        let lastUser = props.users[props.users.length - 1]
        props.addNewUser(lastUser.userId + 1, data)
        navigate('/login')
    }

    return <div className={styles.loginBlock}>
        <h1 className={styles.title}>Registration</h1>
        <Formik initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
            <Form>
                <FieldCreator fieldType='text' fieldName='firstname' labelName='Firstname*'/>
                <FieldCreator fieldType='text' fieldName='lastname' labelName='Lastname*'/>
                <FieldCreator fieldType='email' fieldName='email' labelName='Email*'/>
                <FieldCreator fieldType='password' fieldName='password' labelName='Password*'/>
                <label className={styles.title} htmlFor="gender">Gender:</label>
                <div>
                    <Field type='radio' value='male' name='gender'/><span className={styles.radio}>man</span>
                    <Field type='radio' value='woman' name='gender'/><span>woman</span>
                </div>
                <FieldCreator fieldType='date' fieldName='birthDate' labelName='Birth'/>
                <button className={styles.loginButton} type='submit'>Register</button>
            </Form>
        </Formik>
        <NavLink to='/'>Cancel</NavLink>
    </div>
}

export default Registration