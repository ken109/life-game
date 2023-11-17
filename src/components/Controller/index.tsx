"use client"

import {activeState, loopState} from "@/states";
import {
    faArrowDown,
    faArrowUp,
    faPause,
    faPlay,
    faRandom,
    faStepForward,
    faStop
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useCallback, useEffect, useState} from 'react';
import {useRecoilState} from "recoil";
import {logic} from "../LifeGame";
import globalStyles from "@/styles/global.module.scss"
import styles from "./index.module.scss"

const delays = [400, 200, 100, 50, 20]

const Controller: React.FC = () => {
    const [active, setActive] = useRecoilState(activeState)
    const [loop, setLoop] = useRecoilState(loopState)

    const [delay, setDelay] = useState(2)

    const handleStop = () => {
        setActive(false)
        logic.init()
    }

    const handleChangeDelay = useCallback((change: number) => {
        if (0 <= delay + change && delay + change <= delays.length - 1) {
            setDelay(delay + change)
            logic.changeDelay(delays[delay + change])
        }
    }, [delay])

    const handleKeyDown = useCallback(({key}: KeyboardEvent) => {
        if (key === ' ') setActive(!active)
        if (key === 'ArrowRight') logic.next()
        if (key === 'ArrowUp') handleChangeDelay(1)
        if (key === 'ArrowDown') handleChangeDelay(-1)
        if (key === 'l') setLoop(!loop)
    }, [active, handleChangeDelay, loop, setActive, setLoop])

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [handleKeyDown])

    const loopStyle: React.CSSProperties = {textDecoration: loop ? "line-through" : "none"}

    return (
        <div className={styles.wrapper}>
            <div className={`${globalStyles.ui} ${styles.controller}`}>
                {!active
                    ? (
                        <button onClick={() => setActive(true)}>
                            <FontAwesomeIcon className={styles.icon} icon={faPlay}/>
                        </button>
                    )
                    : (
                        <button onClick={() => setActive(false)}>
                            <FontAwesomeIcon className={styles.icon} icon={faPause}/>
                        </button>
                    )}
                <button onClick={handleStop}><FontAwesomeIcon className={styles.icon} icon={faStop}/></button>

                <button onClick={() => logic.next()}>
                    <FontAwesomeIcon className={styles.icon} icon={faStepForward}/>
                </button>

                <button onClick={() => logic.init(true)}>
                    <FontAwesomeIcon className={styles.icon} icon={faRandom}/>
                </button>

                <button onClick={() => handleChangeDelay(1)} disabled={delay >= delays.length - 1}>
                    <FontAwesomeIcon className={styles.icon} icon={faArrowUp}/>
                </button>
                <button onClick={() => handleChangeDelay(-1)} disabled={delay <= 0}>
                    <FontAwesomeIcon className={styles.icon} icon={faArrowDown}/>
                </button>

                <button onClick={() => setLoop(!loop)}><span style={loopStyle}>Loop</span></button>
            </div>
        </div>
    );
}

export default Controller;
