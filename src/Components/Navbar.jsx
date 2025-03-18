import React, { useEffect } from 'react'
import '../styles/Navbar.css'
import { Link, useLocation } from 'react-router-dom'

export const Navbar = () => {

    const location = useLocation();

    useEffect(()=> {
        console.log(location)
    },[location])


  return (
    <div>
        <nav className='navbar'>
            <h1 className='logo'>Expense Tracker</h1>
            <ul className="nav-links">
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to={"/"}>📊 Dashboard</Link>
        </li>
        <li className={location.pathname === "/transaction" ? "active" : ""}>
          <Link to={"/transaction"}>📄 Transaction</Link>
        </li>
        <li className={location.pathname === "/reports" ? "active" : ""}>
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
