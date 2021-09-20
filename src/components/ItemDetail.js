import React, { useState }from "react";
import ItemCount from "./ItemCount";
import { NavLink } from 'react-router-dom';

const ItemDetail = ({ item }) => {
    const { title, categoryName, price, description, pictureUrl } = item;
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
                                    src={`../imagenes/${categoryName}/${pictureUrl}`} 
                                    alt={title} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="producto">
                            <h2>{title}</h2>
                            <p>{description}</p>
                            <span className="precio">$ {price}</span>
                            <ItemCount setCantidadCount={setCantidadCount} setShowItemCount={setShowItemCount} initial={1} item={item}/>
                            {!showItemCount && <><p className="mt-3">Se han agregado <strong> {cantidadCount} </strong>{title} al carrito</p> <NavLink to={'/cart'} className="boton"><i className="fas fa-cash-register"></i>Terminar mi compra</NavLink></>}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ItemDetail;
