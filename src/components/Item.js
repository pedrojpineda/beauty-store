import React from 'react';
import { NavLink } from 'react-router-dom';

const Item = ({ item, id }) => {

    const { categoryName, pictureUrl, title, price } = item;

    return (
        <div className="col-lg-4 col-md-6 col-sm-6">
            <article>
                <NavLink to={`/item/${id}`}><img className="img-fluid" src={`../imagenes/${categoryName}/${pictureUrl}`} alt={title} /></NavLink>
                <h3><NavLink to={`/item/${id}`}>{title}</NavLink></h3>
                <span className="precio">$ {price}</span>
            </article>
        </div>
    );
}

export default Item;