import React from "react"

// Components
import NavBar from './components/NavBar'
import PersonCard from "./components/PersonCard"
import ProyectArea from "./components/ProyectsArea"
import SkillArea from "./components/SkillsArea"

export default function App() {
    return (
        <div>
            <NavBar/>
            <PersonCard/>
            <ProyectArea/>
            <SkillArea/>

        </div>
    )
}