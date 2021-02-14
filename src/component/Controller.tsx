import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faStop } from "@fortawesome/free-solid-svg-icons";
import style from "../scss/Controller.module.scss"

interface Props {
    active: boolean
    loop: boolean
    toggleActive: any
    toggleLoop: any
    stop: any
}

const Controller: React.FC<Props> = (props: Props) => {
    const loopStyle: React.CSSProperties = {textDecoration: props.loop ? "line-through" : "none"}

    return (
        <div className={style.wrapper}>
            <div className={style.controller}>
                {!props.active
                    ? (
                        <button onClick={props.toggleActive}>
                            <FontAwesomeIcon className={style.icon} icon={faPlay}/>
                        </button>
                    )
                    : (
                        <button onClick={props.toggleActive}>
                            <FontAwesomeIcon className={style.icon} icon={faPause}/>
                        </button>
                    )}
                <button onClick={props.stop}><FontAwesomeIcon className={style.icon} icon={faStop}/></button>
                <button onClick={props.toggleLoop}><span style={loopStyle}>Loop</span></button>
            </div>
        </div>
    );
}

export default Controller;
