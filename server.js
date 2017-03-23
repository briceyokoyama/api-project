var express = require('express');
var app = express()

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

app.get('/:id', function (req, res) {
  if (req.params.id.match(/[a-zA-Z]/)) {
    var date = new Date(req.params.id)
  } else {
    var date = new Date(req.params.id*1000);
  }
  var unix = date.getTime()/1000;
  var natural = months[date.getMonth()] + ' ' + date.getDate().toString() + ', ' + date.getFullYear().toString();
  var obj = {
    unix: unix,
    natural: natural
  };
    
    res.send(obj);

});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
})