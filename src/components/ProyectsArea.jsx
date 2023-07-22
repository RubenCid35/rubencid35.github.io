import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

import ProyectCard from "./ProyectCard";

const PROYECTS = [
    { "id": "dummy-1", "title": "Hola Mundo Hola Mundo Hola Mundo", "img": "", "link": "#projecto-dummy-1", "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi pariatur assumenda temporibus non facilis repellat qui voluptatum quibusdam deserunt, vitae natus possimus soluta perferendis ad cum labore ipsam! Cupiditate, doloribus!", "contrast": true },
    { "id": "dummy-2", "title": "Hola Mundo", "img": "", "link": "#projecto-dummy-2", "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi pariatur assumenda temporibus non facilis repellat qui voluptatum quibusdam deserunt, vitae natus possimus soluta perferendis ad cum labore ipsam! Cupiditate, doloribus!", "contrast": false },
    { "id": "dummy-3", "title": "Hola Mundo", "img": "", "link": "#projecto-dummy-3", "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi pariatur assumenda temporibus non facilis repellat qui voluptatum quibusdam deserunt, vitae natus possimus soluta perferendis ad cum labore ipsam! Cupiditate, doloribus!", "contrast": false },
    { "id": "dummy-4", "title": "Hola Mundo", "img": "", "link": "#projecto-dummy-4", "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi pariatur assumenda temporibus non facilis repellat qui voluptatum quibusdam deserunt, vitae natus possimus soluta perferendis ad cum labore ipsam! Cupiditate, doloribus!", "contrast": false },
    { "id": "dummy-5", "title": "Hola Mundo", "img": "", "link": "#projecto-dummy-3", "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi pariatur assumenda temporibus non facilis repellat qui voluptatum quibusdam deserunt, vitae natus possimus soluta perferendis ad cum labore ipsam! Cupiditate, doloribus!", "contrast": false },
    { "id": "dummy-6", "title": "Hola Mundo", "img": "", "link": "#projecto-dummy-4", "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi pariatur assumenda temporibus non facilis repellat qui voluptatum quibusdam deserunt, vitae natus possimus soluta perferendis ad cum labore ipsam! Cupiditate, doloribus!", "contrast": false },
    { "id": "dummy-7", "title": "Hola Mundo", "img": "", "link": "#projecto-dummy-3", "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi pariatur assumenda temporibus non facilis repellat qui voluptatum quibusdam deserunt, vitae natus possimus soluta perferendis ad cum labore ipsam! Cupiditate, doloribus!", "contrast": false },
    { "id": "dummy-8", "title": "Hola Mundo", "img": "", "link": "#projecto-dummy-4", "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi pariatur assumenda temporibus non facilis repellat qui voluptatum quibusdam deserunt, vitae natus possimus soluta perferendis ad cum labore ipsam! Cupiditate, doloribus!", "contrast": false },
    { "id": "dummy-9", "title": "Hola Mundo", "img": "", "link": "#projecto-dummy-4", "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi pariatur assumenda temporibus non facilis repellat qui voluptatum quibusdam deserunt, vitae natus possimus soluta perferendis ad cum labore ipsam! Cupiditate, doloribus!", "contrast": false },
]


const ProyectArea = () => {

    const [page, setPage] = useState(1);
    const [projectsPerPage, setProjectsPerPage] = useState(4);

    // Chat-GPT
    useEffect(() => {
        // Function to handle the window resize event and update projectsPerPage
        const handleResize = () => {
            const newProjectsPerPage = window.innerWidth >= 768 ? 4 : 2;
            if (projectsPerPage !== newProjectsPerPage) {
                setProjectsPerPage(newProjectsPerPage);
            }
        };

        // Add event listener to handle window resize
        window.addEventListener('resize', handleResize);

        // Call the handleResize function once to set the initial projectsPerPage value
        handleResize();

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [projectsPerPage]);

    const startIndex = (page - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    const list_projects = PROYECTS.slice(startIndex, endIndex);

    const prevPage = () => {
        setPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const nextPage = () => {
        setPage((prevPage) => Math.min(prevPage + 1, Math.ceil(PROYECTS.length / projectsPerPage)));
    };
    return (
        <div className="max-w-[1200px] mx-auto">
            <div className="px-8 text-center">
                <h1 className="text-2xl md:text-4xl font-bold ">Projectos y Data Stories</h1>
                <p className="text-center pt-4">
                    Se muestra un listado de los projectos que realizado durante mi carrera por profesión o aficción.
                </p>
                <hr className="relative mt-5 left-15 bg-black h-[2px] md:max-w-[1400px] w-full left-0" />
            </div>
            <div className="pt-2 flex w-full items-center mx-auto ">
                <div onClick={prevPage} className="w-full flex float-left">
                    <FaArrowLeft size="18" className="ml-auto" />
                </div>
                <div className="text-lg font-bold mx-4 px-2 float-left">
                    {page}
                </div>
                <div className="flex float-left w-full " onClick={nextPage}>
                    <FaArrowRight size="18" className="" />
                </div>
            </div>
            <div className="mt-4 grid sm:grid-cols-2 grid-cols-1 gap-5 sm:mx-0 mx-3">
                {
                    list_projects.map((project, index) => {
                        return <ProyectCard key={project.id} title={project.title} img={project.img} desc={project.desc} link={project.link} contrast={project.contrast} />
                    })
                }
            </div>

        </div>
    )
}

export default ProyectArea;