import React, { useState, useContext } from 'react';
import { CartContext } from "../context/CartContext";

const ItemCount = (props) => {
    const { initial, setCantidadCount, setShowItemCount, item } = props;
    const [cantidad, setCantidad] = useState(initial);
    const [botonSumar, setBotonSumar] = useState(false);
    const [botonRestar, setBotonRestar] = useState(true);
    const [botonAgregar, setBotonAgregar] = useState(false);
    const { addItem } = useContext(CartContext);

    const onSumar = () => {
        if (cantidad >= initial) {
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
        setCantidadCount(cantidad);
        setShowItemCount(false);
    }

    return (
        <>
            <div className="cantidad">
                <button type="button" onClick={onSumar} className="boton" disabled={botonSumar}><i className="fas fa-plus"></i></button>
                <input type="number" className="form-control d-inline" aria-label="Cantidad" value={cantidad} disabled={true} />
                <button type="button" onClick={onRestar} className="boton" disabled={botonRestar} ><i className="fas fa-minus"></i></button>
                <button type="button" onClick={() => { addItem(item, cantidad, onAdd) }} className="boton mx-3" disabled={botonAgregar}><i className="fas fa-cart-plus"></i>Agregar al carrito</button>
            </div>
        </>
    )
}

export default ItemCount;