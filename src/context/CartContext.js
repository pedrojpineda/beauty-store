import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    useEffect(() => {
        console.log("carrito", carrito);
    }, [carrito]);

    const cantidadesCarrito = () => {
        if (carrito.length > 0) {
            let cantidades = carrito.map((producto) => {
                return producto.cantidad;
            });

            let cantidadTotal = cantidades.reduce((a, b) => a + b);
            console.log(cantidadTotal);
            return cantidadTotal;
        }
    }

    const addItem = (item, cantidad, onAdd) => {
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

    const removeItem = (id) => {
        let confirmaEliminar = window.confirm('¿Estás seguro que deseas eliminar este producto del carrito?');
        if (confirmaEliminar) {
            setCarrito(carrito.filter(producto => producto.item.id !== id));
            console.log(carrito);
        }
    };

    const clear = () => setCarrito([]);

    return <CartContext.Provider value={{ carrito, addItem, removeItem, clear, cantidadesCarrito }}>
        {children}
    </CartContext.Provider>
}