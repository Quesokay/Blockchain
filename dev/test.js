const BlockChain = require('./Blockchain');
const bitcoin = new BlockChain();
//testing genesis block
console.log(bitcoin);
// bitcoin.createNewBlock(2389,'OINA90SDNF90N','90ANSD9F0N9009N');
// bitcoin.createNewTransaction(100,'QUESD89F9W0N90A','NYAN0FDHGSH8');
// bitcoin.createNewBlock(5422,'OINA90SDNF90N','90ANSD9F0N9009N');
// bitcoin.createNewTransaction(50,'QUESD89F9W0N90A','NYAN0FDHGSH8');
// bitcoin.createNewTransaction(300,'QUESD89F9W0N90A','NYAN0FDHGSH8');
// bitcoin.createNewTransaction(2000,'QUESD89F9W0N90A','NYAN0FDHGSH8');
// bitcoin.createNewBlock(4546,'OINA90SDNF90N','90ANSD9F0N9009N');
const previousBlockHash = 'FDWDV453HSDH343JHJB';
const currentBlockData = [
        {
            amount:10,
            sender:'N90JSHFND',
            recipient:'MNMD45JDHD'
        },
        {
            amount:0.5,
            sender:'NERRG90JSHFND',
            recipient:'HGS77GG'
        },
        {
            amount:20,
            sender:'RTFN90JSHDSFND',
            recipient:'MhRTGGH384hdh'
        },
];
 const nonce = 100;
//console.log(bitcoin.hashBlock(previousBlockHash,currentBlockData,nonce));
//testing proofOfWork function.
// console.log(bitcoin.proofOfWork(previousBlockHash,currentBlockData));
//console.log(bitcoin.hashBlock(previousBlockHash,currentBlockData,27470));
console.log(bitcoin);