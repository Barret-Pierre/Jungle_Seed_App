import "../styles/Categories.css"
import { useState } from "react";

function Categories({cats, cat, updateCat}) {

    function addToCat(value) {
        console.log(cat)
        console.log(value)
        if(value === "undefined") {
            updateCat([...cats])
        } else {
            updateCat([value])
        }
        console.log(useState.cat)
        console.log(cats)
    }

    return (
        < select name="category" onChange={(e) => addToCat(e.target.value)} className="js-categories-select">
            <option key="undefined" value="undefined"> </option>
            {
                cats.map(catt =>
                (
                    <option key={catt} value={catt}>{catt}</option>
                    ))
                }
        </select >
    )
}

export default Categories