import { useState } from "react";
import "../styles/Cart.css"

function Cart({cart, updateCart}) {
    
    const [isOpen, setIsOpen] = useState(false)
    const total = cart.reduce(
        (curr, plant) => curr + plant.amount*plant.price, 0)

    return isOpen ? (
        <div className="js-cart">
            <button onClick={() => setIsOpen(false)} className="js-cart-toggle-button">Fermer</button>
            <h2>Panier</h2>
            {cart.map((plant) =>
                (
                    <div key={plant.id}> 
                        {plant.name} {plant.price}€ X {plant.amount}
                    </div>
                ))}
            <h3>Total: {total}€</h3>
            <button onClick={() => updateCart([])} className="js-cart-add-button">Vider le pannier</button>
        </div>
    ) : (
        <div className="js-cart-closed">
            <button onClick={() => setIsOpen(true)} className="js-cart-toggle-button">Ouvrir le pannier</button>
        </div>
        
    )

}

export default Cart;