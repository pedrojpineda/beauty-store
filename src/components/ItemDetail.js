import React from "react";

const ItemDetail = (props) => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="producto text-center">
                            <div>
                                <img className="img-fluid"
                                    src={"./imagenes/" + props.pictureUrl} 
                                    alt={props.title} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="producto">
                            <h2>{props.title}</h2>
                            <p>{props.description}</p>
                            <span className="precios">$ {props.price}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ItemDetail;
