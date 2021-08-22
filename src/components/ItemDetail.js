import React, { useState, useEffect }from "react";
import ItemCount, {} from "./ItemCount";
import { NavLink } from 'react-router-dom';

const ItemDetail = ({item}) => {
    const { title, category, price, description, pictureUrl } = item;
    const [ cantidadCount, setCantidadCount ] = useState(0);
    const [ showItemCount, setShowItemCount ] = useState(true);

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="producto text-center">
                            <div>
                                <img className="img-fluid"
                                    src={`../imagenes/${category}/${pictureUrl}`} 
                                    alt={title} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="producto">
                            <h2>{title}</h2>
                            <p>{description}</p>
                            <span className="precio">$ {price}</span>
                            {showItemCount && <ItemCount setCantidadCount={setCantidadCount} setShowItemCount={setShowItemCount} initial={1} stock={5} />}
                            {!showItemCount && <><p>Se han agregado <strong> {cantidadCount} </strong>{title} al carrito</p> <NavLink to={'/cart'} className="boton"><i class="fas fa-cash-register"></i>Terminar mi compra</NavLink></>}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ItemDetail;
