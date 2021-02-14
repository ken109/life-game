import React, { useCallback, useEffect, useGlobal, useState } from 'reactn';
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

    const handleChangeDelay = useCallback((change: number) => {
        if (0 <= delay + change && delay + change <= delays.length - 1) {
            setDelay(delay + change)
            logic.changeDelay(delays[delay + change])
        }
    }, [delay])

    const handleKeyDown = useCallback(({key}) => {
        if (key === ' ') setActive(!active).then()
        if (key === 'ArrowUp') handleChangeDelay(1)
        if (key === 'ArrowDown') handleChangeDelay(-1)
        if (key === 'l') setLoop(!loop).then()
    }, [active, handleChangeDelay, loop, setActive, setLoop])

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [handleKeyDown])

    const loopStyle: React.CSSProperties = {textDecoration: loop ? "line-through" : "none"}

    return (
        <div className={style.wrapper}>
            <div className={`${style.controller} ui`}>
                {!active
                    ? (
                        <button onClick={() => setActive(true)}>
                            <FontAwesomeIcon className={style.icon} icon={faPlay}/>
                        </button>
                    )
                    : (
                        <button onClick={() => setActive(false)}>
                            <FontAwesomeIcon className={style.icon} icon={faPause}/>
                        </button>
                    )}
                <button onClick={handleStop}><FontAwesomeIcon className={style.icon} icon={faStop}/></button>

                <button onClick={() => logic.init(true)}>
                    <FontAwesomeIcon className={style.icon} icon={faRandom}/>
                </button>

                <button onClick={() => handleChangeDelay(1)} disabled={delay >= delays.length - 1}>
                    <FontAwesomeIcon className={style.icon} icon={faArrowUp}/>
                </button>
                <button onClick={() => handleChangeDelay(-1)} disabled={delay <= 0}>
                    <FontAwesomeIcon className={style.icon} icon={faArrowDown}/>
                </button>

                <button onClick={() => setLoop(!loop)}><span style={loopStyle}>Loop</span></button>
            </div>
        </div>
    );
}

export default Controller;
