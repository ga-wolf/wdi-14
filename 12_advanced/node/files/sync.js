var fs = require('fs');

var data = fs.readFileSync(__dirname + "/dummyData.txt", "utf8");
console.log( data );
