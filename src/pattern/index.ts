import { Glider, HeavyWeightSpaceship, LightWeightSpaceship, MiddleWeightSpaceship } from "./spaceships";

export interface Pattern {
    name: string
    body: boolean[][]
}

export interface PatternGroup {
    name: string
    patterns: Pattern[]
}

const PatternGroups: PatternGroup[] = [
    {
        name: '移動物体',
        patterns: [Glider, LightWeightSpaceship, MiddleWeightSpaceship, HeavyWeightSpaceship]
    }
]

export default PatternGroups

