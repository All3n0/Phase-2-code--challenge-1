import React from "react";
import '../css/Table.css';


function Table({transactions}){
    const transactionsr=transactions.map((transaction,index) => (
        <tr key={index}>
            <td>{transaction.Date}</td>
            <td>{transaction.Description}</td>
            <td>{transaction.Category}</td>
            <td>{transaction.Amount}</td>
        </tr>
    ));
    return(
        <table>
            <thead>
            <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
            </tr>
            </thead>
            <tbody>
              {transactionsr}
                
            </tbody>
        </table>
    )
}
 export default Table;