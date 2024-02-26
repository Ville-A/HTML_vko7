import { Shape } from "./Shape.js"

export class Rectangle extends Shape {

    constructor(x,y,width,height) {
        super(x,y)
        this._width = width
        this._height = height
    }

    draw(ctx) {
        ctx.beginPath()
        ctx.rect(this._x, this._y, this._width, this._height);
        ctx.stroke()
    }
}