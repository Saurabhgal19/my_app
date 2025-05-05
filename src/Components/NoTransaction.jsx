import React from 'react'
import { FaFileInvoiceDollar } from "react-icons/fa";
import "../styles/NoTransaction.css"

const NoTransaction = () => {
  return (
    <div className='no-transactions'>
    <FaFileInvoiceDollar className="no-transactions-icon" />
      <h3>No Transactions....!!!!!</h3>
      <p>Add transaction to see reports and analysis</p>
    </div>
  )
}

export default NoTransaction
