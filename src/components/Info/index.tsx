"use client"

import {faInfo} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import globalStyles from "@/styles/global.module.scss"
import styles from './index.module.scss';

const Info: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={`${globalStyles.ui} ${styles.info}`}>
                <FontAwesomeIcon icon={faInfo}/>
                <p>
                    ・クリックすると生と死を切り替えれます<br/>
                    <br/>
                    ・ドラッグで生に変えられます
                </p>
            </div>
        </div>
    );
}

export default Info;
