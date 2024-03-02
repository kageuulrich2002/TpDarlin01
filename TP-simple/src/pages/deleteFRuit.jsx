export default function DeleteFruit({fruits, setFruits}) {

    const deleteFruit = (id) =>{ //suprimer un fruit du tableau
        //1. copie du taleau
            const fruitsCopy = fruits.slice()

        //2. modifier le state avec le setter
            const fruitCopyDom = fruitsCopy.filter((fruitMap) =>fruitMap.id !== id) // on prend 'fruitCopyDom' on le filtre pour chaque element de [fruitMap] on concerve les fruitMap.id diff de "id"
        
        //3. effectué le Dom caché
        setFruits(fruitCopyDom)
    }

    return <div className="">
    <table className="table table-hover table-bordered">
        <thead className="table-dark">
            <tr>
               <th>Id</th> <th>NameFruits</th> <th>DeleteFruit</th>
            </tr>
        </thead>
        <tbody>
                {fruits.map((fruitMap, index) =>(
                    <tr key={index}>
                        <td key={fruitMap.id} > {fruitMap.id} </td>
                        <td key={fruitMap.id}><strong>{fruitMap.name}</strong></td>
                        <td key={fruitMap.id}  className=""><button 
                                                    className="bg-danger"
                                                    onClick={()=>deleteFruit(fruitMap.id)}
                                                    >
                                        <strong >X</strong></button>
                        </td>
                    </tr>
                ))}
        </tbody>
    </table>

</div>
    
}