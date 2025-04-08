import React from 'react';

const Header = () =>{
    return <div className='flex justify-between items-center bg-blue-50 p-4'>
        <div className="text-2xl font-bold">
              <img src="./public/logo.png" alt="Логотип" className="h-12" />
        </div>
        <nav className="flex space-x-6">
        <a href="/" className="text-gray-800 hover:text-blue-500 transition duration-300">Home</a>
        <a href="/About" className="text-gray-800 hover:text-blue-500 transition duration-300">About</a>
        <a href="/Contacts" className="text-gray-800 hover:text-blue-500 transition duration-300">Contacts</a>
        <a href="/products" className="text-gray-800 hover:text-blue-500 transition duration-300">Продукты</a>
        </nav>
    </div>
}

export default Header