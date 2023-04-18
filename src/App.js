import logo from './logo.svg';
import './App.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
         <Routes> 
             {/* <Route path="/" element={<Home />} /> 
            <Route path="/transaction" element={<Index />} /> 
          <Route path="/transaction/new" element={<New />} />  */}
           {/* <Route path="/bookmarks/:index" element={<Show />} /> */}
           {/* <Route path="/bookmarks/:index/edit" element={<Edit />} /> */}
           {/* <Route path="*" element={<FourOFour />} /> */} 
        </Routes> 
        </main>
      </Router>
    </div> 
 );
}

export default App;
