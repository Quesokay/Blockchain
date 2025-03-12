const BlockChain = require('./Blockchain');
const bitcoin = new BlockChain();
const bc1 = 
{
    "chain": [
      {
        "index": 1,
        "timeStamp": 1741804658617,
        "transactions": [],
        "nonce": 100,
        "hash": "0",
        "previousBlockHash": "0"
      },
      {
        "index": 2,
        "timeStamp": 1741804678060,
        "transactions": [],
        "nonce": 18140,
        "hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
        "previousBlockHash": "0"
      },
      {
        "index": 3,
        "timeStamp": 1741804707067,
        "transactions": [
          {
            "amount": 12.5,
            "sender": "00",
            "recipient": "06f486bdd6da48cc99c2fef5bbd81253",
            "transactionId": "c3dab40ba2204c0c8ee61cdffdfa8413"
          },
          {
            "amount": 10,
            "sender": "JDHBNDSVOBEBVSUISBVS",
            "recipient": "MKDNSJNVBSNUIIvdIB",
            "transactionId": "bc0d69f733874aa386dc7031f380fce1"
          },
          {
            "amount": 20,
            "sender": "JDHBNDSVOBEBVSUISBVS",
            "recipient": "MKDNSJNVBSNUIIvdIB",
            "transactionId": "a441a8244bc1482b9c9a742c7e4463ff"
          },
          {
            "amount": 30,
            "sender": "JDHBNDSVOBEBVSUISBVS",
            "recipient": "MKDNSJNVBSNUIIvdIB",
            "transactionId": "7f4129c36d894354a1ffda9c5c9d9b41"
          }
        ],
        "nonce": 21312,
        "hash": "00000484a17a52692f64ddf3c64a7535b373331ef0393a7c80312b9203d41221",
        "previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
      },
      {
        "index": 4,
        "timeStamp": 1741804786456,
        "transactions": [
          {
            "amount": 12.5,
            "sender": "00",
            "recipient": "06f486bdd6da48cc99c2fef5bbd81253",
            "transactionId": "9fee24280fef46e489af912838fd17f3"
          },
          {
            "amount": 40,
            "sender": "JDHBNDSVOBEBVSUISBVS",
            "recipient": "MKDNSJNVBSNUIIvdIB",
            "transactionId": "75c89a8ebfb243deb11c87fc31411715"
          },
          {
            "amount": 50,
            "sender": "JDHBNDSVOBEBVSUISBVS",
            "recipient": "MKDNSJNVBSNUIIvdIB",
            "transactionId": "15572b23e23d45d1be90585daefd2382"
          },
          {
            "amount": 60,
            "sender": "JDHBNDSVOBEBVSUISBVS",
            "recipient": "MKDNSJNVBSNUIIvdIB",
            "transactionId": "b6b2f4568cfc4cc29b56a6e09e87c758"
          },
          {
            "amount": 70,
            "sender": "JDHBNDSVOBEBVSUISBVS",
            "recipient": "MKDNSJNVBSNUIIvdIB",
            "transactionId": "4a2d054f86334171a7a4c0a44f060e31"
          }
        ],
        "nonce": 46062,
        "hash": "000065914d07115392fe14be6c595f18d75396e0a8fd73097d5839a7c08221e7",
        "previousBlockHash": "00000484a17a52692f64ddf3c64a7535b373331ef0393a7c80312b9203d41221"
      },
      {
        "index": 5,
        "timeStamp": 1741804808516,
        "transactions": [
          {
            "amount": 12.5,
            "sender": "00",
            "recipient": "06f486bdd6da48cc99c2fef5bbd81253",
            "transactionId": "b8a18f86f3014b2688c6c44acad7ef19"
          }
        ],
        "nonce": 7692,
        "hash": "0000cea404b0925ca6f7ef098bebbadcef784d9aea84cb6cf6bf3f21e92e2279",
        "previousBlockHash": "000065914d07115392fe14be6c595f18d75396e0a8fd73097d5839a7c08221e7"
      },
      {
        "index": 6,
        "timeStamp": 1741804812876,
        "transactions": [
          {
            "amount": 12.5,
            "sender": "00",
            "recipient": "06f486bdd6da48cc99c2fef5bbd81253",
            "transactionId": "46370da753dd497ead71ba6eeb9147a9"
          }
        ],
        "nonce": 28207,
        "hash": "00006bb9cfaac2207f1dafce686b40a290bbc1006005aeb3d1dbcd146005d7fb",
        "previousBlockHash": "0000cea404b0925ca6f7ef098bebbadcef784d9aea84cb6cf6bf3f21e92e2279"
      }
    ],
    "pendingTransactions": [
      {
        "amount": 12.5,
        "sender": "00",
        "recipient": "06f486bdd6da48cc99c2fef5bbd81253",
        "transactionId": "7a84c5c6373d4c1ab74c3876f96fc7d1"
      }
    ],
    "currentNodeUrl": "http://localhost:3001",
    "networkNodes": []
};

console.log('VALID: ', bitcoin.chainIsValid(bc1.chain)); //true