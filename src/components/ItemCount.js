import React, { useState, useContext } from 'react';
import { CartContext } from "../context/CartContext";

const ItemCount = (props) => {
    const { initial, stock, setCantidadCount, setShowItemCount, item } = props;
    const [cantidad, setCantidad] = useState(initial);
    const [inventario, setStock] = useState(stock);
    const [botonSumar, setBotonSumar] = useState(false);
    const [botonRestar, setBotonRestar] = useState(true);
    const [botonAgregar, setBotonAgregar] = useState(false);
    const { addItem, removeItem, clear } = useContext(CartContext);

    const onSumar = () => {
        if (cantidad >= initial && cantidad <= inventario - 1) {
            setCantidad(cantidad + 1);
            setBotonRestar(false);
        } else {
            setBotonSumar(true);
            setBotonAgregar(true);
        }
    }

    const onRestar = () => {
        if (cantidad >= initial + 1) {
            setCantidad(cantidad - 1);
            setBotonSumar(false);
        } else {
            setBotonRestar(true);
        }
    }

    const onAdd = () => {
        if (inventario === 0) {
            setBotonAgregar(true);
        } else {
            setCantidadCount(cantidad);
            setShowItemCount(false); 
        }
    } 

    return (
        <>
            <div className="cantidad">
                <button type="button" onClick={onSumar} className="boton" disabled={botonSumar}><i className="fas fa-plus"></i></button>
                <input type="number" className="form-control d-inline" aria-label="Cantidad" value={cantidad} disabled={true} />
                <button type="button" onClick={onRestar} className="boton" disabled={botonRestar} ><i className="fas fa-minus"></i></button>
                <button type="button" onClick={() => {addItem(item, cantidad, onAdd)}} className="boton" disabled={botonAgregar}><i className="fas fa-cart-plus"></i>Agregar al carrito</button>
                {/* BOTONES PARA PROBAR MÉTODOS */}
                {/*<button type="button" onClick={() => {removeItem(item)}} className="boton"><i className="fas fa-minus"></i>Borrar del carrito</button>*/}
                {/*<button type="button" onClick={() => {clear()}} className="boton"><i className="fas fa-trash"></i>Vaciar carrito</button>*/}
            </div>
        </>
    )
}

export default ItemCount;