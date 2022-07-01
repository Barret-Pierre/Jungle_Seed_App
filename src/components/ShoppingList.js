import "../styles/ShoppingList.css"
import { plantList } from "../datas/plantList.js"
import CareScale from "./CareScale"

function ShoppingList() {
    const cats = plantList.reduce(
        (prev, curr) =>
            prev.includes(curr.category) ? prev : prev.concat(curr.category),
        []
    )

    return (
        <div>
            <ul>
                {cats.map(cat =>
                (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
            <ul className="js-plant-list">
                {plantList.map((plant) =>
                (
                    <li key={plant.id} className="js-plant-item">
                        {plant.name}
                        <CareScale careType="light" scaleValue={plant.light}/>
                        <CareScale careType="water" scaleValue={plant.water}/>
                        {plant.isSpecialOffer && <div className="js-sales">Soldé !</div>}
                    </li>

                ))}
            </ul>
        </div>
    )
}

export default ShoppingList