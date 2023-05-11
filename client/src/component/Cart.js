import React from 'react'
import { Fragment } from 'react'
function Cart(props) {
    const [cart,setCart] = React.useState([...props.state.cart])
    React.useEffect(() => {
    async function fetchData(){
      try {
      const response = await fetch('http://localhost:2011/cart', {
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
  console.log(cart)
  return (
    <>
      
    </>
  )
}

export default Cart
