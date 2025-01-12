import './App.css';
import React from 'react'
import Players from './components/Players'
import Teams from './components/Teams'
import Matches from './components/Matches';
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Error from './components/Error';
import { BrowserRouter as Router,Routes,Navigate,Route} from 'react-router-dom';
function App() {
  return (
    
   <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='players' element={<Players />} />
          <Route path='teams' element={<Teams />} />
          <Route path='matches' element={<Matches />} />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
          <Route path='*' element={<Error />} />
        </Routes>
    </Router>
  );
}

export default App;