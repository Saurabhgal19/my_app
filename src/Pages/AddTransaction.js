import React, { useState } from 'react'
import "../styles/AddTransaction.css"
import { ToastContainer, toast } from 'react-toastify';

const AddTransaction = () => {

    //define states
    const[type,SetType] = useState("Expense");
    const[amount, setAmount] = useState(0);
    const[category, setCategory] = useState("");
    const[description, setDescription] = useState("");
    const [date, setDate] = useState(() => {
        const today = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
        return today;
      });

    function handleOnChange(e) {
        setAmount(e.target.value);
    }

    function handleAddTransaction(e) {
        e.preventDefault();
        if (!amount || !category || !date) {
            toast.error("Please fill all the fields!", { position: "bottom-right", theme:"colored", closeButton: false});
            return;
        }

        const existingTransactions = JSON.parse(localStorage.getItem("Transactions") || [] );

        const currentTransaction= {
            type:type,
            amount:parseFloat(amount),
            category,
            description,
            date
        }   

        const newTransaction = [...existingTransactions, currentTransaction];

        //now comming in Object -> convert it into readable format 
        localStorage.setItem("Transactions", JSON.stringify(newTransaction));

       // Show success toast
    toast.success("Transaction added successfully!", { position: "bottom-right", theme:"colored", closeButton: false });

        setDescription("");
        setCategory("");
        setDate(new Date());
        SetType("Expense");
        setAmount(0)
    }

  return (
    <div className='add-transaction-container'>
        <h2>Add Transaction Page</h2>
        <div className='transaction-box'>
            <div className='transaction-type'>
                {/* Options added */}
                <label>
                    <input type='radio'  checked={type ==="Expense"} value="Expense" name='Spent_Option' onChange={()=> SetType("Expense")}/> Expense
                </label>

                <label>
                    <input type='radio'  value="Income" checked={type ==="Income"} name='Spent_Option' onChange={() => SetType("Income")}/> Income
                </label>
            </div>

            <input type='number' value={amount} placeholder='Amount (₹)' onChange={handleOnChange}/>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value=""> Select a category</option>
                <option value="Salary"> Salary</option>
                <option value="Groceries"> Groceries</option>
                <option value="Dining"> Dining</option>
                <option value="Transport"> Transport</option>
                <option value="Entertainment"> Entertainment</option>
                <option value="Others"> Others</option>
            </select>
        <textarea value={description} placeholder="Description" onChange={(e)=> setDescription(e.target.value)} ></textarea>
        <input  type="date" value={date} onChange={(e) => setDate(e.target.value)}  />
        <button onClick={handleAddTransaction} >Add Transaction</button>
        </div>

      
     <ToastContainer />
    </div>
  )
}

export default AddTransaction
