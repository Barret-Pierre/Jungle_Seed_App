import "../styles/ShoppingList.css"
import { plantList } from "../datas/plantList.js"
import PlantItem from "./PlantItem"

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
                    <PlantItem 
                    name={plant.name} 
                    cover={plant.cover} 
                    id={plant.id} 
                    light={plant.light}
                    water={plant.water}
                    isSpecialOffer={plant.isSpecialOffer}
                    />

                ))}
            </ul>
        </div>
    )
}

export default ShoppingList