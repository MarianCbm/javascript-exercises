const convertToCelsius = function(fahrenheitTemp) {
  if(typeof(fahrenheitTemp)=="number"){
    finalTemp=(fahrenheitTemp-32)/1.8;
    finalTemp=Math.round(finalTemp*10)/10;
    return finalTemp;
  }
  else {
    return "ERROR"
  }
};

const convertToFahrenheit = function(celsiusTemp) {
  if(typeof(celsiusTemp=="number")){
    finalTemp= celsiusTemp*1.8 +32;
    finalTemp=Math.round(finalTemp*10)/10;
    return finalTemp;
  }
  else {
    return "ERROR"
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
