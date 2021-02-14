import React, { useEffect, useGlobal } from "reactn";
import style from "../scss/LifeGame.module.scss"
import p5 from "p5";
import Logic from "./Logic";

export interface Props {
    active: boolean
    loop: boolean
}

const state: Props = {
    active: false,
    loop: false,
}

export let logic: Logic

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

const LifeGame: React.FC = () => {
    const [active] = useGlobal("active")
    const [loop] = useGlobal("loop")

    state.active = active
    state.loop = loop

    useEffect(() => {
        new p5(sketch)
    }, [])

    return (
        <div id="life-game" className={style.wrapper}/>
    );
};

export default LifeGame
