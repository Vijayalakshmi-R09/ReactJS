var Format = require('dateformat');
let format_Pastdate=Format(new Date('10 June 2021 09:50:10 UTC'), "yyyy-mm-dd hh:MM:ss");
console.log("Past date formatted as required" +format_Pastdate.toString());