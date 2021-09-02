import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({ producto }) => {

    const { carrito, removeItem } = useContext(CartContext);
    const { item, cantidad } = producto;

    if (carrito.find(product => product.item === item)) {
        return (
            <tr>
                <td>
                    <img className="img-fluid" src={`../imagenes/${item.categoryName}/${item.pictureUrl}`} alt={item.title} />
                </td>
                <td className="producto-carrito">
                    <h2 className="h3">{item.title}</h2>
                </td>
                <td>
                    {cantidad}
                </td>
                <td>$ {item.price * cantidad}</td>
                <td><a href="#" onClick={() => { removeItem(item.id) }}><i className="fas fa-trash"></i></a></td>
            </tr>
        );
    }
    return (
        <></>
    );
}

export default CartItem;