import React from "react"
import { Route, Routes } from 'react-router-dom'

// Pages
import Home from "./routes/Home"

// Components
import NavBar from './components/NavBar'
import FooterBar from "./components/Footer"


export default function App() {
    return (
        <div className="App">
            <NavBar/>
            <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route element={<Home/>} />
            </Routes>
            <FooterBar />
        </div>
    )
}