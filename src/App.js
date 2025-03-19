import {Routes, Route} from 'react-router-dom';
// import Dashboard from './Pages/Dashboard';
import Transaction from './Pages/Transaction';
import { Report } from './Pages/Report';
import { Navbar } from './Components/Navbar';
import { NotFound } from './Pages/NotFound';
import AddTransaction from './Pages/AddTransaction';

function App() {
  return (
    <div>
     <Navbar/>
      <Routes>
        <Route path='/' element={<AddTransaction/>} />
        <Route path='/reports' element={<Report/>} />
        <Route path='/transaction' element={<Transaction/>} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
 {/* multiple copy Alt + shift + down arrow */}