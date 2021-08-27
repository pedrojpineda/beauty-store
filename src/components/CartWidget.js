import React, { useContext, useEffect } from 'react';
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
    const { cantidadesCarrito } = useContext(CartContext);

    return (<>
        {cantidadesCarrito() > 0 ? <><i className="fas fa-shopping-cart"></i>{cantidadesCarrito()}</> : <></>}
    </>
    )
}

export default CartWidget;