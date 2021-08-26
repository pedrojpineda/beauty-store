import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer';
import NavBar from '../components/NavBar';
import NotFound from '../components/NotFound';
import Cart from './Cart';
import { CartProvider } from "../context/CartContext"

const App = () => {

    return (<>
        <CartProvider>
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={ItemListContainer} />
                    <Route path="/category/:categoryId" component={ItemListContainer} />
                    <Route path="/item/:itemId" component={ItemDetailContainer} />
                    <Route path="/cart" component={Cart} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </BrowserRouter>
        </CartProvider>
    </>
    )
}

export default App;