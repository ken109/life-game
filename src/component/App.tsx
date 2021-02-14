import React, { useState } from 'react';
import style from '../scss/App.module.scss';
import LifeGame from "./LifeGame";
import Controller from "./Controller";

const App = () => {
    const [active, setActive] = useState<boolean>(true)
    const [loop, setLoop] = useState<boolean>(true)

    return (
        <div className={style.app}>
            <LifeGame active={active} loop={loop}/>
            <Controller
                active={active}
                loop={loop}
                toggleActive={() => setActive(!active)}
                toggleLoop={() => setLoop(!loop)}
            />
        </div>
    );
}

export default App;
