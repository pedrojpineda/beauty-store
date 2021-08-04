import React from 'react';
import ItemCount from './ItemCount';

const ItemListContainer = (props) => {
    return (
        <main>
            <h1>{props.greeting}</h1>
            <section className="categoria-productos">
                <div className="container">
                    <div className="row flex">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <ItemCount stock={5} initial={1}/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default ItemListContainer;