import React from 'react';

const Item = (props) => {

    return (
        <div className="col-lg-4 col-md-6 col-sm-6">
            <article>
                <img className="img-fluid" src={"./imagenes/" + props.pictureUrl} alt={props.title} />
                <h2 className="h3">{props.title}</h2>
                <p>{props.description}</p>
                <span className="precio">$ {props.price}</span>
            </article>
        </div>
    );
}

export default Item;