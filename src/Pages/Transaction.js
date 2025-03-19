import React, { useEffect, useState } from 'react'
import "../styles/Transaction.css"
import NoTransaction from '../Components/NoTransaction';

const Transaction = () => {

    const [transaction,setTransaction]=useState([]);

    useEffect(()=>{
        const existingTransactions = JSON.parse(localStorage.getItem("Transactions")) || [];
        setTransaction(existingTransactions);
      },[]);

    const categoryEmojis = {
        Salary: "💰",
        Groceries: "🛒",
        Dining: "🍽",
        Transport: "🚗",
        Entertainment: "🎭",
        Others: "📝",
      };
  return (
    <div className='transactions-container'>
      <h1>All Transactions</h1>

      {
      transaction.length==0?<NoTransaction/> :  

      <table>
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    transaction.map((tx,index) => (
                        <tr key={index}>
                            <td> 
                            {categoryEmojis[tx.category]}
                                {tx.category}
                             </td>
                            <td>{tx.description || "****No Description****"}</td>
                            <td className={tx.type == "Income" ? "income" : "expense"}>
                                {tx.amount.toLocaleString("en-In", {
                                style: "currency",
                                currency: "INR",
                                })}
                            </td>
                            <td>{tx.date}</td>
                            <td>{tx.type}</td>
                            <td>
                            <div className="action-buttons">
                                <button
                                    className="edit-btn"
                                    //</div>onClick={() => handleEdit(index)}
                                    >
                                    ✏️ Edit
                                </button>
                                <button
                                    className="delete-btn"
                                    //onClick={() => handleDelete(index)}
                                    >
                                    🗑 Delete
                                </button>
                                </div>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
      </table>
      }
    </div> 
  )
}

export default Transaction
