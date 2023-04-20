import './App.css';
import { Fragment } from 'react';
import {Route, Routes, Navigate} from "react-router-dom"
import Navbar from './component/Navbar';
import Login from './component/Login';
import Signup from './component/Signup';
import Home from './component/Home'
function App() {
  let user = true
  return (
    <>
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route 
          path="/dashboard"
          element={ user ? <Navbar /> : <Navigate  to='/signup'/>} />
          <Route path="/" element={<Home />} />
      </Routes>

    </>
  );
}

export default App;
      // <div className="App">
      //   <Navbar />
      // </div>