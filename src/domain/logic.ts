"use client"

import {State} from "@/states";
import p5 from "p5";

class Logic {
    private initialized = false

    private p5?: p5

    private state?: State

    private cellSize: number = 20
    private cells: boolean[][] = []

    private interval?: NodeJS.Timeout

    public finishSetting?: () => void

    init(random?: boolean) {
        if (!this.p5) return

        this.cells = []
        for (let r = 0; r * this.cellSize < this.p5.windowHeight; r++) {
            this.cells.push([])
            for (let c = 0; c * this.cellSize < this.p5.windowWidth; c++)
                this.cells[r].push(random ? Math.random() < 0.5 : false)
        }
    }

    setP5(p5: p5) {
        this.p5 = p5

        if (!this.initialized) {
            this.init(true)
            this.initialized = true
        }
    }

    setState(state: State) {
        if (!this.state) {
            this.state = state
            this.changeDelay(state.delay)
        }
    }

    // event
    tick() {
        if (!this.p5 || !this.state) return

        this.p5.background(10)
        this.p5.fill(255)
        this.draw()
        if (this.state.isSetting) this.preview()
    }

    clicked() {
        if (!this.state) return

        if (this.state.isSetting && this.finishSetting !== undefined) {
            this.eachPreview((r: number, c: number) => {
                this.cells[r][c] = true
            })
            this.finishSetting()
        } else {
            const [r, c] = this.getCell()
            this.cells[r][c] = !this.cells[r][c]
        }
    }

    dragged() {
        const [r, c] = this.getCell()
        this.cells[r][c] = true
    }

    changeDelay(ms: number) {
        if (this.interval) clearInterval(this.interval)
        this.interval = setInterval(() => {
            if (!this.state) return

            if (this.state.active) this.next()
        }, ms)
    }

    // logic
    next() {
        let next = this.cells.map(v => v.slice())
        this.each((r: number, c: number) => {
            const around = this.around(r, c)
            if (around === 3) next[r][c] = true
            else if (around <= 1 || around >= 4) next[r][c] = false
        })
        this.cells = next
    }

    private around(r: number, c: number): number {
        if (!this.state) return 0

        let count = 0
        for (let i of [-1, 0, 1]) {
            for (let j of [-1, 0, 1]) {
                if (!(i === 0 && j === 0)) {
                    let _r = r + i, _c = c + j
                    if (this.state.loop) {
                        _r = _r === -1 ? this.cells.length - 1 : _r === this.cells.length ? 0 : _r
                        _c = _c === -1 ? this.cells[0].length - 1 : _c === this.cells[0].length ? 0 : _c
                        count += this.cells[_r][_c] ? 1 : 0
                    } else {
                        if (0 <= _r && _r < this.cells.length && 0 <= _c && _c < this.cells[0].length)
                            count += this.cells[_r][_c] ? 1 : 0
                    }
                }
            }
        }
        return count
    }

    private draw() {
        this.each((r: number, c: number) => {
            if (!this.p5) return

            if (this.cells[r][c]) {
                this.p5.square(c * this.cellSize + 1, r * this.cellSize + 1, this.cellSize - 2)
            }
        })
    }

    private preview() {
        this.eachPreview((r: number, c: number) => {
            if (!this.p5) return

            this.p5.square(c * this.cellSize + 1, r * this.cellSize + 1, this.cellSize - 2)
        })
    }

    // util
    private getCell(): [number, number] {
        if (!this.p5) return [0, 0]

        const r = Math.floor(this.p5.mouseY / this.cellSize)
        const c = Math.floor(this.p5.mouseX / this.cellSize)
        return [r, c]
    }

    private each(fn: (r: number, c: number) => void) {
        for (let r = 0; r < this.cells.length; r++) {
            for (let c = 0; c < this.cells[0].length; c++)
                fn(r, c)
        }
    }

    private eachPreview(fn: (r: number, c: number) => void) {
        if (!this.p5 || !this.state) return

        if (this.state.settingPattern) {
            const [r, c] = this.getCell()
            const mr = Math.floor(this.state.settingPattern.body.length / 2)
            const mc = Math.floor(this.state.settingPattern.body[0].length / 2)
            this.p5.fill(255, 0, 0)
            for (let pr = 0; pr < this.state.settingPattern.body.length; pr++) {
                for (let pc = 0; pc < this.state.settingPattern.body[0].length; pc++)
                    if (this.state.settingPattern.body[pr][pc]) fn(r + pr - mr, c + pc - mc)
            }
        }
    }
}

export default Logic
