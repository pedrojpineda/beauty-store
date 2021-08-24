import React from 'react';
import { NavLink } from 'react-router-dom';

const Item = ({ item }) => {

    const { key, id, category, pictureUrl, title, description, price } = item;

    return (
        <div className="col-lg-4 col-md-6 col-sm-6">
            <article>
                <NavLink to={`/item/${id}`}><img className="img-fluid" src={`../imagenes/${category}/${pictureUrl}`} alt={title} /></NavLink>
                <h2 className="h3"><NavLink to={`/item/${id}`}>{title}</NavLink></h2>
                <p>{description}</p>
                <span className="precio">$ {price}</span>
            </article>
        </div>
    );
}

export default Item;