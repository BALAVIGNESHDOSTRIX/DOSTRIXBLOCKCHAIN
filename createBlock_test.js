const Dostrixchain = require('./DostrixChain')

const bitcoin = new Dostrixchain()

const block = bitcoin.createNewBlock("ASFHDJHKLKSLKDKLLLDLL","LKLSLDKLDJSHGTYEIEI",100)
const block1 = bitcoin.createNewBlock("ASFHDJHKLKSLKuirooLLDLL","LKLSLDKLDJSHGTYEIEI",400)
const block2= bitcoin.createNewBlock("ASFHDJHKLKashehKLLLDLL","LKLSLDKLDLS:TYEIEI",10)
const block3= bitcoin.createNewBlock("ASFHDJHKLKIDOPDLLDLL","LKLSLDKLDOPDOGTYEIEI",140)
const block4= bitcoin.createNewBlock("ASFHDJHKLKSLKDKLLLDLL","LKLSLDKsXXASHHIEI",50)


console.log(block)
console.log(block1)
console.log(block2)
console.log(block3)
console.log(block4)