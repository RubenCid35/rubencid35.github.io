import React from "react";

const ProyectCard = ({title, img, desc, link, contrast}) => {
    const path = "/assets/stock-images/pexels-lukas-590016.jpg"
    const redirect = () => {
        window.location = link
    }
    const contrast_color = !contrast ? " text-black/0 hover:text-black" : " text-white/0 hover:text-white"   
    console.log(contrast, contrast_color)
    const blended_data = "md:block hidden absolute top-0 bottom-0 left-0 right-0 h-full w-full bg-bg-gray-500/0 hover:bg-gray-500/60 transition-duration-1000 ease-in-out" + contrast_color
 
    return (
        <div className="p-4 sm:border-black rounded-lg sm:border-[1px] border-y-[1px] border-gray-500  relative bg-white" onClick = {redirect}>
            <div className="">
                <h1 className="md:hidden mb-5 font-bold text-lg">{title}</h1>
                <img src={path} className="mx-auto md:w-[500px] w-[400px] h-auto border-black border-2 rounded mt-2" title={title} />
                <p className="md:block hidden pt-4 pb-2 px-[10px]"> { desc } </p>
            </div>
            <div className={blended_data}>
                <h1 className="font-bold text-3xl m-auto text-center w-[300px] h-full pt-[100px] ">
                    {title}
                </h1> 
            </div>
        </div>
    )
}

export default ProyectCard;