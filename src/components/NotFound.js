import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <main className="text-center">
            <h2 className="pt-5 mb-3">Este producto no existe en nuestra base de datos</h2>
            <NavLink to={'/'} className="boton mb-5">Volver al catálogo</NavLink>
        </main>
    );
}

export default NotFound;