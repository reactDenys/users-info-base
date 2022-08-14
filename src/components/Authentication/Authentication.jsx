import React from "react";
import styles from '../../commonStyles.module.css'
import {useNavigate} from "react-router-dom";


const Authentication = () => {
    const navigate = useNavigate()

    return <div className={styles.loginBlock}>
        <div>
            <div>
                <button className={styles.loginButton} onClick={() => navigate('/login')}>Login</button>
            </div>
            <div>
                <button className={styles.loginButton} onClick={() => navigate('/registration')}>Create a new account</button>
            </div>
        </div>
    </div>
}

export default Authentication