import { Pattern } from "./index";

export const Glider: Pattern = {
    name: 'グライダー',
    body: [
        [true, true, true],
        [true, false, false],
        [false, true, false],
    ]
}

export const LightWeightSpaceship: Pattern = {
    name: '軽量級宇宙船',
    body: [
        [false, true, false, false, true],
        [true, false, false, false, false],
        [true, false, false, false, true],
        [true, true, true, true, false],
    ]
}
export const MiddleWeightSpaceship: Pattern = {
    name: '中量級宇宙船',
    body: [
        [false, false, false, true, false, false],
        [false, true, false, false, false, true],
        [true, false, false, false, false, false],
        [true, false, false, false, false, true],
        [true, true, true, true, true, false],
    ]
}

export const HeavyWeightSpaceship: Pattern = {
    name: '重量級宇宙船',
    body: [
        [false, false, false, true, true, false, false],
        [false, true, false, false, false, false, true],
        [true, false, false, false, false, false, false],
        [true, false, false, false, false, false, true],
        [true, true, true, true, true, true, false],
    ]
}
