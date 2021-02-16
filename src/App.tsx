import React from 'reactn';
import style from './App.module.scss';
import { Controller, Info, LifeGame, SetPattern } from "./component";

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
