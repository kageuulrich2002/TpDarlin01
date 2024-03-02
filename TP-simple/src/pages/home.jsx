
export default function Home({fruits, setFruits}) {

    return<div className="">
        <table className="table table-hover table-bordered">
            <thead className="table-dark">
                <tr>
                    <th>NameFruits</th> <th>PrixFruits</th> <th>QuantitéFruits</th>
                </tr>
            </thead>
            <tbody>
                    {fruits.map((fruitMap, index) =>(
                        <tr key={index}>
                            <td key={fruitMap.id}><strong>{fruitMap.name}</strong></td>
                            <td key={fruitMap.id}  className="text-primary"><strong>{fruitMap.prix}</strong></td>
                            <td key={fruitMap.id}>{fruitMap.quantité}</td>
                        </tr>
                    ))}
            </tbody>
        </table>

    </div>
}