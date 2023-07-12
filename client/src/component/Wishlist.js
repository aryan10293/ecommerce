import React from 'react' 
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { Fragment } from 'react'
function Wishlist(props) {
    const [wishlist, setWishlist] = React.useState([])
    React.useEffect(() => {
    async function fetchData(){
            try {
            const response = await fetch(`https://the-random-shop.onrender.com/wish/${props.user}`, {
                method: 'GET',
                credentials: 'include'
            });
            const data = await response.json();
            setWishlist(data)
            } catch (error) {
            console.error(error);
            }
        }
        fetchData()
    }, [props.user, props.userId])
    const handleClick = async(e) => {
        const product = Object.fromEntries(
            Array.from(Object.entries(e.target.parentElement.parentElement.dataset))
        )
        try {
            const response = await fetch(`https://the-random-shop.onrender.com/cart/${props.user}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(product)
                })
            const data = await response.json()

             alert(`Added ${product.item} to cart`)
        } catch (error) {
            console.log(error)
        }
    }
    const handleDelete = async(e) => {
        const method = false
        const productData = Object.fromEntries(
            Array.from(Object.entries(e.target.parentElement.parentElement.dataset))
        )
        console.log(productData)
        const iHaveNoIdeaWhatImDoing = productData.id
            if(props.user !== null){
                try {
                    const response = await fetch(`https://the-random-shop.onrender.com/wish/${props.user}`, {
                        method: 'PUT',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({productData, method, iHaveNoIdeaWhatImDoing})
                        })
                    const data = await response.json()
                    alert(`Deleted ${productData.item} from wishlist`)
                    console.log(data)
                } catch (error) {
                    console.log(error)
                }
                let newList = wishlist.filter(x => x.id !== productData.id )
                setWishlist(newList)
            }
    }
  return (
    <>
      <Navbar />
       <div className=" py-12">
            {/* Desktop Responsive Start */}
            <div className="hidden sm:flex flex-col justify-start items-start">
                <div className="pl-4 lg:px-10 2xl:px-20 flex flex-row justify-center items-end space-x-4">
                    <h1 className="text-4xl font-semibold leading-9 text-gray-800">Favorites</h1>
                    <p className="text-base leading-4 text-gray-600 pb-1">({wishlist.length})</p>
                </div>
                <table className="w-full mt-16 whitespace-nowrap">
                    <thead aria-label="table heading" className="w-full h-16 text-left py-6 bg-gray-50 border-gray-200 border-b ">
                        <tr>
                            <th className="text-base font-medium leading-4 text-gray-600 2xl:pl-20 pl-4 lg:pl-10">YOUR PRODUCT</th>
                            <th className="text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">DESCRIPTION</th>
                            <th className="text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">PRICE</th>
                            <th className="text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">MORE OPTIONS</th>
                            <th className="text-base font-medium leading-4 text-gray-600 2xl:pl-28 2xl:pr-20 pr-4 lg:pr-10" />
                        </tr>
                    </thead>
                    <tbody className="w-full text-left">
                    {wishlist.map(item => {
                        return (
                           <tr className="border-gray-200 border-b  " data-item={item.item} data-price={item.price} data-id={item.id} data-brand={item.brand} data-img={item.img} >
                            <th>
                                <img className="my-10 pl-4 lg:pl-10 2xl:pl-20" src={item.img} alt={`${item.item}`} />
                            </th>
                            <th className="mt-10 text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                                <p className=" text-base leading-4 text-gray-800">{item.item}</p>
                            </th>
                            <th className="my-10  pl-6 lg:pl-20 2xl:pl-52">
                                <p className>{item.price}</p>
                            </th>
                            <th className="my-10 text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                                <Link to={`/product/${item.item}`} className="hover:underline text-base font-medium leading-none  text-gray-800 focus:outline-none focus:underline">
                                    View details
                                </Link>
                            </th>
                            <th className="my-10 pl-4 lg:pl-12  2xl:pl-28 pr-4 2xl:pr-20">
                                <button onClick={handleDelete} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800 text-base leading-none text-red-600 hover:text-red-800">
                                    Remove Item
                                </button>                               
                            </th>
                            <th className="my-10 pl-4 lg:pl-12  2xl:pl-28 pr-4 2xl:pr-20">
                                <button onClick={handleClick} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-800 text-base leading-none text-green-600 hover:text-green-800">
                                    Add To Cart
                                </button>                             
                            </th>
                        </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
            {/* Desktop Responsive End */}
            {/* Mobile Responsive Start */}
            <div className=" flex justify-center items-center">
                <div className="sm:hidden flex flex-col justify-start items-start ">
                    <div className="px-4 lg:px-10 2xl:px-20 flex flex-row justify-start items-end space-x-4">
                        <p className="text-4xl font-semibold leading-9 text-gray-800">Favourites</p>
                        <p className="text-base leading-4 text-gray-600 pb-1">({wishlist.length})</p>
                    </div>
                        {wishlist.map(item => {
                            return (
                                <div className="border-gray-200 border-b pb-10">
                                        <div className="px-4 flex flex-col jusitfy-center items-start mt-10">
                                            <div>
                                                <img src={item.img} alt={item.item} />
                                            </div>
                                        </div>
                                        <div className="px-4 mt-6 flex justify-between w-full flex jusitfy-center items-center">
                                            <div>
                                                <p className="w-36 text-base leading-6 text-gray-800">{item.item}</p>
                                            </div>
                                            <div>
                                                <p className="text-base font-semibold leading-4 text-gray-800">{item.price}</p>
                                            </div>
                                        </div>
                                        <div className="px-4 mt-6 flex justify-between w-full flex jusitfy-center items-center">
                                            <div>
                                                <Link to={`/product/${item.item}`} className="hover:underline text-base font-medium leading-none focus:outline-none focus:underline  text-gray-800">
                                                    {" "}
                                                    View details
                                                </Link>
                                            </div>
                                            <div>
                                                <button className="focus:outline-none focus:ring-red-800 focus:ring-offset-2 focus:ring-2 text-base leading-none text-red-600 hover:text-red-800">
                                                    <p>Remove Item</p>
                                                </button>                                             
                                            </div>
                                            <div>
                                                 <button className="focus:outline-none focus:ring-red-800 focus:ring-offset-2 focus:ring-2 text-base leading-none text-green-600 hover:text-red-800">
                                                    Add To Cart
                                                </button>                                              
                                            </div>
                                        </div>
                                    </div>
                            )
                    })}
                </div>
            </div>
            {/* Mobile Responsive End */}
        </div>
    </>
  )
}

export default Wishlist
