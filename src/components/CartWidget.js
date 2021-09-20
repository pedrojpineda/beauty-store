import React, { useContext } from 'react';
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
    const { cantidadesCarrito } = useContext(CartContext);

    return (<>
        <i className="fas fa-shopping-cart"></i>{cantidadesCarrito()}
    </>
    )
}

export default CartWidget;