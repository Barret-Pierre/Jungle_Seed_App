import "../styles/Categories.css"
import { useState } from "react";

function Categories({ cats, cat, updateCat, capitalizeFirstLetter}) {

    function addToCat(value) {
        console.log(cat)
        console.log(value)
        if (value === "undefined") {
            updateCat([...cats])
        } else {
            updateCat([value])
        }
        console.log(useState.cat)
        console.log(cats)
    }

    return (
        <div className="js-categories">
            <h2>Filtrez vos envies</h2>
            < select name="category" onChange={(e) => addToCat(e.target.value)} className="js-categories-select">
                <option key="undefined" value="undefined">Catégorie</option>
                {
                    cats.map(catt =>
                    (
                        <option key={catt} value={catt}>{capitalizeFirstLetter(catt)}</option>
                    ))
                }
            </select >
        </div>
    )
}

export default Categories