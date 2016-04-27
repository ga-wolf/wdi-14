var temp = 22
var fahrenheitTemp = temp * 1.8 + 32

// "NN°C is NN°F".
console.log(temp + " C is " + fahrenheitTemp + " F")

// "NN°F is NN°C."

var tempCalculated = Math.round((fahrenheitTemp - 32) / 1.8)
console.log(fahrenheitTemp + " F is " + tempCalculated + " C.")
