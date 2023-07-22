import React from 'react'
import {useState} from 'react'

const PersonCard = () => {

    return (
        <div id="about-me" className="md:flex block max-w-[1100px] mx-auto border-0 md:border-b-[1px] lg:border-[0.5px] border-gray-400 md:shadow-lg shadow-black/100 rounded-lg p-5 my-10 hover:shadow-2xl">
            {
                //TODO Add Photo
            }
            <img src="/assets/stock-images/person-svgrepo-com.svg" alt="Rubén Cid" className="mx-auto mb-5 md:mr-5 w-[300px] h-[100%] rounded-full border-2 border-black"></img>
            <section className="text-justify px-5 text-md mt-0 md:mt-4">
                <h1 className="text-center md:text-left text-5xl mb-3 font-bold">Rubén Cid</h1>
                <h3 className="text-center md:text-left text-2xl mb-2 font-bold text-gray-700 ">Científico de Datos</h3>
                <p className="pt-5 md:pt-0">
                    {
                        // TODO: Change text
                    }
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sequi quaerat voluptatibus placeat ratione, veniam odio expedita possimus repellendus totam aliquid vel ad, aperiam qui quia! Minima dolor neque aliquid.                
                </p>
                <p className="mt-3">
                    {
                        // TODO: Change text
                    }
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sequi quaerat voluptatibus placeat ratione, veniam odio expedita possimus repellendus totam aliquid vel ad, aperiam qui quia! Minima dolor neque aliquid.                
                </p>
            </section>
        </div>
    )
}

export default PersonCard