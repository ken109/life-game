import React from 'reactn';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import style from '../scss/Info.module.scss';

const Info = () => {
    return (
        <div className={style.wrapper}>
            <div className={`${style.info} ui`}>
                <FontAwesomeIcon icon={faInfo}/>
                <p>クリックすると生と死を切り替えれます</p>
            </div>
        </div>
    );
}

export default Info;
