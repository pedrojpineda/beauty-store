import React from 'react';
import NavBar from './NavBar';
//import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';

const App = () => {
    return <>
        <NavBar />
        {/*<ItemListContainer greeting='Medicamentos, productos de belleza y de cuidado de la piel' />*/}
        <ItemDetailContainer greeting='Medicamentos, productos de belleza y de cuidado de la piel' productoId={3} />
    </>
}

export default App;