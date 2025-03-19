import React, { useEffect, useState } from 'react'
import "../styles/Transaction.css"
import NoTransaction from '../Components/NoTransaction';
import { useNavigate } from 'react-router-dom';

const Transaction = () => {

    const [transaction,setTransaction]=useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const existingTransactions = JSON.parse(localStorage.getItem("Transactions")) || [];
        setTransaction(existingTransactions);
    }, []);

    const categoryEmojis = {
        Salary: "💰",
        Groceries: "🛒",
        Dining: "🍽",
        Transport: "🚗",
        Entertainment: "🎭",
        Others: "📝",
      };

      function handleEdit(index) {
        const editTransaction = transaction[index];
        navigate("/add-transaction", {
            state: {transaction: {...editTransaction, index}
        }})
      }

      function handleDelete(index) {
        localStorage.removeItem(index);
        const updatedTransactions = transaction.filter((transaction, i) => i !== index);
        setTransaction(updatedTransactions);
      }
       
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
                                    onClick={() => handleEdit(index)}
                                    >
                                    ✏️ Edit
                                </button>
                                <button
                                    className="delete-btn"
                                    onClick={() => handleDelete(index)}
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
