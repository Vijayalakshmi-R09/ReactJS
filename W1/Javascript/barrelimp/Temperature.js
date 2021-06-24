export default class Temperature
{
celsiusToFahrenheit(celsius) 
{
  let Temp = celsius;
  let convertctf = Temp * 9 / 5 + 32;
  console.log(Temp+'\xB0C is ' + convertctf + ' \xB0F.');
}

fahrenheitToCelsius(fahrenheit) 
{
  let Temp = fahrenheit;
  let convertftc = (Temp - 32) * 5 / 9;
  console.log(Temp+'\xB0F is ' + convertftc + '\xB0C.');
} 
}