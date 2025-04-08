import React from 'react';

const footer = () =>{
    return(
        <>
        <div className="fixed bottom-0 flex items-start w-full bg-blue-50 p-4 mt-8">
            
            
            <div className="columns-[20vw] ml-5">
                
                    <a href="soglashenie" className='text-gray-800 hover:text-blue-500 transition duration-300'>Пользовательское соглашение</a><br/>
                    <a href="politika">Политика конфиденциальности</a>
            </div>
            <div className="columns-[30vw]">
            <h2 className="uppercase font-bold">О нас</h2>
            </div>
            <div className="columns-[30vw]">c</div>
            <img src="ss"/>
        </div>
        </>
    )
}

export default footer