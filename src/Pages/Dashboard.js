import React, { useEffect, useState } from 'react'
import "../styles/Dashboard.css"
import TransactionCard from '../Components/TransactionCard'
import RecentTransaction from '../Components/RecentTransaction';

const Dashboard = () => {

    const[transaction, setTransaction] = useState([]);
    const[totalIncome, setTotalIncome] = useState(0);
    const[totalExpense, setTotalExpence] = useState(0);
    const[balance, setBalance] = useState(0);

    useEffect(()=> {
        const existingTransactions = JSON.parse(localStorage.getItem("Transactions")) || [];
        setTransaction(existingTransactions);

        let income = 0;
        let expense= 0;
        existingTransactions.map((tx,index)=>{
            
            if(tx.type == "Income") {
                income = income + tx.amount;
            }
            else {
                expense = expense + tx.amount;
            } 
        });

        setTotalExpence(expense);
        setTotalIncome(income);
        setBalance(balance);


    },[])

  return (
    <div className='dashboard'>
        <div className='dashboard-inner'>
            <h2>Dashboard</h2>
            <button className='add-transaction'>
                + Add Transacton
            </button>
        </div>
           <TransactionCard 
            balance={balance}
            income={totalIncome} 
            expense={totalExpense}/>

        <div className='transaction-charts-row'>
            <div className='transaction half-width'>
                <h3>RecentTransaction</h3>
                <RecentTransaction transaction = {transaction}/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard
