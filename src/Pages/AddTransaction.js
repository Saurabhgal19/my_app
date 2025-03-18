import React from 'react'
import "../styles/AddTransaction.css"
const AddTransaction = () => {
  return (
    <div className='add-transaction-container'>
        <h2>Add Transaction Page</h2>
        <div className='transaction-box'>
            <div className='transaction-type'>
                {/* Options added */}
                <label>
                    <input type='radio' id='expense' value="Expense" name='Spent_Option'/> Expense
                </label>

                <label>
                    <input type='radio' id='expense' value="Income" name='Spent_Option'/> Income
                </label>
            </div>

            <input type='number' placeholder='Amount (₹) '/>
            <select>
                <option value=""> Select a category</option>
                <option value="Salary"> Salary</option>
                <option value="Groceries"> Groceries</option>
                <option value="Dining"> Dining</option>
                <option value="Transport"> Transport</option>
                <option value="Entertainment"> Entertainment</option>
                <option value="Others"> Others</option>
            </select>
        <textarea placeholder="Description" ></textarea>
        <input  type="date"  />
        <button>Add</button>
        </div>
    </div>
  )
}

export default AddTransaction
