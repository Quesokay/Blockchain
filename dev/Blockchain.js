const sha256 = require('sha256');
const { v4: uuidv4 } = require('uuid');
const currentNodeUrl = process.argv[3];
function BlockChain(){
    this.chain = [];
    this.pendingTransactions = [];
    this.currentNodeUrl = currentNodeUrl;
    this.networkNodes = [];
    this.createNewBlock(100,'0','0');
}

BlockChain.prototype.createNewBlock = function(nonce,previousBlockHash,hash){
    const newBlock = {
        index:this.chain.length + 1,
        timeStamp:Date.now(),
        transactions:this.pendingTransactions,
        nonce:nonce,
        hash:hash,
        previousBlockHash: previousBlockHash
    };
    this.pendingTransactions = [];
    this.chain.push(newBlock);

    return newBlock;
}

BlockChain.prototype.getLastBlock = function(){
    return this.chain[this.chain.length - 1];
}

BlockChain.prototype.createNewTransaction = function(amount,sender,recipient){
    const newTransaction = {
        amount:amount,
        sender:sender,
        recipient:recipient,
        transactionId: uuidv4().split('-').join('')
    };

   return newTransaction;
}

BlockChain.prototype.addTransactionToPendingTransactions = function(transactionObj){
    this.pendingTransactions.push(transactionObj);
    return this.getLastBlock()['index'] + 1;
}

BlockChain.prototype.hashBlock = function(previousBlockHash,currentBlockData,nonce){
    const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
    const hash = sha256(dataAsString);
    return hash;
}

BlockChain.prototype.proofOfWork = function(previousBlockHash, currentBlockData){
    let nonce = 0;
    let hash = this.hashBlock(previousBlockHash,currentBlockData,nonce);
    while(hash.substring(0,4)!== '0000'){
        nonce++;
        hash = this.hashBlock(previousBlockHash,currentBlockData,nonce);
    }
    return nonce;
}

BlockChain.prototype.chainIsValid = function(blockchain){
    let validChain = true;
    for(var i = 1; i < blockchain.length; i++){
        const currentBlock = blockchain[i];
        const previousBlock = blockchain[i - 1];
        const blockHash = this.hashBlock(previousBlock['hash'],{transactions:currentBlock['transactions'],index:currentBlock['index']},currentBlock['nonce']);
        if(blockHash.substring(0,4) !== '0000') validChain = false;
        if(currentBlock['previousBlockHash'] !== previousBlock['hash']) validChain = false;
        console.log('previousBlockHash =>',previousBlock['hash']);
        console.log('currentBlock =>',currentBlock['hash']);
    }

    const genesisBlock = blockchain[0];
    const correctNonce = genesisBlock['nonce'] === 100;
    const correctPreviousBlockHash = genesisBlock['previousBlockHash'] === '0';
    const correctHash = genesisBlock['hash'] === '0';
    const correctTransactions = genesisBlock['transactions'].length === 0;

    if(!correctNonce || !correctPreviousBlockHash || !correctHash || !correctTransactions) validChain = false;

    return validChain;
}






































module.exports = BlockChain;