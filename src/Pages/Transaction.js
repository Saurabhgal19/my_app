import React from 'react'

const Transaction = () => {

    const existingTransactions= JSON.parse(localStorage.getItem("Transactions")) || [];
  return (
    <div>
      <h1>All Transactions</h1>
      <table>
        <thread>
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Description</th>
                    
                </tr>
            </thead>
        </thread>
      </table>
    </div>
  )
}

export default Transaction
