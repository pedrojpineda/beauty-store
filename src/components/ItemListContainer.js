import React from 'react';
import ItemList from './ItemList';

const ItemListContainer = (props) => {
    return (
        <main>
            <h1>{props.greeting}</h1>
            <ItemList />
        </main>
    );
}

export default ItemListContainer;