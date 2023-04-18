// import logo from './logo.svg';
import './App.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import Index from './Pages/Index';
import New from './Pages/New';
import Show from './Pages/Show';
import Edit from './Pages/Edit';
import FourOFour from './Pages/FourOFour';
import TransactionDetails from './Components/TransactionDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes> 
            <Route path="/" element={<Home />} /> 
            <Route path="/transactions" element={<Index />} /> 
            <Route path="/transaction/new" element={<New />} />  
            <Route path="/transactions/:id" element={<Show />} /> 
            {/* <Route path="/transactions/:index/edit" element={<Edit />} /> */}
            {/* <Route path="*" element={<FourOFour />} />  */}
        </Routes> 
        </main>
      </Router>
    </div> 
 );
}

export default App;
