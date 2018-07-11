const Dostrixchain = require('./DostrixChain')

const idostrix = new Dostrixchain()


const currentblockdata = [{ Amount: 1500,
       Sender: 'DOSJDFKKOR547369HJJ',
       Receiver: 'YERTNDKFFDGS867' },
     { Amount: 890,
       Sender: 'DOTYREKKOR56959HJJ',
       Receiver: 'RUUTNDKFBSFS867' },
     { Amount: 6000,
       Sender: 'DOSJDWQEOR56959HJJ',
       Receiver: 'RUUTIOUYFDGS867' }]


var c = idostrix.Proof_of_work(currentblockdata,"d4d247f15e7c08f233df8cdd12816f883035394f26d9053151cea5f163501554")
console.log(c)

