var express = require('express');
var bodyParser = require('body-parser')
var app = express();
app.use(bodyParser.json())
app.use(express.urlencoded())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
app.post('/submit-form', function (req, res) {
  const username = req.body.name;
  const description = req.body.description;
  const country = req.body.country;

  res.status(200).json({name: username });
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});