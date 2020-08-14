import React, {useContext, useEffect} from 'react';
import {GlobalContext} from "../context/GlobalState";
import {Transaction} from "./Transaction";

export const TransactionList = () => {

    const {transactions, getTransactions} = useContext(GlobalContext);

    useEffect(() => {
      getTransactions();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  
    
    return (
        <div>
                <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => {
          return (<Transaction key={transaction._id} transaction={transaction} />)
          
        })}
        
          
        
      
        
      </ul>
            
        </div>
    )
}
