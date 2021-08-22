import React, { useState, useEffect } from 'react';
import ItemList from './ItemList'
import { categories } from '../apis/dataBases';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [category, setCategory] = useState([]);
    const { categoryId } = useParams();
    
    useEffect(() => {
        if (!categoryId) {
            setCategory(categories.map(category => <ItemList categoria={category}/>));
        } else {
            setCategory(<ItemList categoria={categories.find( categoria => categoria.id === categoryId)}/>);
        };
    },[categoryId]);

    return (
        <main>
            <h1>Medicamentos, productos de belleza y de cuidado de la piel</h1>
            {category}
        </main>
    );
}

export default ItemListContainer;