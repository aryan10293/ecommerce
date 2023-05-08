import React from 'react'
import { Fragment } from 'react'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom';
//import { useDispatch } from "react-redux";
//import { addProduct } from "../redux/cartSlice"


const Product = (props) => {
    const location = useLocation()
    const [activeImg, setActiveImg] = React.useState(0)


  //  const dispatch = useDispatch()

    const image = [
        // { src: 'images/productImgs/image-product-1.jpg' },
        // { src: 'images/productImgs/image-product-2.jpg' },
        // { src: 'images/productImgs/image-product-3.jpg' },
        // { src: 'images/productImgs/image-product-4.jpg' }

        { src: location.state?.from.images[1] },
        { src: location.state?.from.images[2]},
        { src: location.state?.from.images[3] },
        //{ src: 'images/productImgs/image-product-4.jpg' }
    ];

    const prevSlide = () => {
        setActiveImg(activeImg === 0 ? image.length - 1 : activeImg - 1);
    };

    const nextSlide = () => {
        setActiveImg(activeImg === image.length - 1 ? 0 : activeImg + 1);
    };


    // function handleAddProduct() {
    //     if (itemQuantity > 0) {
    //         dispatch(addProduct(item))
    //     }
    //     console.log(props)
    // }
   console.log(location.state?.from.title)
    return (
        <>
        <Navbar />
        <div className="">
            <div className="flex justify-between p-5 mt-8 space-y-3 flex-col lg:flex-row">
                <div className="md:px-5 mr-auto">

                        <div className="flex flex-row relative ">
                            <img className="rounded-lg   object-cover" src={location.state?.from.images[0]} alt="productImg" />
                            <div className="md:hidden absolute top-1/2  w-full flex flex-row justify-between" >
                                <svg onClick={prevSlide} className="ml-3   cursor-pointer" width="15" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd" /></svg>
                                <svg onClick={nextSlide} className="mr-3 cursor-pointer " width="15" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd" /></svg>
                            </div>
                        </div>

                    <div className="hidden w-full md:space-x-3 mt-4 md:justify-between md:flex md:flex-row">

                        {image.map((x, index) => (
                            <img
                                key={index}
                                onClick={() => setActiveImg(index)}
                                className=" object-cover  mt-3  rounded-lg  w-24 h-24 lg:w-32 lg:h-32 hover:opacity-60" src={x.src} alt="productImg" />
                        ))}
                    </div>
                </div>

                <div className="md:ml-24 space-y-6 md:space-y-12">

                    <div className="md:mt-24 space-y-3">
                        <h3 className="font-bold text-black-400">{location.state?.from.brand}</h3>
                        <h1 className="text-4xl md:text-6xl font-bold">{location.state?.from.title}</h1>
                        <p className="md:mt-16 text-gray-500">{location.state?.from.description}</p>
                    </div>
                    <div className="flex md:mt-12 flex-row md:flex-col md:justify-start md:items-start justify-between items-center">
                        <div className="flex flex-row items-center space-x-5">
                            <span className="text-5xl font-bold">${location.state?.from.price}</span>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-3 items-center mt-12 ">
                        <div className="flex cursor-pointer shadow-xl md:w-64 rounded-md flex-row p-3 items-center justify-center space-x-3 bg-black-500 hover:bg-black-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-black h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <button  className="text-green-500 w-48 text-xl ">Add to cart</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Product
