var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/mars', function (req, res) {
  res.send('Hello Mars!\n');
});

app.get('/zaid', function (req, res) {
  res.send('Hello Do you know my name\n My name is Zaid Alshanyour \n do you know my school name \n My school is sinat-Genvieve\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

