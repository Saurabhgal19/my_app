import React, { useEffect, useState } from 'react'
import "../styles/Dashboard.css"
import TransactionCard from '../Components/TransactionCard'
import RecentTransaction from '../Components/RecentTransaction';
import NoTransaction from '../Components/NoTransaction';
import { useNavigate } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    scales,
  } from "chart.js";

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

const Dashboard = () => {

    const[transaction, setTransaction] = useState([]);
    const[totalIncome, setTotalIncome] = useState(0);
    const[totalExpense, setTotalExpence] = useState(0);
    const[balance, setBalance] = useState(0);

    const [categoryData, setCategoryData] = useState({});
    const [maxExpense, setMaxExpense] = useState(0);
    const categories = [
        "Salary",
        "Groceries",
        "Dining",
        "Transport",
        "Entertainment",
        "Others",
      ];

    const location = useNavigate();
    

    useEffect(()=> {
        const existingTransactions = JSON.parse(localStorage.getItem("Transactions")) || [];
        setTransaction(existingTransactions);

        let income = 0;
        let expense= 0;
        let categoryBreakDown = {};
        let highestExpense = 0;
        categories.forEach(cat => categoryBreakDown[cat] = 0)
        existingTransactions.forEach((tx)=>{
            
            if(tx.type == "Income") {
                income = income + tx.amount;
            }
            else {
                expense = expense + tx.amount;
                categoryBreakDown[tx.category] = (categoryBreakDown[tx.category] || 0) + tx.amount;

                if(categoryBreakDown[tx.category] > highestExpense) {
                    highestExpense = categoryBreakDown[tx.category];
                }
            } 
        });

        setTotalExpence(expense);
        setTotalIncome(income);
        setBalance(balance);
        setCategoryData(categoryBreakDown);
        setMaxExpense(highestExpense);

    },[])

    const chartData = {
        labels : categories,
        datasets : [
            {
                label : "Expense Per Catgory",
                data  : categories.map((cat) => categoryData[cat] || 0),
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4CAF50',
                    '#9966FF',
                    '#FFA074',
                ],
            },
        ] ,
    };

    const chartOptions  = {
        scales: {
            y: {
                beginAtZero: true,
                suggestedMax: maxExpense > 0 ? maxExpense * 1.2 : 10,
                grid: {
                    display: false,
                },
            },
            x: {
                grid: {
                    display: false,
                },
            },
        },
        maintainAspectRatio : false,
    };

  return (
    <div className='dashboard'>
        <div className='dashboard-inner'>
            <h2>Dashboard</h2>
            <button className='add-transaction' onClick={() => location("/add-transaction")}>
                + Add Transacton
            </button>
        </div>
           <TransactionCard 
            balance={balance}
            income={totalIncome} 
            expense={totalExpense}/>

        <div className='transactions-chart-row'>
            <div className='transaction half-width'>
                <h3>RecentTransaction</h3>
                {transaction.length == 0 ? <NoTransaction/> :  <RecentTransaction transaction = {transaction}/>}
            </div>

            <div className='expense-chart half-width'>
                <h3> Expense By Category</h3>
               
                {chartData.datasets[0].data.every((value) => value === 0) ? (
                    <NoTransaction />): 
                    <div className='chart-container'>
                    <Bar data={chartData} options={chartOptions}/>
                </div> }
            </div>
        </div>
    </div>
  );
}

export default Dashboard
