import './App.css';
import { Fragment } from 'react';
import {Route, Routes} from "react-router-dom"
import Navbar from './component/Navbar';
import Login from './component/Login';
import Signup from './component/Signup';
function App() {
  return (
    <>
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Navbar />} />
      </Routes>

    </>
  );
}

export default App;
      // <div className="App">
      //   <Navbar />
      // </div>