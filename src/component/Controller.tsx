import React, { useGlobal, useState } from 'reactn';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp, faPause, faPlay, faRandom, faStop } from "@fortawesome/free-solid-svg-icons";
import style from "../scss/Controller.module.scss"
import { logic } from "./LifeGame";

const delays = [400, 200, 100, 50, 20]

const Controller: React.FC = () => {
    const [active, setActive] = useGlobal("active")
    const [loop, setLoop] = useGlobal("loop")

    const [delay, setDelay] = useState(2)

    const handleStop = async () => {
        await setActive(false)
        logic.init()
    }

    const handleChangeDelay = (change: number) => {
        setDelay(delay + change)
        logic.changeDelay(delays[delay + change])
    }

    const loopStyle: React.CSSProperties = {textDecoration: loop ? "line-through" : "none"}

    return (
        <div className={style.wrapper}>
            <div className={style.controller}>
                {!active
                    ? (
                        <button onClick={() => setActive(!active)}>
                            <FontAwesomeIcon className={style.icon} icon={faPlay}/>
                        </button>
                    )
                    : (
                        <button onClick={() => setActive(!active)}>
                            <FontAwesomeIcon className={style.icon} icon={faPause}/>
                        </button>
                    )}
                <button onClick={handleStop}><FontAwesomeIcon className={style.icon} icon={faStop}/></button>

                <button onClick={() => logic.init(true)}>
                    <FontAwesomeIcon className={style.icon} icon={faRandom}/>
                </button>

                <button onClick={() => handleChangeDelay(1)} disabled={delay === delays.length - 1}>
                    <FontAwesomeIcon className={style.icon} icon={faArrowUp}/>
                </button>
                <button onClick={() => handleChangeDelay(-1)} disabled={delay === 0}>
                    <FontAwesomeIcon className={style.icon} icon={faArrowDown}/>
                </button>

                <button onClick={() => setLoop(!loop)}><span style={loopStyle}>Loop</span></button>
            </div>
        </div>
    );
}

export default Controller;
