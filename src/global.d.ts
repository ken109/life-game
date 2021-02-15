import 'reactn';
import { Pattern } from "./pattern";

declare module 'reactn/default' {
    export interface State {
        active: boolean
        loop: boolean
        delay: number
        isSetting: boolean
        settingPattern?: Pattern
    }
}
