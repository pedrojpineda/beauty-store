import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    useEffect(() => {
        console.log("carrito", carrito);
    }, [carrito]);

    const addItem = ( item, cantidad, onAdd ) => {
        const isInCart = carrito.some(producto => producto.item.id === item.id);
        if (!isInCart) {
            setCarrito([...carrito, { item: item, cantidad: cantidad }]);
        } else {
            carrito.map((producto) => {
                if (producto.item.id === item.id) producto.cantidad = producto.cantidad + cantidad;
                return producto;
            })
        }
        onAdd();
    }

    const removeItem = ( item ) => {
        setCarrito(carrito.filter( producto => producto.item.id !== item.id));
        console.log(carrito);
    };
   
    const clear = () => setCarrito([]);

    return <CartContext.Provider value={{ addItem, removeItem, clear }}>
        {children}
    </CartContext.Provider>
}