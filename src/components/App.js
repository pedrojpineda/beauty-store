import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer';
import NavBar from '../components/NavBar';
import Cart from './Cart';
import { CartProvider } from "../context/CartContext"
import Footer from './Footer';

const App = () => {

    return (<>
        <CartProvider>
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={ItemListContainer} />
                    <Route path="/categories/:categoryId" component={ItemListContainer} />
                    <Route path="/item/:itemId" component={ItemDetailContainer} />
                    <Route path="/cart" component={Cart} />
                </Switch>
                <Footer />
            </BrowserRouter>
        </CartProvider>
    </>
    )
}

export default App;