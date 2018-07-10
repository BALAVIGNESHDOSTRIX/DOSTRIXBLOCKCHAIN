const sha256 = require('sha256')

class Dostrixchain{


    constructor(){
        this.Chain = []
        this.pendingTransaction = []
        this.createNewBlock(1997,"DOSTRIXCHAIN5674JK","BALAVIGNESHDOSTRIX007")
    }

    createNewBlock(nonce,previousBlockhash,currentBlockhash){

        const newBlock = {
            index : this.Chain.length + 1,
            timestamp : Date.now(),
            transactions : this.pendingTransaction,
            Nonce : nonce,
            PreviousBlockHash : previousBlockhash,
            currentBlockHash : currentBlockhash
        }

        this.pendingTransaction = []

        this.Chain.push(newBlock)
        return newBlock

    }

    getBlock(){
      return this.Chain[this.Chain.length - 1]  
    }


    createNewTransaction(amount,sender,receiver){

        const newTransaction = {
            Amount : amount,
            Sender : sender,
            Receiver : receiver
        }

        this.pendingTransaction.push(newTransaction)

        return this.getBlock()['index'] + 1
    }

    Hashing(previousBlockhash_,currentBlockdata,nonce){

        const data_source = previousBlockhash_ + nonce.toString() + JSON.stringify(currentBlockdata)
        const block_hash = sha256(data_source)
        return block_hash


    }


    Proof_of_work(currentBlockdata,previousBlockhash_){

        let nonce = 0
        let block_hash = this.Hashing(previousBlockhash_,currentBlockdata,nonce)
        while(block_hash.substring(0,4) !== '0000'){
            nonce++;
            block_hash = this.Hashing(previousBlockhash_,currentBlockdata,nonce);

        }

        return nonce;
    }

}

module.exports = Dostrixchain;