import React from 'react';

const Footer = () => {

    return (
        <footer>
        <div className="container-lg">
            <div className="row">
                <div className="col grid">
                    <div className="contacto">
                        <h2>Contacto</h2>
                        <h3>Canales de atención</h3>
                        <ul>
                            <li><i className="fas fa-phone-alt"></i>+57(1)2333333</li>
                            <li><i className="fas fa-envelope"></i>contacto@beautystore.com</li>
                            <li><i className="fas fa-map-marker-alt"></i>Calle Falsa No. 12-34 - Bogotá, Colombia</li>
                        </ul>
                    </div>
                    <div className="horarios">
                        <h3>Horarios de atención</h3>
                        <ul>
                            <li><b>Lun-Vie</b> | 9:00 am - 5:00 pm</li>
                            <li><b>Sab</b> | 9:00 am - 8:00 pm</li>
                            <li><b>Dom</b> | 9:00 am - 4:00 pm</li>
                        </ul>
                    </div>
                    <div className="formulario">
                        <h3>Escríbenos</h3>
                        <form>
                            <input type="text" id="nombre" name="nombre" placeholder="Nombre" />
                            <input type="email" id="email" name="email" placeholder="Correo electrónico" />
                            <select id="tipo-telefono" name="tipo-telefono">
                                <option value="movil">Teléfono móvil</option>
                                <option value="fijo">Teléfono fijo</option>
                            </select>
                            <input type="number" id="telefono" name="telefono" placeholder="No. de teléfono" />
                            <textarea id="mensaje" name="mensaje" cols="30" rows="5" placeholder="Mensaje"></textarea>
                            <input className="checkbox" type="checkbox" id="datos" name="datos" />
                            <label for="datos">¿Aceptas el tratamiento de tus datos personales?</label>
                            <div className="flex">
                                <input className="boton" type="button" value="Enviar" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
}

export default Footer;