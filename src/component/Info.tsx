import React from 'reactn';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import style from '../style/Info.module.scss';

const Info: React.FC = () => {
    return (
        <div className={style.wrapper}>
            <div className={`${style.info} ui`}>
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
