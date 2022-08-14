import React from "react";
import {Form, Formik} from "formik";
import styles from '../../commonStyles.module.css'
import {NavLink, useNavigate} from "react-router-dom";
import * as Yup from 'yup'
import FieldCreator from "../../commons/FieldCreator/FieldCreator";

const Login = (props) => {
    const navigate = useNavigate()
    let initialValues = {
        email: '',
        password: ''
    }

    const onSubmit = (data) => {
        props.users.map(user => {
            if (user.login === data.login && user.password === data.password) {
                props.setAuthUserId(true)
                navigate('/profile/' + user.userId)
            }
            return null
        })
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Required'),
        password: Yup.string().required('Required')
    })

    return <div className={styles.loginBlock}>
        <h1 className={styles.title}>Login Form</h1>
        <Formik initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}>
            <Form>
                <FieldCreator fieldName='email' fieldType='email' labelName='Email'/>
                <FieldCreator fieldName='password' fieldType='password' labelName='Password'/>

                <button className={styles.loginButton} type='submit'>Login</button>
            </Form>
        </Formik>
        <NavLink to='/'>Cancel</NavLink>
    </div>
}

export default Login