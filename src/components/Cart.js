import React, { useState, useContext, useEffect } from 'react';
import { CartContext } from "../context/CartContext";
import CartItem from './CartItem';
import { NavLink } from 'react-router-dom';

const Cart = () => {
    const { carrito, subtotalCarrito, iva, gastosEnvio, totalCarrito, clear } = useContext(CartContext);
    const [productosCarrito, setProductosCarrito] = useState([]);

    useEffect(() => {
        setProductosCarrito(carrito.map(producto => <CartItem key={producto.item.id} producto={producto} />))
    }, [carrito]);

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
                            {carrito.length === 0 ? <tr><td colSpan="5">No hay productos en el carrito <br /><NavLink to={'/'} className="boton">Volver al catálogo</NavLink></td></tr> : productosCarrito}
                        </tbody>
                        {carrito.length > 0 ? <>
                            <tfoot>
                                <tr>
                                    <td colSpan="2"></td>
                                    <td>
                                        <h3>Subtotal</h3>
                                    </td>
                                    <td id="subtotal">$ {subtotalCarrito()}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td colSpan="2"></td>
                                    <td>
                                        <h3>IVA (19%)</h3>
                                    </td>
                                    <td id="iva">$ {subtotalCarrito() * iva}</td>
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
                                    <td id="total-compra">$ {totalCarrito()}</td>
                                    <td><a href="#" onClick={() => { clear() }}>
                                        <i className="fas fa-trash"></i><br />Vaciar<br />carrito</a>
                                    </td>
                                </tr>
                            </tfoot>
                        </> : <></>}
                    </table>
                </div>
            </section>
        </main>
    </>
    )
}

export default Cart;