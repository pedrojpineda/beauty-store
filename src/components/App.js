import React from 'react';
import { BrowserRouter, Switch, Route }  from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer';
import NavBar from '../components/NavBar';
import NotFound from '../components/NotFound';

const App = () => {

    return (
        <BrowserRouter>
        <NavBar />
            <Switch>
                <Route exact path="/" component={ItemListContainer} />
                <Route path="/category/:categoryId" component={ItemListContainer} />
                <Route path="/item/:itemId" component={ItemDetailContainer} />
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;