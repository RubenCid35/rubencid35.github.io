import React from 'react'
import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const NavBar = () => {
    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div>
            <div className="text-black flex justify-between h-20 items-center mx-auto px-4 max-w-[1240px]">
                <h1 className='w-full  hover:[text-shadow:_0_3px_0_rgb(0_0_0_/_20%)]' >
                    <a className="no-underline text-3xl font-bold" href="/">Rubén Cid</a>
                </h1>
                <ul className="hidden md:flex">
                    <li className="p-4 whitespace-nowrap hover:font-bold hover:[text-shadow:_0_3px_0_rgb(0_0_0_/_15%)]">
                        <a href="#about-me">Sobre Mi </a>
                    </li>
                    <li className="p-4 whitespace-nowrap hover:font-bold hover:[text-shadow:_0_3px_0_rgb(0_0_0_/_15%)]">
                        <a href="/">Projectos</a>
                    </li>
                    <li className="p-4 whitespace-nowrap hover:font-bold hover:[text-shadow:_0_3px_0_rgb(0_0_0_/_15%)] mr-5">
                        <a href="/">Contacto</a>
                    </li>
                    <li className="p-4 whitespace-nowrap hover:font-bold md:border-gray-300 hover:[text-shadow:_0_3px_0_rgb(0_0_0_/_15%)] md:border-l-2">
                        <a href="/">Español</a>
                    </li>
                    <li className="p-4 whitespace-nowrap hover:font-bold hover:[text-shadow:_0_3px_0_rgb(0_0_0_/_15%)]">
                        <a href="/">English</a>
                    </li>
                </ul>
                <div onClick={handleNav} className="block md:hidden">
                    {!nav ? <AiOutlineClose size={27} /> : <AiOutlineMenu size={27} />}
                </div>
                <div className={!nav ? 'fixed left-0 top-0 w-[50%] border-r-gray-200 border-r h-full bg-white ease-in-out duration-500 block md:hidden': 'fixed left-[-100%] '}>
                    <h1 className='w-full text-3xl font-bold m-4 pt-[5px]' >
                        <a className="no-underline" href="/">Rubén Cid</a>
                    </h1>
                    <ul className="pt-[24px] uppercase bg-white">
                        <li className="p-4 whitespace-nowrap border-b border-gray-300">
                            <a href="#about-me">Sobre Mi </a>
                        </li>
                        <li className="p-4 whitespace-nowrap border-b border-gray-300">
                            <a href="/">Projectos</a>
                        </li>
                        <li className="p-4 whitespace-nowrap border-b-[2px] border-gray-400">
                            <a href="/">Contacto</a>
                        </li>
                        <li className="p-4 pt-5 whitespace-nowrap border-b border-gray-200 ">
                            <a href="/">Español</a>
                        </li>
                        <li className="p-4 whitespace-nowrap ">
                            <a href="/">English</a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className="h-[2px] bg-gray-400 z-40" />
        </div>
    )
}

export default NavBar