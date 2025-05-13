import React, { useState } from 'react';
import { Input } from './Input';
import { Button } from './Button';

const Header = () =>{
    const [authModalOpen,setIsModalOpen]=useState<boolean>(false);
    const handleAuth = () => {

    }
    const discardModal = () => {
        setIsModalOpen(false);

    }
    return <div className='flex justify-between items-center bg-blue-50 p-4'>
        <div className="text-2xl font-bold">
              <img src="./public/logo.png" alt="Логотип" className="h-12" />
        </div>
        <nav className="flex space-x-6">
        <a href="/" className="text-gray-800 hover:text-blue-500 transition duration-300">Home</a>
        <a href="/About" className="text-gray-800 hover:text-blue-500 transition duration-300">About</a>
        <a href="/Contacts" className="text-gray-800 hover:text-blue-500 transition duration-300">Contacts</a>
        <a href="/products" className="text-gray-800 hover:text-blue-500 transition duration-300">Продукты</a>
        <a href="/message" className="text-gray-800 hover:text-blue-500 transition duration-300">Message</a>
        </nav>

        <nav className="flex space-x-6">
        <a onClick={() => setIsModalOpen(true)} className="text-gray-800 hover:text-blue-500 transition duration-300">Авторизация</a>
        </nav>

        {authModalOpen && (
            <div className="fixed inset-0 flex justify-center items-center">
                      <div className="bg-blue-100 p-6 rounded shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Авторизация</h2>
                      <Input 
                      title='Логин'
                      length='short'
                      value='asd'
                      typesq='normal'
                      />
                      <Input 
                        title='Пароль'
                        length='short'
                        value='asd'
                        typesq='normal'
                        />
                        <Button 
                          size="medium" 
                          color="succes" 
                          title="Войти" 
                          ronClick={handleAuth}
                        />
                        <Button 
                          size="small" 
                          color="primary" 
                          title="Отмена" 
                          ronClick={discardModal}
                        />
                        <p>Нету аккаунта? <a href='auth'>Зарегистрироваться</a></p>
                      </div>
                    </div>
        )}
    </div>
}

export default Header