import React from 'react'
import { Fragment } from 'react'
function AddToCart(props) {
    const [cart, setCart] = React.useState([...props.state.cart])
    const handleClick = (e) => {
        e.preventDefault()
        const brand = e.target.parentElement.parentElement.childNodes[0].childNodes[1].childNodes[1].innerHTML
        const imgSrc = e.target.parentElement.parentElement.childNodes[0].childNodes[0].childNodes[0].src || e.target.parentElement.parentElement.childNodes[0].childNodes[0].childNodes[0].alt
        const price = e.target.parentElement.parentElement.childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[1].innerHTML
        const item = e.target.parentElement.parentElement.childNodes[0].childNodes[1].childNodes[0].childNodes[1].innerHTML
        const id = Number(e.target.parentElement.parentElement.parentElement.parentElement.dataset.id)

    let productData
    async function add(){
           productData = {
          'id': id,
          'price': price,
          'imgSrc': imgSrc,
          'brand': brand,
          'item': item,
    }
        try {
            const response = await fetch('/cart', {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(productData)
                })
            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }
 }
 add()
    setCart([...cart, productData])
    console.log(cart)
    }

    React.useEffect(() => {
   //      console.log('cart updated:', cart);
    }, [cart]);
  return (
    <>
      <button onClick={handleClick}>Add To Cart</button>
    </>
  )
}

export default AddToCart
