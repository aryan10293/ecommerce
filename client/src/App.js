import './App.css';
import React, { useEffect } from 'react';
import { Fragment } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './component/Dashboard';
import Login from './component/Login';
import Signup from './component/Signup';
import Home from './component/Home'
import Product from './component/Product';
function App() {
  const [user,setUser] = React.useState(null)
  
  let userLogin = false
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:2011/idk', {
          method: 'GET',
          credentials: 'include'
      })
      const data = await response.json()
      setUser(data)
    }
    fetchData()
  },[])
  if(user !== null){
    userLogin = true
  }


  // for testing 
    const [product, setProduct] = React.useState(null)
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://dummyjson.com/products');
          const data = await response.json();
          setProduct([...data.products][1]);
          //console.log(data.products[0].id === userWishlist)
        } catch (error) {
          console.error(error);
        }
      }
      fetchData()
    },[])
  // for testing
  return (
    <>
        <Routes>
          <Route 
          path="/product/:id"
          element={<Product />} />
          <Route 
          path="/dashboard"
          element={ userLogin ? <Dashboard state={user}/> : <Navigate  to='/login'/>} />

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