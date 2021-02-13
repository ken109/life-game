import React, { useEffect } from "react";
import style from "../scss/LifeGame.module.scss"
import p5 from "p5";

interface Props {
    active: boolean
}

let active = false

const sketch = (p: p5) => {
    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight).parent('life-game')
    }

    p.draw = () => {
        if (active) {
            if (p.mouseIsPressed) {
                p.fill(0);
            } else {
                p.fill(255);
            }
            p.point(p.mouseX, p.mouseY)
        }
    }
}

const LifeGame: React.FC<Props> = (props: Props) => {
    active = props.active

    useEffect(() => {
        new p5(sketch)
    }, [])

    return (
        <div id="life-game" className={style.wrapper}/>
    );
};

export default LifeGame
