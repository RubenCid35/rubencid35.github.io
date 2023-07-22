import React from "react";

const FooterBar = () => {
    return (
        <footer className="bg-gray-500 w-screen bottom-0">
            <div className="max-w-[1100px] mx-auto items-center px-5 py-5 text-center sm:flex">
                <div className="flex w-full">
                    <div className=" w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] bg-black flex-shrink-0">
                        R
                    </div>
                    <div className="ml-5 w-full text-left whitespace-nowrap">
                        <h2 className="text-2xl text-white">
                            <strong>Rubén</strong> Cid Costa
                        </h2>
                        <h4 className="text-gray-100">
                            Cientifico de Datos
                        </h4>
                    </div>
                </div>
                <div className="sm:mx-5 sm:px-5 px-2 flex-shrink-0 mt-5 sm:mt-0 sm:border-l-2 border-t-2 sm:border-t-0 pt-5 sm:pt-0 border-gray-400 ">
                    <ul className="text-right flex sm:block items-center justify-between">
                        <li className="my-1">
                            <a className="flex items-center hover:font-bold hover:text-1xl" href="">
                                <p className="pl-2 text-white text-lg w-full">Contacto</p>
                            </a>
                        </li>
                        <li className="my-2">
                            <a className="flex items-center hover:font-bold hover:text-1xl" href="https://www.linkedin.com/in/rubencidcosta/">
                                <img src="/assets/skills/linkedin-icon.svg" title="Linkedin" className="h-[35px] w-auto"/>
                                <p className="pl-2 text-white text-lg w-full">Linkedin</p>
                            </a>
                        </li>
                        <li className="my-1">
                            <a className="flex items-center hover:font-bold hover:text-1xl" href="https://github.com/RubenCid35">
                                <img src="/assets/skills/github-icon.svg" title="GitHub"     className="h-[35px]  w-auto rounded-full"/>
                                <p className="pl-2 text-white text-lg w-full">GitHub</p>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
            
        </footer>
    )
}

export default FooterBar