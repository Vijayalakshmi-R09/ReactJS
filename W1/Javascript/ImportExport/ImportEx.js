import { areaSquare,areaRect} from "./NamedExpo.js";
import Perim  from './DefaultExpo.js'
//while importing default class we can give any name to class...

console.log("Area of SQUARE: "+areaSquare(6));
console.log("Area of RECTANGLE: "+areaRect(5,10));
let p=new Perim(5,4);
p.perimeterSquare();
p.perimeterRectangle();

