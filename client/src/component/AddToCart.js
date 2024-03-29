import React from 'react'
import { Fragment } from 'react'
function AddToCart(props) {
    const handleClick = (e) => {
      props.onClick(e)
        e.preventDefault()
        const brand = e.target.parentElement.parentElement.childNodes[0].childNodes[1].childNodes[1].innerHTML
        const imgSrc = e.target.parentElement.parentElement.childNodes[0].childNodes[0].childNodes[0].src || e.target.parentElement.parentElement.childNodes[0].childNodes[0].childNodes[0].childNodes[0].src
        const price = e.target.parentElement.parentElement.childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[1].innerHTML
        const item = e.target.parentElement.parentElement.childNodes[0].childNodes[1].childNodes[0].childNodes[1].innerHTML
        const id = e.target.parentElement.parentElement.parentElement.parentElement.dataset.id
    let productData
    async function add(){
           productData = {
          'id': id,
          'price': price,
          'img': imgSrc,
          'brand': brand,
          'item': item,
    }
        try {
            const response = await fetch(`https://the-random-shop.onrender.com/cart/${props.state}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(productData)
                })
            const data = await response.json()
            alert(`Added ${productData.item} to cart`)
            console.log(data)
        } catch (error) {
            console.log(error)
            
        }
 }
  add()
    }
  return (
    <>
      <button onClick={handleClick} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-800 text-base leading-none text-green-600 hover:text-green-800">Add To Cart</button>
    </>
  )
}

export default AddToCart
