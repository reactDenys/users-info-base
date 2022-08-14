import React from "react";
import styles from "./UserInfoItem.module.css";

const UserInfoItem = ({itemLabel, content}) => {
    return <>
        {content && <div className={styles.item}>
            {itemLabel}: <span>{content}</span>
        </div>}
    </>
}

export default UserInfoItem