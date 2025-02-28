const express = require('express');
const app = express();
const port = 3000;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', (req, res) => {
  res.send('Hello World!')
});
app.post('/transaction', (req, res) => {
  console.log(req.body)
  res.send(`The amount of the transaction is ${req.body.amount} bitcoin`);
});

app.get('/mine', (req, res) => {

});
app.get('/blockchain', (req, res) => {
  res.send(bitcoin);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});