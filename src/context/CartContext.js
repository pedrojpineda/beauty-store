import React, { createContext, useState, useEffect } from "react";
import { getFirestore } from '../firebase';
import firebase from "firebase/app";
import "firebase/firestore";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    const [orderId, setOrderId] = useState(null);
    const [iva, setIva] = useState(0.19);
    const [gastosEnvio, setGastosEnvio] = useState(10000);

    useEffect(() => {
        console.log("carrito", carrito);
    }, [carrito]);

    const subtotalCarrito = () => {
        if (carrito.length > 0) {
            let subtotales = carrito.map((producto) => {
                return producto.cantidad * producto.item.price;
            });

            let subtotal = subtotales.reduce((a, b) => a + b);
            return subtotal;
        }
        else {
            return 0;
        }
    }

    const totalCarrito = () => {
        let total = subtotalCarrito() + (subtotalCarrito() * iva) + gastosEnvio;
        return total;
    }

    const cantidadesCarrito = () => {
        if (carrito.length > 0) {
            let cantidades = carrito.map((producto) => {
                return producto.cantidad;
            });

            let cantidadTotal = cantidades.reduce((a, b) => a + b);
            return cantidadTotal;
        }
    }

    const addItem = (item, cantidad, onAdd) => {
        const isInCart = carrito.some(producto => producto.item.id === item.id);
        if (!isInCart) {
            setCarrito([...carrito, { item: item, cantidad: cantidad }]);
        } else {
            setCarrito(carrito.map((producto) => {
                if (producto.item.id === item.id) producto.cantidad = producto.cantidad + cantidad;
                return producto;
            }))
        }
        onAdd();
    }

    const removeItem = (id) => {
        let confirmaEliminar = window.confirm('¿Estás seguro que deseas eliminar este producto del carrito?');
        if (confirmaEliminar) {
            setCarrito(carrito.filter(producto => producto.item.id !== id));
        }
    };

    const clear = () => {
        let confirmaEliminar = window.confirm('¿Estás seguro que deseas eliminar todos los productos del carrito?');
        if (confirmaEliminar) {
            setCarrito([]);
        }
    };

    const addOrder = () => {
        const newOrder = {
            buyer: {
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value
            },
            items: carrito.map(({ item, cantidad }) => ({
                item: {
                    id: item.id,
                    title: item.title,
                    price: item.price
                },
                cantidad: cantidad
            })),
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: totalCarrito()
        };

        const db = getFirestore();
        const orders = db.collection("orders");
        const batch = db.batch();

        orders.add(newOrder).then(({ id }) => {
            carrito.forEach(({ item, cantidad }) => {
                const docRef = db.collection("items").doc(item.id);
                batch.update(docRef, {stock: item.stock - cantidad})
            });
            batch.commit();
            setOrderId(id);
            alert('Su pedido ha sido creado con el identificador ' + id);
            
        }).catch(err => {
            console.log(err);
        });
    };



    return <CartContext.Provider value={{ carrito, addItem, removeItem, clear, cantidadesCarrito, subtotalCarrito, iva, gastosEnvio, totalCarrito, addOrder }}>
        {children}
    </CartContext.Provider>
}