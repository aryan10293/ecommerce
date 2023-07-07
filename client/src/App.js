import './App.css';
import React from 'react';
import { Fragment } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './component/Dashboard';
import Login from './component/Login';
import Signup from './component/Signup';
import Home from './component/Home'
import Product from './component/Product';
import Wishlist from './component/Wishlist';
import Checkout from './component/Checkout';
import Cart from './component/Cart';
function App() {
  const [user,setUser] = React.useState(null)
  const [cart,setCart] = React.useState([])
  let userLogin = false
  React.useEffect(() => {
    const fetchData = async () => {
      setUser(localStorage.getItem('loginUser'))
    }
    fetchData()
  },[])
    React.useEffect(() => {
    async function fetchData(){
      try {
      const response = await fetch('https://the-random-shop.onrender.com/cart', {
          method: 'GET',
          credentials: 'include'
      });
      const data = await response.json();
      setCart(data)
      } catch (error) {
      console.error(error);
      }
    }
      fetchData()
  }, []);
  if(user !== null){
    userLogin = true
  }

  return (
    <>
        <Routes>
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
          // <Route 
          // path="/product/:id"
          // element={userLogin ? <Product /> : <Navigate  to='/login'/>} />
          // <Route 
          // path="/wishlist"
          // element={userLogin ? <Wishlist /> : <Navigate  to='/login'/>} />
          // <Route 
          // path="/checkout/:oid/:tid"
          // element={userLogin ? <Checkout state={user}/> : <Navigate  to='/login'/>} />
          // <Route 
          // path="/cart"
          // element={userLogin ? <Cart state={user} cart={cart}/> : <Navigate  to='/login'/>} />