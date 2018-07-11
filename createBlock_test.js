const Dostrixchain = require('./DostrixChain')

const idostrix = new Dostrixchain()

const block = idostrix.createNewBlock("ASFHDJHKLKSLKDKLLLDLL","LKLSLDKLDJSHGTYEIEI",100)
const block1 =idostrix.createNewBlock("ASFHDJHKLKSLKuirooLLDLL","LKLSLDKLDJSHGTYEIEI",400)
const block2= idostrix.createNewBlock("ASFHDJHKLKashehKLLLDLL","LKLSLDKLDLS:TYEIEI",10)
const block3= idostrix.createNewBlock("ASFHDJHKLKIDOPDLLDLL","LKLSLDKLDOPDOGTYEIEI",140)
const block4= idostrix.createNewBlock("ASFHDJHKLKSLKDKLLLDLL","LKLSLDKsXXASHHIEI",50)


console.log(block)
console.log(block1)
console.log(block2)
console.log(block3)
console.log(block4)
