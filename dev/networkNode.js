const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid');
const nodeAddress = uuidv4().split('-').join('');
const port = process.argv[2];
var bodyParser = require('body-parser');
const blockchain = require('./Blockchain');

const bitcoin = new blockchain()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//
app.post('/transaction', (req, res) => {
  const blockIndex = bitcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient);
  res.json({note:`Transcation will be added in block ${blockIndex}.`});
});

//mine a block
app.get('/mine', (req, res) => {
  const lastBlock = bitcoin.getLastBlock();
  const previousBlockHash = lastBlock['hash'];
  const currentBlockData = {
    transactions: bitcoin.pendingTransactions,
    index:lastBlock['index'] + 1
  }
  const nonce= bitcoin.proofOfWork(previousBlockHash,currentBlockData);
  const blockHash = bitcoin.hashBlock(previousBlockHash,currentBlockData,nonce);

  bitcoin.createNewTransaction(12.5,"00",nodeAddress);
  const newBlock = bitcoin.createNewBlock(nonce,previousBlockHash,blockHash);
  res.json({
    note:"New block mined successfully",
    block:newBlock
  });
});
app.get('/blockchain', (req, res) => {
  res.send(bitcoin);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});