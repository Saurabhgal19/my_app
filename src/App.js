import {Routes, Route} from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Transaction from './Pages/Transaction';
import { Report } from './Pages/Report';
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <div>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/reports' element={<Report/>} />
        <Route path='/transaction' element={<Transaction/>} />
      </Routes>
    </div>
  );
}

export default App;
 {/* multiple copy Alt + shift + down arrow */}