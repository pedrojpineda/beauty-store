import React, { useState } from 'react';

const ItemCount = (props) => {
    const {initial, stock, setCantidadCount, setShowItemCount } = props;
    const [cantidad, setCantidad] = useState(initial);
    const [inventario, setStock] = useState(stock);
    const [botonSumar, setBotonSumar] = useState(false);
    const [botonRestar, setBotonRestar] = useState(true);
    const [botonAgregar, setBotonAgregar] = useState(false);

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
        if (inventario == 0) {
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
                <a onClick={onAdd} className="boton" disabled={botonAgregar}><i className="fas fa-cart-plus"></i>Agregar al carrito</a>
            </div>
            
        </>
    )
}

export default ItemCount;