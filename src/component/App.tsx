import React from 'reactn';
import style from '../scss/App.module.scss';
import LifeGame from "./LifeGame";
import Controller from "./Controller";
import Info from "./Info";

const App = () => {
    return (
        <div className={style.app}>
            <LifeGame/>
            <Info/>
            <Controller/>
        </div>
    );
}

export default App;
