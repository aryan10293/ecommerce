import React from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import AddToCart from './AddToCart'
function Dashboard(props) {
  const [data, setData] = React.useState([]);
  const [wishList, setWishlist] = React.useState([...props.state.wishlist]);
  //const userWishlist = Number(props.state.wishlist[0].id) 
  // const likes = [...document.querySelectorAll('.likes')]
  // console.log(likes)
  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setData([...data.products]);
        //console.log(data.products[0].id === userWishlist)
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const handleClick = async(e) => {
    const id = Number(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.dataset.id)
    const productData = Object.fromEntries(
         Array.from(Object.entries(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.dataset))
      )
    let method;
    async function add(){
    productData.id = id
    wishList.map(x => x.id).includes(productData.id) ? method = 'DELETE' : method = 'PUT'
        try {
            const response = await fetch('/wish', {
                method: method,
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
    if(method === 'PUT'){
      setWishlist([...wishList, productData])
    } else {
      let newList = wishList.filter(x => x.id !== productData.id )
      setWishlist(newList)
    }

  }
React.useEffect(() => {
  }, [wishList]);
  return (
    <>
        <Navbar />
        <div className='flex justify-center'>
            <h1 className="mb-6 text-5xl font-bold ">Welcome Back {props.state.userName}</h1>
        </div>
        <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {data.map((item, i) => {
                   return (
                     <>
                        <li key={item.id} data-item={item.title} data-price={item.price} data-id={item.id} data-brand={item.brand} data-img={item.images[3]}>
                          <div className="bg-white">
                          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                              <div className="group relative">
                                <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <Link to={`/product/${item.title}`}><img src={item.images[3]} alt={item.description} className="h-full w-full object-cover object-center lg:h-full lg:w-full" /></Link>
                                </div>
                                <div className="mt-4 flex justify-between">
                                  <div>
                                    <h3 className="text-sm text-gray-700">
                                      <p>
                                        <Link to={`/product/${item.title}`}><span aria-hidden="true" className="absolute inset-0"></span></Link>
                                        <span>${item.price}</span>
                                      </p>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{item.title}</p>
                                  </div>
                                  <p   className="likes text-sm font-medium text-gray-900" id='brand'>{item.brand}</p>
                                </div>
                              </div>
                              <div className="mr-auto">
                                {
                                  wishList.map(x => x.id).includes(item.id) ?
                                  <button type="" className="text-red-500 hover:text-gray-500" onClick={handleClick}><FontAwesomeIcon icon={faHeart} /></button> : 
                                  <button type="" className="text-gray-500 hover:text-red-500" onClick={handleClick}><FontAwesomeIcon icon={faHeart} /></button> }
                                  <AddToCart state={props.state}/>
                              </div>
                          </div>
                        </div>
                        </li>
                    </>
                   )
                })
            }
        </ul>
    </>
  )
}

export default Dashboard  