import React, { useState } from 'react';
import style from '../scss/App.module.scss';
import LifeGame from "./LifeGame";
import Controller from "./Controller";

const App = () => {
    const [active, setActive] = useState<boolean>(false)

    return (
        <div className={style.app}>
            <LifeGame active={active}/>
            <Controller
                onStart={() => setActive(true)}
                onStop={() => setActive(false)}
            />
        </div>
    );
}

export default App;
