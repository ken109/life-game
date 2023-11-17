"use client"

import {Pattern} from "@/domain/pattern";
import {atom} from "recoil";

export interface State {
    active: boolean
    loop: boolean
    delay: number
    isSetting: boolean
    settingPattern: Pattern | null
}

export const defaultState = {
    active: true,
    loop: true,
    delay: 100,
    isSetting: false,
    settingPattern: null,
}

export const activeState = atom<boolean>({
    key: "active",
    default: defaultState.active
})

export const loopState = atom<boolean>({
    key: "loop",
    default: defaultState.loop
})

export const delayState = atom<number>({
    key: "delay",
    default: defaultState.delay
})

export const isSettingState = atom<boolean>({
    key: "isSetting",
    default: defaultState.isSetting
})

export const settingPatternState = atom<Pattern | null>({
    key: "settingPattern",
    default: defaultState.settingPattern
})
