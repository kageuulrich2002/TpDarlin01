import { useState } from "react"
export default function AddFruits({fruits, setFruits}) {
    //name fruit
    const  [newFruit, setNewFruit] = useState('')
    const writeFruit = (e)=>{
        setNewFruit(e.target.value) // pouvoir ecrire sur le champ de text
    }
    //prix fruits
    const  [prixFruit, setPrixFruit] = useState('')
    const writePrix = (e)=>{
        setPrixFruit(e.target.value) // pouvoir ecrire sur le champ de text
    }
    //quantitéfruits
    const  [quantiteFruit, setQuantiteFruit] = useState('')
    const writeQuantite = (e)=>{
        setQuantiteFruit(e.target.value) // pouvoir ecrire sur le champ de text
    }

    const submitFruit = (e) =>{ //declancher la creation du new fruit 
        e.preventDefault() // évité les rechargement de la page
            //1. copie du tableau
            const fruitsCopy = [...fruits]

            //2. manipulation sur la copie du state
            const id = new Date().getTime() //créé un id en fontion de l'heure
            const nom = newFruit //recuperer le nom du fruit 
            const prix = `${prixFruit}.Fcfa` //recuperer le Prix du Fruit
            const quantite = `${quantiteFruit }_Q`//recuperer la quantité de fruit

            fruitsCopy.push({id:id, name:nom, prix:prix, quantité:quantite}) //push ajoute des elemnt dans le tableau 
            //3. modifier le state avec le setter
            setFruits(fruitsCopy) //ajouter le new fruit dans setFruits
            setNewFruit('') //vide le champs input apres le declanchement
            setPrixFruit('')
            setQuantiteFruit('')

            //message de confirmation
            alert(`Nom: ${newFruit} Prix: ${prixFruit}.Fcfa Quant: ${quantiteFruit }_Q a bien été ajouté`)
        
    }

    return <div className="container">
                <br/>
        <form  action="submit" onSubmit={submitFruit}>
            <p>
                <input
                className="form-control "
                    value={newFruit}
                    type="text"
                    placeholder="Ajoutez un fruit..."
                    onChange={writeFruit}
                />
            </p>
            <p>
                <input
                    value={prixFruit}
                    type="number"
                    placeholder="Prix du fruit..."
                    onChange={writePrix}
                />.Fcfa
            </p>
            <p> 
                <input
                    value={quantiteFruit}
                    type="number"
                    placeholder="quantité de fruit..."
                    onChange={writeQuantite}
                />_Q
            </p>
            <button><strong>Add+</strong></button>
            
                </form>
    </div>
}