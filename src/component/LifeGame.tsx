import React, { useEffect, useGlobal } from "reactn";
import { State } from "reactn/default";
import p5 from "p5";
import Logic from "./Logic";

export const state: State = {
    active: true,
    loop: true,
    delay: 100,
    isSetting: false,
    settingPattern: undefined
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
        if ((e.target as HTMLElement).tagName === 'CANVAS') logic.clicked()
    }

    p.mouseDragged = (e: MouseEvent) => {
        if ((e.target as HTMLElement).tagName === 'CANVAS') logic.dragged()
    }
}

const LifeGame: React.FC = () => {
    const [active] = useGlobal("active")
    const [loop] = useGlobal("loop")
    const [delay] = useGlobal("delay")
    const [isSetting] = useGlobal("isSetting")
    const [settingPattern] = useGlobal("settingPattern")

    state.active = active
    state.loop = loop
    state.delay = delay
    state.isSetting = isSetting
    state.settingPattern = settingPattern

    useEffect(() => {
        new p5(sketch)
    }, [])

    return (
        <div id="life-game"/>
    );
};

export default LifeGame
