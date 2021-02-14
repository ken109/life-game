import p5 from "p5";
import { Props } from "./LifeGame";

class Logic {
    private p: p5

    private state: Props

    private cellSize: number = 20
    private cells: boolean[][] = []

    constructor(p: p5, state: Props) {
        this.p = p

        this.state = state

        for (let r = 0; r * this.cellSize < p.windowHeight; r++) {
            this.cells.push([])
            for (let c = 0; c * this.cellSize < p.windowWidth; c++) {
                this.cells[r].push(Math.random() < 0.5)
            }
        }
    }

    tick() {
        this.p.background(0)

        this.each((r: number, c: number) => {
            if (this.cells[r][c]) {
                this.p.square(c * this.cellSize + 1, r * this.cellSize + 1, this.cellSize - 2)
            }
        })
    }

    clicked() {
        const r = Math.floor(this.p.mouseY / this.cellSize)
        const c = Math.floor(this.p.mouseX / this.cellSize)
        this.cells[r][c] = !this.cells[r][c]
    }

    each(fn: (r: number, c: number) => void) {
        for (let r = 0; r < this.cells.length; r++) {
            for (let c = 0; c < this.cells[r].length; c++) {
                fn(r, c)
            }
        }
    }
}

export default Logic
