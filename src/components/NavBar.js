import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <header>
            <div className="container">
                <nav className="navbar navbar-expand-md navbar-light bg-transparent">
                    <a className="navbar-brand logo" href="#"><img className="img-fluid" src="logo.png"
                        alt="Logo de Beauty Store" title="Logo de Beauty Store" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item"><a href="#" className="active">Inicio</a></li>
                            <li className="nav-item dropdown">
                                <a className="dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Categorías
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Belleza y
                                        Cuidado de la Piel</a></li>
                                    <li><a className="dropdown-item" href="#">Nutrición</a></li>
                                    <li><a className="dropdown-item" href="#">Medicamentos</a></li>
                                </ul>
                            </li>
                            <li className="nav-item"><a href="#">Blog</a></li>
                            <li className="nav-item"><a href="#"><CartWidget /></a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}
export default NavBar;