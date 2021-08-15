import React from 'react';
import { NavLink } from 'react-router-dom';

const Item = ({item}) => {

    const { id, category, pictureUrl, title, description, price } = item;

    return (
        <div className="col-lg-4 col-md-6 col-sm-6">
            <NavLink to={`/item/${id}`}>
                <article>
                    <img className="img-fluid" src={`../imagenes/${category}/${pictureUrl}`} alt={title} />
                    <h2 className="h3">{title}</h2>
                    <p>{description}</p>
                    <span className="precio">$ {price}</span>
                </article>
            </NavLink>
        </div>
    );
}

export default Item;