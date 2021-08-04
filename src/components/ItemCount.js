import React, { useState } from 'react';

const ItemCount = (props) => {
    const [initial, setContador] = useState(props.initial);
    const [stock] = useState(props.stock);
    const [botonSumar, setBotonSumar] = useState(false);
    const [botonRestar, setBotonRestar] = useState(true);
    const [botonAgregar, setBotonAgregar] = useState(false);


    const onSumar = () => {
        if (initial >= props.initial && initial <= stock - 1) {
            setContador(initial + 1);
            setBotonRestar(false);
        } else {
            setBotonSumar(true);
            setBotonAgregar(true);
        }
    }

    const onRestar = () => {
        if (initial >= props.initial + 1) {
            setContador(initial - 1);
            setBotonSumar(false);
        } else {
            setBotonRestar(true);
        }
    }

    const onAdd = () => {
        if (stock == 0) {
            setBotonAgregar(true);
        } else {
            const cantidadProducto = document.querySelector('p');
            cantidadProducto.textContent = initial;
        }
    }

    return (
        <article>
            <h2 className="h3">Nombre de producto</h2>
            <div className="cantidad">
                <button type="button" onClick={onSumar} className="boton" disabled={botonSumar}><i className="fas fa-plus"></i></button>
                <input type="number" className="form-control d-inline" aria-label="Cantidad" value={initial} disabled={true} />
                <button type="button" onClick={onRestar} className="boton" disabled={botonRestar} ><i className="fas fa-minus"></i></button>
            </div>
            <a onClick={onAdd} className="boton" disabled={botonAgregar}><i className="fas fa-cart-plus"></i>Agregar al carrito</a>
            <p></p>
        </article>
    )
}

export default ItemCount;