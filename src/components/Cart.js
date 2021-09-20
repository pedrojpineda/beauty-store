import React, { useState, useContext, useEffect } from 'react';
import { CartContext } from "../context/CartContext";
import CartItem from './CartItem';
import { NavLink } from 'react-router-dom';

const Cart = () => {
    const { carrito, subtotalCarrito, iva, gastosEnvio, totalCarrito, clear, addOrder, orderId } = useContext(CartContext);
    const [productosCarrito, setProductosCarrito] = useState([]);
    const [buttonDisable, setButtonDisable] = useState(true);
    const [emailConfirm, setEmailConfirm] = useState(false);

    useEffect(() => {
        setProductosCarrito(carrito.map(producto => <CartItem key={producto.item.id} producto={producto} />))
    }, [carrito]);

    const confirmAll = () => {
        const user = {
            name: document.getElementById('name').value,
            lastname: document.getElementById('lastname').value,
            phone: document.getElementById('phone').value,
            email1: document.getElementById('email1').value,
            email2: document.getElementById('email2').value
        }
        if (user.name !== '' && user.lastname !== '' && user.phone !== '' && user.email1 !== '' && user.email2 !== '' && user.email1 === user.email2) {
            setButtonDisable(false);
        } 
        else {
            setButtonDisable(true);
        }
        
        if (user.email1 === user.email2) {
            setEmailConfirm(false);
        } else {
            setEmailConfirm(true);
        }
    }

    return (<>
        <main>
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
                                    <td><button type="button" onClick={() => { clear() }}>
                                        <i className="fas fa-trash"></i><br />Vaciar<br />carrito</button>
                                    </td>
                                </tr>
                            </tfoot>
                        </> : <></>}
                    </table>
                </div>
                {carrito.length > 0 ? <>
                    <h2 className="mt-5">Registra tus datos</h2>
                    <form onSubmit={addOrder}>
                        <div className="row g-3 justify-content-center text-center">
                            <div className="col-auto">
                                <label for="name" className="col-form-label fw-bold">Nombre(s)</label>
                                <input type="text" id="name" name="name" className="form-control" onKeyUp={confirmAll} required />
                            </div>
                            <div className="col-auto">
                                <label for="lastname" className="col-form-label fw-bold">Apellidos</label>
                                <input type="text" id="lastname" name="lastname" className="form-control" onKeyUp={confirmAll} required />
                            </div>
                            <div className="col-auto">
                                <label for="phone" className="col-form-label fw-bold">Teléfono</label>
                                <input type="number" id="phone" name="phone" className="form-control" onKeyUp={confirmAll} required />
                            </div>
                            <div className="col-auto">
                                <label for="email1" className="col-form-label fw-bold">Email</label>
                                <input type="email" id="email1" name="email1" className="form-control" onKeyUp={confirmAll} required />
                            </div>
                            <div className="col-auto">
                                <label for="email2" className="col-form-label fw-bold">Confirmación de Email</label>
                                <input type="email" id="email2" name="email2" className="form-control" onKeyUp={confirmAll} required />
                                {emailConfirm && <p className="text-center text-danger">El email no coincide</p>}
                            </div>
                            <button type="submit" className="boton" disabled={buttonDisable}>Realizar compra</button>
                        </div>
                    </form>
                </> : <></>}
                {orderId &&
                    <div class="alert alert-success mt-5 text-center" role="alert">
                        Su pedido ha sido creado con el identificador <strong>{orderId}</strong>
                    </div>
                }
            </section>
        </main>
    </>
    )
}

export default Cart;