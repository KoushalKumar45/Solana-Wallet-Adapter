import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import { Buffer } from 'buffer';
window.Buffer = Buffer;


export function SendToken(){

   const wallet=useWallet();
   const {connection}=useConnection();


    async function SendToken() {
        let to = document.getElementById("to").value;
        let amount=document.getElementById("Amount").value;
        const transaction=new Transaction();
        transaction.add(SystemProgram.transfer({
            fromPubkey:wallet.publicKey,
            toPubkey:new  PublicKey(to),
            lamports: amount*LAMPORTS_PER_SOL,

        }));


        await wallet.sendTransaction(transaction,connection);
        alert("sent"+amount +"SOL to" + to);
    }

    return <div>

        <input id= "to" type="text" placeholder="To" />
        <input id ="Amount" type="text" placeholder="Amount"/>
        <button onClick={SendToken}>Send</button>
    </div>
}