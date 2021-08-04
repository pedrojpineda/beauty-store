import React from 'react';
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';

const App = () => {
    return <>
        <NavBar />
        <ItemListContainer greeting='Medicamentos, productos de belleza y de cuidado de la piel' />
    </>
}

export default App;