import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Navbar({num, wish}) {
    const navigate = useNavigate();
    const searchRef = React.useRef()
    const [search, setSearch] = React.useState('')
    const [userId, setUserId] = React.useState(localStorage.getItem('loginUser'))
  
    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    const  handleClick = async (e) => {
        const searchVal = searchRef.current.value
        //console.log(searchVal)
        navigate(`/product/${searchVal}`);
        setSearch('')

    }
    const handleLogout = async (e) => {
        console.log('pink tape here to stay')
        localStorage.clear()
        window.location.href = "/"
    }
  return (
        <header className="py-4 shadow-sm bg-white">
        <div className="container flex items-center justify-between">
            <Link to="/dashboard">
                <img src="https://cashy.dk/storage/200/zk5okjsbxd3uwphxcywfafudcza7m5.png" alt="Logo" className="w-32"/>
            </Link>

            <div className="w-full max-w-xl relative flex">
                <span className="absolute left-4 top-3 text-lg text-gray-400">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                <input  ref={searchRef} onChange={handleChange} value={search} type="text" name="search" id="search"
                    className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none"
                    placeholder="search"/>
                <button
                   onClick={handleClick} className="bg-primary border border-primary text-black px-8 rounded-r-md hover:bg-transparent hover:text-primary transition">Search</button>
            </div>

            <div className="flex items-center space-x-4">
                <p className="text-center text-gray-700 hover:text-primary transition relative">
                    <div className="text-2xl">
                        <i className="fa-solid fa-heart"></i>
                    </div>
                    <Link to='/wishlist'><div className="text-xs leading-3">Wishlist({wish})</div></Link>
                    <div
                        className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                    </div>
                </p>
                <p className="text-center text-gray-700 hover:text-primary transition relative">
                    <div className="text-2xl">
                        <i className="fa-solid fa-bag-shopping"></i>
                    </div>
                    <Link to={{
                        pathname:'/cart',
                        state: {prop1: 'lol'}}}
                    ><div className="text-xs leading-3">Cart({num})</div></Link>
                    <div
                        className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                    </div>
                </p>
                <p onClick={handleLogout} className="text-center text-gray-700 hover:text-primary transition relative">
                    <div className="text-2xl">
                        <i className="fa-regular fa-user"></i>
                    </div>
                    <div className="text-xs leading-3">Logout</div>
                </p>
            </div>
        </div>
    </header>
  )
}

export default Navbar
