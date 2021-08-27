import React, { useState, useContext, useEffect } from 'react';
import { CartContext } from "../context/CartContext";
import CartItem from './CartItem';
import { NavLink } from 'react-router-dom';

const Cart = () => {
    const { carrito } = useContext(CartContext);
    const [productosCarrito, setProductosCarrito] = useState([]);
    const [subtotalCarrito, setSubtotalCarrito] = useState(0);
    const [iva, setIva] = useState(0.19);
    const [gastosEnvio, setGastosEnvio] = useState(10000);
    const [totalCarrito, setTotalCarrito] = useState(0);
    const [sinProductos, setSinProductos] = useState(true);

    console.log(carrito);

    const totales = () => {
        let subtotales = carrito.map((producto) => {
            return producto.cantidad * producto.item.price;
        });
        
        let subtotal = subtotales.reduce((a, b) => a + b);
        console.log(subtotal);
        setSubtotalCarrito(subtotal);
        
        let total = subtotal + (subtotal * iva) + gastosEnvio;
        console.log(total);
        setTotalCarrito(total);
    }

    useEffect(() => {
        console.log(carrito.length);
        if (carrito.length > 0) {
            setProductosCarrito(carrito.map(producto => <CartItem key={producto.item.id} producto={producto} />))
            totales();
        }
    }, []);

    return (<>
        <main>
            <h1>Medicamentos, productos de belleza y de cuidado de la piel</h1>
            <section className="container-lg">
                <h2>Carrito</h2>
                <div className="carrito table-responsive">
                    <table id="tabla-carrito" className="table text-center">
                        <thead>
                            <tr>
                                <th>Imagen</th>
                                <th className="producto-carrito">Producto</th>
                                <th>Cantidad</th>
                                <th>Precio</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {carrito.length === 0 ? <tr id="sin-productos"><td colSpan="5">No hay productos en el carrito <br /><NavLink to={'/'} className="boton">Volver al catálogo</NavLink></td></tr> : productosCarrito}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="2"></td>
                                <td>
                                    <h3>Subtotal</h3>
                                </td>
                                <td id="subtotal">$ {subtotalCarrito}</td>
                                <td></td>
                            </tr>
                            <tr>
                            <td colSpan="2"></td>
                                <td>
                                    <h3>IVA (19%)</h3>
                                </td>
                                <td id="iva">$ {subtotalCarrito * iva}</td>
                                <td></td>
                            </tr>
                            <tr>
                            <td colSpan="2"></td>
                                <td>
                                    <h3>Gastos de envío</h3>
                                </td>
                                <td id="gastos-envio">$ {gastosEnvio}</td>
                                <td></td>
                            </tr>
                            <tr>
                            <td colSpan="2"></td>
                                <td>
                                    <h3>TOTAL</h3>
                                </td>
                                <td id="total-compra">$ {totalCarrito}</td>
                                <td></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </section>
        </main>
    </>
    )
}

export default Cart;