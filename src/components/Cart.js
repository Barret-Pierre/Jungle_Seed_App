function Cart() {
    let cart = [
        {
            "name": "Monstera",
            "value": 8
        },
        {
            "name": "Lierre",
            "value": 10
        },
        {
            "name": "Bouquet de fleur",
            "value": 15
        }
    ];

    function totalCart() {
        let total = 0;
        cart.forEach(plant => {
            total += plant.value;
        });
        return total;
    };

    return (
        <div>
            <ul>
                <li> Le {cart[0].name} coûte : {cart[0].value} € </li>
                <li> Le {cart[1].name} coûte : {cart[1].value} € </li>
                <li> Le {cart[2].name} coûte : {cart[2].value} € </li>
            </ul>
            <p> Le total du pannier est de : {totalCart()} € </p>
        </div>
    )
}

export default Cart;