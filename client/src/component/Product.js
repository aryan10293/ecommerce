import React from 'react'
import { Fragment } from 'react'
import Navbar from './Navbar'
import InCart from './InCart';
import { useParams } from 'react-router-dom';
const Product = (props) => {
    const [images,setImages] = React.useState([])
    const [data, setData] = React.useState([])
    const [cart, setCart] = React.useState([])
    const {id} = useParams()
    React.useEffect(() => {
        async function fetchData(props){
            try {
                const response = await fetch('https://dummyjson.com/products');
                const data = await response.json();
                const foundProduct = data.products.find(product => product.title === id);
                if (foundProduct) {
                    setImages(foundProduct.images)
                    setData(foundProduct)
                } else {
                    console.log('Product not found');
                }  
            } catch (error) {
                console.log(error)
            }
            
            }
        fetchData()
    }, [id])
    const image = [
       { src: images[1]},
        { src: images[2]},
        { src: images[3]},
    ];

    React.useEffect(() => {
        async function fetchData(){
        try {
        const response = await fetch(`https://the-random-shop.onrender.com/cart/${props.user}`, {
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

    const handleClick = async (e) => {
        const productData = {
            price: e.target.parentElement.parentElement.previousElementSibling.childNodes[0].childNodes[0].innerHTML,
            img: image[2].src,
            brand: e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.childNodes[0].innerHTML,
            item: e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.childNodes[1].innerHTML,
            id: e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.childNodes[1].dataset.id
        }
        try {
            const response = await fetch(`https://the-random-shop.onrender.com/cart/${props.user}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(productData)
                })
            const data = await response.json()
            alert(`Added ${productData.item} to cart`)
            setCart([...cart, productData])
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
        <Navbar />
        <div className="">
            <div className="flex justify-between p-5 mt-8 space-y-3 flex-col lg:flex-row">
                <div className="md:px-5 mr-auto">

                        <div className="flex flex-row relative ">
                            <img className="rounded-lg   object-cover" src={images[0]} alt="productImg" />
                            <div className="md:hidden absolute top-1/2  w-full flex flex-row justify-between" >
                            </div>
                        </div>

                    <div className="hidden w-full md:space-x-3 mt-4 md:justify-between md:flex md:flex-row">

                        {image.map((x, index) => (
                            <img
                                key={index}
                                className=" object-cover  mt-3  rounded-lg  w-24 h-24 lg:w-32 lg:h-32 hover:opacity-60" src={x.src} alt="productImg" />
                        ))}
                    </div>
                </div>

                <div className="md:ml-24 space-y-6 md:space-y-12">

                    <div className="md:mt-24 space-y-3">
                        <h3  className="font-bold text-black-400">{data.brand}</h3>
                        <h1 data-id={data.id} className="text-4xl md:text-6xl font-bold">{data.title}</h1>
                        <p className="md:mt-16 text-gray-500">{data.description}</p>
                    </div>
                    <div className="flex md:mt-12 flex-row md:flex-col md:justify-start md:items-start justify-between items-center">
                        <div className="flex flex-row items-center space-x-5">
                            <span className="text-5xl font-bold">${data.price}</span>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-3 items-center mt-12 ">
                            {
                                  cart.map(x => Number(x.id)).includes(data.id) ?
                                  <InCart /> : 
                                  <div className="flex cursor-pointer shadow-xl md:w-64 rounded-md flex-row p-3 items-center justify-center space-x-3 bg-black-500 hover:bg-black-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-black h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                  <button onClick={handleClick} className="text-green-500 w-48 text-xl ">Add to cart</button>
                                </div>
                                }
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Product
