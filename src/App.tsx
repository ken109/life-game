import React from 'reactn';
import style from './App.module.scss';
import LifeGame from "./component/LifeGame";
import Controller from "./component/Controller";
import Info from "./component/Info";

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
