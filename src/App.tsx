import React from 'reactn';
import style from './App.module.scss';
import { Controller, Info, LifeGame } from "./component";
import SetPattern from "./component/SetPattern";

const App: React.FC = () => {
    return (
        <div className={style.app}>
            <LifeGame/>
            <SetPattern/>
            <Info/>
            <Controller/>
        </div>
    );
}

export default App;
