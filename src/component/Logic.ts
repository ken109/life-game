import p5 from "p5";
import { Props } from "./LifeGame";

class Logic {
    private p: p5

    private state: Props

    constructor(p: p5, state: Props) {
        this.p = p

        this.state = state
    }

    tick() {
        if (this.state.active) {
            if (this.p.mouseIsPressed) {
                this.p.fill(0);
            } else {
                this.p.fill(255);
            }
            this.p.point(this.p.mouseX, this.p.mouseY)
        }
    }
}

export default Logic
