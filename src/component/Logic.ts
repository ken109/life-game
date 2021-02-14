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

        setInterval(() => {
            this.next()
        }, 100)
    }

    // event
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

    // logic
    next() {
        let next = this.cells.map(v => v.slice())
        this.each((r: number, c: number) => {
            const around = this.around(r, c)
            if (around === 3) {
                next[r][c] = true
            } else if (around <= 1 || around >= 4) {
                next[r][c] = false
            }
        })
        this.cells = next
    }

    around(r: number, c: number): number {
        let count = 0
        for (let i of [-1, 0, 1]) {
            for (let j of [-1, 0, 1]) {
                if (!(i === 0 && j === 0)) {
                    let _r: number = r + i, _c: number = c + j
                    if (this.state.loop) {
                        _r = _r === -1 ? this.cells.length - 1 : _r === this.cells.length ? 0 : _r
                        _c = _c === -1 ? this.cells[0].length - 1 : _c === this.cells[0].length ? 0 : _c
                        count += this.cells[_r][_c] ? 1 : 0
                    } else {
                        if (0 <= _r && _r < this.cells.length
                            && 0 <= _c && _c < this.cells[0].length) {
                            count += this.cells[_r][_c] ? 1 : 0
                        }
                    }
                }
            }
        }
        return count
    }

    // util
    each(fn: (r: number, c: number) => void) {
        for (let r = 0; r < this.cells.length; r++) {
            for (let c = 0; c < this.cells[0].length; c++) {
                fn(r, c)
            }
        }
    }
}

export default Logic
