import React from 'react'
import './styles/Navbar.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
            <h1 className='logo'>Expense Tracker</h1>
            <ul className="nav-links">
        <li>
          <Link to={"/"}>📊 Dashboard</Link>
        </li>
        <li>
          <Link to={"/transaction"}>📄 Transaction</Link>
        </li>
        <li>
          <Link to={"/reports"}>⏳ Reports</Link>
        </li>
        <li>
        <div className="quote-btn" >💡 Get Quote</div>
        </li>
        <li>
        <div className="reset-btn">🔄 Reset</div>
        </li>
      </ul>
        </nav>
    </div>
  )
}
