var fs = require("fs");

fs.readFile(__dirname + "/dummyData.txt", "utf8", function (err, data) {
  if ( err ) { return false; }

  console.log( data );
});
