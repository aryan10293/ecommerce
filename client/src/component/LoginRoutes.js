import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './component/Login';
import Signup from './component/Signup';
import Home from './component/Home'
function LoginRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default LoginRoutes
