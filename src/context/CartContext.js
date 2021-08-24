import React, { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const addItem = ( item, cantidad) => {
        const existe = carrito.some(producto => producto.item.id === item.id);
        console.log(existe); 
        if (!existe) {
            carrito.push({ item: item, quantity: cantidad });
            console.log(carrito);
        } else {
            let productoCarrito = carrito.find(producto => producto.item.id === item.id);
            productoCarrito.quantity = productoCarrito.quantity + cantidad;  
            console.log(carrito);
        }
    }

    const removeItem = ( item ) => {
        let indexProducto = carrito.findIndex(producto => producto.item.id === item.id);
        console.log(indexProducto); 
        carrito.splice(carrito[indexProducto], 1);
        console.log(carrito);
    }

    return <CartContext.Provider value={{ addItem, removeItem }}>
        {children}
    </CartContext.Provider>
}