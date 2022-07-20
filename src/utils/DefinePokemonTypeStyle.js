import React from "react";

function DefinePokemonTypeStyle(type){
    switch (type) {
        case "grass":
            type = "grass-type"
            break
        case "poison":
            type = "poison-type"
            break
        case "fire":
            type = "fire-type"
            break
        case "flying":
            type = "flying-type"
            break
        case "water":
            type = "water-type"
            break
        case "bug":
            type = "bug-type"
            break
        case "normal":
            type = "normal-type"
            break
        case "electric":
            type = "electric-type"
            break
        case "ground":
            type = "ground-type"
            break
        case "fairy":
            type = "fairy-type"
            break
        case "fighting":
            type = "fighting-type"
            break
        case "psychic":
            type = "psychic-type"
            break
        case "rock":
            type = "rock-type"
            break
        case "steel":
            type = "steel-type"
            break
        case "ice":
            type = "ice-type"
            break

        case "ghost":
            type = "ghost-type"
            break
        case "dragon":
            type = "dragon-type"
            break
        case "dark":
            type = "dark-type"
            break

        default:
            console.log("outro")
    }
    return type
}

export default DefinePokemonTypeStyle