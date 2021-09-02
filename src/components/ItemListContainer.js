import React, { useState, useEffect } from 'react';
import ItemList from './ItemList'
import { getFirestore } from '../firebase';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [category, setCategory] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const categoriesCollection = db.collection("categories");
        if (!categoryId) {
            categoriesCollection.get().then(querySnapshot => {
                if (querySnapshot.size === 0) {
                    console.log("No se encontraron categorías");
                };
                setCategory(querySnapshot.docs.map(category => <ItemList key={category.data().name} categoryId={categoryId} categoria={category.data()} />));
            })
                .catch((error) => console.log(error));
        } else {
            const categoryFromParam = categoriesCollection.where('name', '==', categoryId);
            categoryFromParam.get().then(querySnapshot => {
                if (querySnapshot.size === 0) {
                    console.log("No se encontró la categoría");
                };
                setCategory(querySnapshot.docs.map(category => <ItemList categoryId={categoryId} categoria={category.data()} />));
            })
            .catch((error) => console.log(error));
        };
    }, [categoryId]);

    return (
        <main>
            <h1>Medicamentos, productos de belleza y de cuidado de la piel</h1>
            {category}
        </main>
    );
}

export default ItemListContainer;