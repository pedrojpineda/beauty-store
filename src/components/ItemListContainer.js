import React from 'react';

class ItemListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            greeting: 'Medicamentos, productos de belleza y de cuidado de la piel'
        };
    }

    render() {
        let styles = {
            textAlign: 'center',
            background: '#00a79d',
            color: 'white',
            padding: 10,
            fontWeight: 700,
            fontSize: 30
        };
        
        return (
            <h1 style={styles}>{this.state.greeting}</h1>
        );
    }
}

export default ItemListContainer;