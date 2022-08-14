import React from "react";
import {useNavigate, useParams} from "react-router-dom";
import styles from './Profile.module.css'
import com from '../../commonStyles.module.css'
import UserInfoItem from "./UserInfoItem/UserInfoItem";


const Profile = (props) => {
    let {userId} = useParams()
    let navigate = useNavigate()

    let userInfo = props.users.find(u => u.userId === Number(userId))

    const logOut = () => {
        navigate('/')
        props.setAuthUserId(false)
    }


    return <>
        {!props.userAuth
            ? <div className={styles.profileBlock}>
                <h1>You are not authorized...</h1>
                <div className={styles.logOutBtn}>
                    <button onClick={() => navigate('/login')} className={com.loginButton} >Login page</button>
                </div>
            </div>
            : <div className={styles.profileBlock}>
                <div className={styles.profileContainer}>

                    <div className={styles.profileImg}>
                        <div className={styles.uploadPhoto}><span>Upload new photo</span></div>
                        <img className={styles.userPhoto}
                             src={userInfo.ava
                                 ? userInfo.ava
                                 : 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'} alt=""/>
                    </div>

                    <div className={styles.profileInfo}>
                        <h1 className={styles.profileInfoTitle}>{userInfo.firstname} {userInfo.lastname}</h1>
                        <div className={styles.profileInfoContent}>
                            <UserInfoItem itemLabel='Email' content={userInfo.email}/>
                            <UserInfoItem itemLabel='Gender' content={userInfo.gender}/>
                            <UserInfoItem itemLabel='Birth' content={userInfo.birthDate}/>
                        </div>
                    </div>

                </div>

                <div className={styles.logOutBtn}>
                    <button className={com.loginButton} onClick={logOut}>Log out</button>
                </div>
            </div>
        }
    </>
}

export default Profile