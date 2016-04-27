var age = 25
var maxAge = 110
var amount = 3

var yearlyAmount = amount * 365.2425
var numYears = maxAge - age

var totalAmount = numYears * yearlyAmount

// "You will need NN to last you until the ripe old age of X".

var message = "You will need " + totalAmount + " to last you until the ripe old age of " + maxAge

console.log(message)
