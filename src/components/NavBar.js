import React from 'react';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <div className="container">
                <nav className="navbar navbar-expand-md navbar-light bg-transparent">
                    <NavLink to={'/'} className="navbar-brand logo"><img className="img-fluid" src="../imagenes/logo.png"
                        alt="Logo de Beauty Store" title="Logo de Beauty Store" /></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item"><NavLink to={'/'} className="active">Inicio</NavLink></li>
                            <li className="nav-item dropdown">
                                <a className="dropdown-toggle" href="/" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Categorías
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><NavLink to={'/category/belleza-cuidado-piel'} className="dropdown-item">Belleza y
                                        Cuidado de la Piel</NavLink></li>
                                    <li><NavLink to={'/category/nutricion'} className="dropdown-item">Nutrición</NavLink></li>
                                    <li><NavLink to={'/category/medicamentos'} className="dropdown-item">Medicamentos</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item"><a href="/">Blog</a></li>
                            <li className="nav-item"><NavLink to={'/cart'}><CartWidget /></NavLink></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}
export default NavBar;