import React, { useState, useEffect } from 'react';
import Item from './Item';
import { NavLink } from 'react-router-dom';
import { getFirestore } from '../firebase';

const ItemList = ({ categoria, categoryId }) => {
    const [categoryProducts, setCategoryProducts] = useState([]);
    const [categoryTitle, setCategoryTitle] = useState([]);

    const { name, category } = categoria;

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = db.collection("items");
        if (!categoryId) {
            const categoryNoParam = itemsCollection.where('categoryName', '==', name).limit(3);
            categoryNoParam.get().then(querySnapshot => {
                if (querySnapshot.size === 0) {
                    console.log("No se encontraron items");
                }
                setCategoryProducts(querySnapshot.docs.map(producto => <Item key={producto.id} item={producto.data()} id={producto.id} />));
                setCategoryTitle(category);
            })
            .catch((error) => console.log(error));
        } else {
            const categoryFromParam = itemsCollection.where('categoryName', '==', categoryId);
            categoryFromParam.get().then(querySnapshot => {
                if (querySnapshot.size === 0) {
                    console.log("No se encontraron items");
                }
                setCategoryProducts(querySnapshot.docs.map(producto => <Item key={producto.id} item={producto.data()} id={producto.id} />));
                setCategoryTitle(category);
            })
            .catch((error) => console.log(error));
        }
    }, [categoryId]);

    return (
        <section className="categoria-productos">
            <div className="container">
                <h2>{categoryTitle}</h2>
                <div className="row flex">
                    {categoryProducts}
                </div>
                {!categoryId && <NavLink className="boton" to={`/categories/${name}`}>Ver más productos de {categoryTitle}</NavLink>}
            </div>
        </section>
    );
}

export default ItemList;