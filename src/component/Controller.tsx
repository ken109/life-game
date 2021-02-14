import React, { useGlobal } from 'reactn';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faStop } from "@fortawesome/free-solid-svg-icons";
import style from "../scss/Controller.module.scss"
import { logic } from "./LifeGame";

const Controller: React.FC = () => {
    const [active, setActive] = useGlobal("active")
    const [loop, setLoop] = useGlobal("loop")

    const handleStop = async () => {
        await setActive(false)
        logic.init()
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
                <button onClick={() => setLoop(!loop)}><span style={loopStyle}>Loop</span></button>
            </div>
        </div>
    );
}

export default Controller;
