"use client"

import Logic from "@/domain/logic";
import {activeState, defaultState, delayState, isSettingState, loopState, settingPatternState, State} from "@/states";
import {NextReactP5Wrapper} from "@p5-wrapper/next";
import p5 from "p5";
import React, {useRef} from "react";
import {useRecoilValue} from "recoil";

export let logic: Logic = new Logic()

const sketch = (state: State) => (p5: p5) => {
    logic.setP5(p5)
    logic.setState(state)

    p5.setup = () => p5.createCanvas(p5.windowWidth, p5.windowHeight)

    p5.draw = () => logic.tick()

    p5.mouseClicked = (e: MouseEvent) => {
        if ((e.target as HTMLElement).tagName === 'CANVAS') logic.clicked()
    }

    p5.mouseDragged = (e: MouseEvent) => {
        if ((e.target as HTMLElement).tagName === 'CANVAS') logic.dragged()
    }
}


const LifeGame: React.FC = () => {
    const state = useRef<State>(defaultState)

    state.current.active = useRecoilValue(activeState)
    state.current.loop = useRecoilValue(loopState)
    state.current.delay = useRecoilValue(delayState)
    state.current.isSetting = useRecoilValue(isSettingState)
    state.current.settingPattern = useRecoilValue(settingPatternState)

    return (
        <NextReactP5Wrapper sketch={sketch(state.current)}/>
    );
};

export default LifeGame
