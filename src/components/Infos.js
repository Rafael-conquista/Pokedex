import React from "react";
import { useParams } from 'react-router-dom'
import Navbar from "./Navbar";

function Infos() {
    const { pokemon } = useParams()
    console.log(pokemon)
    return (
        <div>
            <Navbar />
            <h1>{pokemon}</h1>
        </div>
    )
}

export default Infos