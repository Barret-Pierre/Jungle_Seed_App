import { useState, useEffect } from "react";
import "../styles/Cart.css"

function Cart({ cart, updateCart }) {

    const [isOpen, setIsOpen] = useState(true)
    const items = Object.keys(cart)
    const total = items.reduce(
        (curr, item) => curr + cart[item].amount * cart[item].price, 0)

    useEffect(() => {
        document.title = `JS: ${total}€ d'achat`
    }, [total])

    return isOpen ? (
        <div className="js-cart">
            <button onClick={() => setIsOpen(false)} className="js-cart-toggle-button">Fermer</button>
            {cart.length > 0 ? (
                <div>
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
                <div>Votre Pannier est vide</div>
            )}
        </div>
    ) : (
        <div className="js-cart-closed">
            <button onClick={() => setIsOpen(true)} className="js-cart-toggle-button">Ouvrir le pannier</button>
        </div>

    )

}

export default Cart;