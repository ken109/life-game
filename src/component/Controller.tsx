import React from 'react';
import style from "../scss/Controller.module.scss"

interface Props {
    onStart: any
    onStop: any
}

const Controller: React.FC<Props> = (props: Props) => {
    return (
        <div className={style.wrapper}>
            <div className={style.controller}>
                <button onClick={props.onStart}>Start</button>
                <button onClick={props.onStop}>Stop</button>
            </div>
        </div>
    );
}

export default Controller;
