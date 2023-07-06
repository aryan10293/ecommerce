import React from 'react'
import { Fragment } from 'react'
function AddToCart(props) {
    const [cart, setCart] = React.useState([...props.data])
    const handleClick = (e) => {
        e.preventDefault()
        const brand = e.target.parentElement.parentElement.childNodes[0].childNodes[1].childNodes[1].innerHTML
        const imgSrc = e.target.parentElement.parentElement.childNodes[0].childNodes[0].childNodes[0].src || e.target.parentElement.parentElement.childNodes[0].childNodes[0].childNodes[0].childNodes[0].src
        const price = e.target.parentElement.parentElement.childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[1].innerHTML
        const item = e.target.parentElement.parentElement.childNodes[0].childNodes[1].childNodes[0].childNodes[1].innerHTML
        const id = e.target.parentElement.parentElement.parentElement.parentElement.dataset.id
        console.log(brand)
    let productData
    async function add(){

           productData = {
          'id': id,
          'price': price,
          'img': imgSrc,
          'brand': brand,
          'item': item,
    }
    console.log(productData)
        try {
            const response = await fetch('https://the-random-shop.onrender.com/cart', {
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
    }
  return (
    <>
      <button onClick={handleClick} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-800 text-base leading-none text-green-600 hover:text-green-800">Add To Cart</button>
    </>
  )
}

export default AddToCart
