import { Rectangle } from "./Rectangle.js"

export class Square extends Rectangle {

    constructor(x,y,width) {
        super(x,y)
        this._width = width
    }

    draw(ctx) {
        ctx.beginPath()
        ctx.rect(this._x, this._y, this._width, this._width);
        ctx.stroke()
    }
}