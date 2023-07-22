
import React from "react";
import PersonCard from "../components/PersonCard";
import ProyectArea from "../components/ProyectsArea";
import SkillArea from "../components/SkillsArea";

const Home = () => {
    return (
        <div>
            <PersonCard/>
            <ProyectArea/>
            <SkillArea/>
        </div>
    )
}

export default Home;