import {Routes, Route} from 'react-router-dom';
import Transaction from './Pages/Transaction';
import { Report } from './Pages/Report';
import { Navbar } from './Components/Navbar';
import { NotFound } from './Pages/NotFound';
import AddTransaction from './Pages/AddTransaction';
import Dashboard from './Pages/Dashboard';

function App() {


  return (
    <div>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/reports' element={<Report/>} />
        <Route path='/transaction' element={<Transaction/>} />
        <Route path='*' element={<NotFound/>}/>
        <Route path='/add-transaction' element={<AddTransaction/>}/>
      </Routes>

    </div>
  );
}

export default App;
 {/* multiple copy Alt + shift + down arrow */}