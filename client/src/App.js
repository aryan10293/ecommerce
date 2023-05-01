import './App.css';
import React, { useEffect } from 'react';
import { Fragment } from 'react';
import {Route, Routes, Navigate} from "react-router-dom"
import Dashboard from './component/Dashboard';
import Login from './component/Login';
import Signup from './component/Signup';
import Home from './component/Home'
function App() {
  const [user,setUser] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(true)
  let userLogin = false
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:2011/idk', {
          method: 'GET',
          credentials: 'include'
      })
      const data = await response.json()
      setUser(data)
      setIsLoading(false)
    }
    fetchData()
  },[])
  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }
  // console.log(user)
  if(user !== null){
    userLogin = true
  }
  //console.log(user)
  return (
    <>
      <Routes>
          <Route 
          path="/dashboard"
          element={ userLogin ? <Dashboard state={user}/> : <Navigate  to='/signup'/>} />

          <Route 
          path='/'
          element={!userLogin ? <Home /> : <Navigate to='/dashboard'/>} />

          <Route 
          path='/login'
          element={!userLogin ? <Login /> : <Navigate to='/dashboard'/>} />

          <Route 
          path='/signup'
          element={!userLogin ? <Signup /> : <Navigate to='/dashboard'/>} />
      </Routes>

    </>
  );
}

export default App;
      // <div className="App">
      //   <Navbar />
      // </div>

      //   const checkUser = async () => {
//     try {
//     const response = await fetch('http://localhost:2011/idk', {
//         method: 'GET',
//         credentials: 'include'
//     });
//     const data = await response.json();
//     console.log(data)
//     } catch (error) {
//     console.error(error);
//     }
// }