import React from "react";

const ItemDetail = ({item}) => {

    const { title, category, price, description, pictureUrl } = item;

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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ItemDetail;
