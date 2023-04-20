import React from 'react'

function Navbar() {
  return (
        <header className="py-4 shadow-sm bg-white">
        <div className="container flex items-center justify-between">
            <a href="index.html">
                <img src="https://cashy.dk/storage/200/zk5okjsbxd3uwphxcywfafudcza7m5.png" alt="Logo" className="w-32"/>
            </a>

            <div className="w-full max-w-xl relative flex">
                <span className="absolute left-4 top-3 text-lg text-gray-400">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                <input type="text" name="search" id="search"
                    className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none"
                    placeholder="search"/>
                <button
                    className="bg-primary border border-primary text-black px-8 rounded-r-md hover:bg-transparent hover:text-primary transition">Search</button>
            </div>

            <div className="flex items-center space-x-4">
                <a href="google.com" className="text-center text-gray-700 hover:text-primary transition relative">
                    <div className="text-2xl">
                        <i className="fa-solid fa-heart"></i>
                    </div>
                    <div className="text-xs leading-3">lol</div>
                    <div
                        className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                    </div>
                </a>
                <a href="google.com" className="text-center text-gray-700 hover:text-primary transition relative">
                    <div className="text-2xl">
                        <i className="fa-solid fa-bag-shopping"></i>
                    </div>
                    <div className="text-xs leading-3">Cart</div>
                    <div
                        className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                    </div>
                </a>
                <a href="google.com" className="text-center text-gray-700 hover:text-primary transition relative">
                    <div className="text-2xl">
                        <i className="fa-regular fa-user"></i>
                    </div>
                    <div className="text-xs leading-3">Account</div>
                </a>
            </div>
        </div>
    </header>
  )
}

export default Navbar
