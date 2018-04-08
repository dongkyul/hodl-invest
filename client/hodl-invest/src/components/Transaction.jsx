import React, {Component} from 'react'
import './Transaction.css'
import TransactionHistory from './TransactionHistory'
import BuySellPanel from "./BuySellPanel";

class Transaction extends Component {
    render() {
        return (
            <div className="transaction">
                <BuySellPanel/>
                <TransactionHistory transactionArray={[{amount: "$30", date: "yesterday"}]}/>
            </div>
        )
    }
}

export default Transaction;
