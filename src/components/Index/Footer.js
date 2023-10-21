import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import facebook from "../../assets/indexAssets/iconsFooter/facebook.png";
import ig from "../../assets/indexAssets/iconsFooter/ig.png";
import linkedin from "../../assets/indexAssets/iconsFooter/linkedin.png";
import youtube from "../../assets/indexAssets/iconsFooter/youtube.png";

function Footer() {
  return (
    <footer className="footer-container">
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li> {/* Usa Link para enlazar al inicio */}
          <li><Link to="/nosotros">Nosotros</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
      <div className="text-center">
        <h4>BeFocus</h4>
        <p>Optimiza tu día al máximo</p>
        <div className='social-media-icons'>
          <img src={ig} alt='Instagram' />
          <img src={facebook} alt='Facebook' />
          <img src={youtube} alt='YouTube' />
          <img src={linkedin} alt='LinkedIn' />
        </div>
      </div>
      <p>© 2023 Be Focus. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;
