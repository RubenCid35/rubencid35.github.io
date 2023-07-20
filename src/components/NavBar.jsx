import React from 'react'

const NavBar = () => {
    return (
        <div className="text-black flex justify-between h-20 items-center mx-auto px-4 max-w-[1240px] border-b-2 border-gray-400">
            <h1 className='w-full text-3xl font-bold' >
                Rubén Cid
            </h1>
            <ul className="flex">
                <li className="p-4 whitespace-nowrap hover:font-bold">Sobre Mi</li>
                <li className="p-4 whitespace-nowrap hover:font-bold">Projectos</li>
                <li className="p-4 whitespace-nowrap hover:font-bold">Data Stories</li>
                <li className="p-4 whitespace-nowrap hover:font-bold">Contacto</li>
                <li className="p-4 whitespace-nowrap hover:font-bold lg:border-gray-300 lg:border-l-2">Español</li>
                <li className="p-4 whitespace-nowrap hover:font-bold ">English</li>
            </ul>

        </div>
        )
}

export default NavBar