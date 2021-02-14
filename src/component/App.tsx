import React, { useState } from 'react';
import style from '../scss/App.module.scss';
import LifeGame from "./LifeGame";
import Controller from "./Controller";

const App = () => {
    const [active, setActive] = useState<boolean>(true)
    const [loop, setLoop] = useState<boolean>(true)

    const [stop, setStop] = useState<number>(0)

    const handleStop = () => {
        setStop(stop + 1)
        setActive(false)
    }

    return (
        <div className={style.app}>
            <LifeGame active={active} loop={loop} stop={stop}/>
            <Controller
                active={active}
                loop={loop}
                toggleActive={() => setActive(!active)}
                toggleLoop={() => setLoop(!loop)}
                stop={handleStop}
            />
        </div>
    );
}

export default App;
