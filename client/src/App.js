import './App.css';
import React, { useEffect } from 'react';
import { Fragment } from 'react';
import {Route, Routes, Navigate} from "react-router-dom"
import Navbar from './component/Navbar';
import Login from './component/Login';
import Signup from './component/Signup';
import Home from './component/Home'
function App() {
  const [user,setUser] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(true)

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

  if (isLoading) {
    return <div>Loading...</div>;
  }
  //console.log(Object.keys(user))
  return (
    <>


      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login" element={!user ? <Login />: <Navigate  to='/dashboard'/>  } />
          <Route path="/signup" element={!user ? <Signup />: <Navigate  to='/dashboard'/>  } />
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