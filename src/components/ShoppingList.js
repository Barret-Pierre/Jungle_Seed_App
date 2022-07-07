import "../styles/ShoppingList.css"
import { plantList } from "../datas/plantList.js"
import PlantItem from "./PlantItem"
import Categories from "./Categories"

import { useState } from "react";

function ShoppingList({ cart, updateCart }) {

    const cats = plantList.reduce(
        (prev, curr) =>
            prev.includes(curr.category) ? prev : prev.concat(curr.category),
        []
    )

    const [cat, updateCat] = useState([...cats])

    function addToCart(name, price, id) {
        const plantExiste = cart.find((plant) => plant.id === id)
        if (plantExiste !== undefined) {
            const allOtherPlant = cart.filter((plant) => plant.id !== id)
            updateCart([...allOtherPlant, {
                name: plantExiste.name,
                price: plantExiste.price,
                id: plantExiste.id,
                amount: plantExiste.amount + 1,
            }])
        } else {
            updateCart([...cart, {
                name: name,
                price: price,
                id: id,
                amount: 1,
            }])
        }
    }

    return (
        <div className="js-shopping-list">

            <Categories cats={cats} updateCat={updateCat} cat={cat}/>

            <ul className="js-plant-list">
                {plantList.map((plant) =>
                (
                    cat.includes(plant.category) && (
                        <div key={plant.id}>
                            <PlantItem
                                name={plant.name}
                                cover={plant.cover}
                                id={plant.id}
                                light={plant.light}
                                water={plant.water}
                                isSpecialOffer={plant.isSpecialOffer}
                            />
                            <button onClick={() => addToCart(plant.name, plant.price, plant.id)}>Ajouter</button>
                        </div>
                    )
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList