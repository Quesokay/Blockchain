const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(bodyParser.json)
app.use(bodyParser.urlencoded({extended: false}))

app.get('/blockchain', (req, res) => {
});

app.post('/transaction', function(req,res){
  console.log(req.body)
  res.send(`The amount of the transaction is ${req.body.amount} bitcoin`);
});

app.get('/mine',function(req,res){

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})