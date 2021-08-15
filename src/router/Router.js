import React from 'react';
import {BrowserRouter, Switch, Route, Link}  from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer';
import NavBar from '../components/NavBar';
import NotFound from '../components/NotFound';

const Router = () => {
    return (
        <BrowserRouter>
        <NavBar />
            <Switch>
                <Route exact path="/">
                    <ItemListContainer greeting='Medicamentos, productos de belleza y de cuidado de la piel' />
                </Route>
                <Route path="/detalle">
                    <ItemDetailContainer greeting='Medicamentos, productos de belleza y de cuidado de la piel' productoId={3} />
                </Route>
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;