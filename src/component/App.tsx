import React from 'reactn';
import style from '../scss/App.module.scss';
import LifeGame from "./LifeGame";
import Controller from "./Controller";

const App = () => {
    return (
        <div className={style.app}>
            <LifeGame/>
            <Controller/>
        </div>
    );
}

export default App;
