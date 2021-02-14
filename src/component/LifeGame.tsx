import React, { useEffect } from "react";
import style from "../scss/LifeGame.module.scss"
import p5 from "p5";
import Logic from "./Logic";

export interface Props {
    active: boolean
    loop: boolean
    stop: number
}

const state: Props = {
    active: false,
    loop: false,
    stop: 0
}

let logic: Logic

const sketch = (p: p5) => {
    logic = new Logic(p, state)

    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight).parent('life-game')
    }

    p.draw = () => {
        logic.tick()
    }

    p.mouseClicked = (e: MouseEvent) => {
        if ((e.target as HTMLElement).tagName === 'CANVAS') {
            logic.clicked()
        }
    }
}

const LifeGame: React.FC<Props> = (props: Props) => {
    state.active = props.active
    state.loop = props.loop

    useEffect(() => {
        new p5(sketch)
    }, [])

    useEffect(() => {
        if (props.stop > 0) {
            logic.init()
        }
    }, [props.stop])

    return (
        <div id="life-game" className={style.wrapper}/>
    );
};

export default LifeGame
