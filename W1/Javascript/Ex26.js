import {upperCase,checkPrime,temp} from './barrelimp/importfile.js';

console.log("Barrel function...\n");
console.log("Convert to CAPS(first letter:")
console.log("Converted string (first letters as caps): "+upperCase("i am invincible"));
console.log("\n Prime number or not...")
console.log("IsPrime: "+checkPrime(37));
let t=new temp();
console.log("\n Temperature Convertion:")
t.celsiusToFahrenheit(40);
t.fahrenheitToCelsius(101);