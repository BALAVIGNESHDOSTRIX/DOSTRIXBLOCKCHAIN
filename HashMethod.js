const Dostrixchain = require('./DostrixChain')

const idostrix = new Dostrixchain()


const currentBlockdata = [{ Amount: 1500,
       Sender: 'DOSJDFKKOR547369HJJ',
       Receiver: 'YERTNDKFFDGS867' },
     { Amount: 890,
       Sender: 'DOTYREKKOR56959HJJ',
       Receiver: 'RUUTNDKFBSFS867' },
     { Amount: 6000,
       Sender: 'DOSJDWQEOR56959HJJ',
       Receiver: 'RUUTIOUYFDGS867' }]


var c = idostrix.Hashing("FSGHETDFREDFF",currentBlockdata,19972004)
console.log(c)
