import React, { useEffect } from "react";
import style from "../scss/LifeGame.module.scss"
import p5 from "p5";
import Logic from "./Logic";

export interface Props {
    active: boolean
}

const state: Props = {
    active: false
}

const sketch = (p: p5) => {
    const logic = new Logic(p, state)

    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight).parent('life-game')
    }

    p.draw = () => {
        logic.tick()
    }
}

const LifeGame: React.FC<Props> = (props: Props) => {
    state.active = props.active

    useEffect(() => {
        new p5(sketch)
    }, [])

    return (
        <div id="life-game" className={style.wrapper}/>
    );
};

export default LifeGame
