import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar';
function Loggedinroutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Navbar />  } />
    </Routes>
  )
}

export default Loggedinroutes
