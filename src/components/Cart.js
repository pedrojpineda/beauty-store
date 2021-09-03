import React, { useState, useContext, useEffect } from 'react';
import { CartContext } from "../context/CartContext";
import CartItem from './CartItem';
import { NavLink } from 'react-router-dom';

const Cart = () => {
    const { carrito, subtotalCarrito, iva, gastosEnvio, totalCarrito, clear, addOrder } = useContext(CartContext);
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
                <form>
                    <div className="row g-3 align-items-center justify-content-center text-center">
                        <div className="col-auto">
                            <label for="name" className="col-form-label">Nombre y Apellidos</label>
                        </div>
                        <div className="col-auto">
                            <input type="text" id="name" name="name" className="form-control" />
                        </div>
                        <div className="col-auto">
                            <label for="phone" className="col-form-label">Teléfono</label>
                        </div>
                        <div className="col-auto">
                            <input type="number" id="phone" name="phone" className="form-control" />
                        </div>
                        <div className="col-auto">
                            <label for="email" className="col-form-label">Email</label>
                        </div>
                        <div className="col-auto">
                            <input type="email" id="email" name="email" className="form-control" />
                        </div>
                        <a className="boton" onClick={() => {addOrder()}} type="button">Hacer pedido</a>
                    </div>
                </form>
            </section>
        </main>
    </>
    )
}

export default Cart;