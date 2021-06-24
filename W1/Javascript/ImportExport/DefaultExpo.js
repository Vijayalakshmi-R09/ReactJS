export default class Perimeter{
    constructor(x,y)
    {
        this.s=x;
        this.s1=y;
    }
    perimeterSquare()
    {
        console.log("Perimeter of Square: "+this.s*this.s)
        return this.s*this.s;
    }
    perimeterRectangle()
    {
        console.log("Perimeter of Rectangle: "+this.s1*this.s)
        return this.s1*this.s;
    }
}