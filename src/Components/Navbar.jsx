import React, { useEffect, useState } from 'react'
import '../styles/Navbar.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export const Navbar = () => {

    const location = useLocation();
    const navigate = useNavigate();

    // const[quote, setQuote] = useState(null);
    // const [isModalOpen, setIsModalOpen] = useState(false);

    // const fetchQuote = async () => {
    //   try {
    //     const response=await fetch('https://quotes-api-self.vercel.app/quote');
    //     const data = response.json();
    //     console.log(data);
    //     setQuote(data.quote);
    //     setIsModalOpen(true);
    //   }
    //   catch(error) {
    //     console.log(error);
    //   }
    // }

    function handleReset() {
      localStorage.clear();
      navigate("/");
    }

  return (
    <div>
        <nav className='navbar'>
            <h1 className='logo'>Expense Tracker</h1>
            <ul className="nav-links">
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to={"/"}>📊 Dashboard</Link>
        </li>
        <li className={location.pathname === "/transaction" ? "active" : ""}>
          <Link to={"/transaction"}>📄 Transactions</Link>
        </li>
        <li className={location.pathname === "/reports" ? "active" : ""}>
          <Link to={"/reports"}>⏳ Reports</Link>
        </li>
        {/* <li>
        <div className="quote-btn" onClick={fetchQuote} >💡 Get Quote</div>
        </li> */}
        <li>
        <div className="reset-btn" onClick={handleReset}>🔄 Reset</div>
        </li>
      </ul> 

      {/* {
        isModalOpen && (
          <div className='modal-overlay'>
            <div className='model-content'>
              <p>{quote}</p>
              <button className='cls-btn' onClick={()=> setIsModalOpen(false)}> Close</button>
            </div>
          </div>
        )} */}
        </nav>
    </div>
  )
}
