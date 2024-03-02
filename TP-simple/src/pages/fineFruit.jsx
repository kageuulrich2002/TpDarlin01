import { useState } from "react"
import Home from "./home"

export default function FineFruit({fruits, setFruits}) {

    const [rechercheFruit , setRechercheFruit] = useState('')
    const changeRecherche = (e) =>{
        setRechercheFruit(e.target.value)
    }

    const FineFruits = fruits.filter((fruitMap)=>fruitMap.name.toLowerCase().includes(rechercheFruit.toLowerCase()))
    
    return<div>
        <input type="text"
            placeholder="entrez votre recherche..."
            value={rechercheFruit}
            onChange={changeRecherche}
        />
        <br/><br/>
        <Home fruits={FineFruits}/>
    </div>
    
}