import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Index/Footer';
import estudio from "../Index/7606066.jpg";
import imagen1 from '../Index/imagen1.jpg';
import imagen2 from '../Index/imagen2.jpg';
import imagen3 from '../Index/imagen3.jpg';
import imagen4 from '../Index/imagen4.jpg';

const botonStyle = {
  backgroundColor: '#007BFF',
  color: '#fff',
  padding: '10px 20px',
  border: 'none',
  cursor: 'pointer',
  marginLeft: '10px',
  borderRadius: '5px',
};

const navStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  marginRight: '20px',
};

const headerStyle = {
  textAlign: 'center',
  backgroundImage: `url(${estudio})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: 'white',
  padding: '20px',
};

const titleStyle = {
  fontSize: '2rem',
  textTransform: 'uppercase',
  fontFamily: 'cursive',
};

const textContent = {
  fontSize: '1.2rem',
  lineHeight: '1.6',
  background: '#f1f1f1',
  padding: '20px',
  marginBottom: '20px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const imgStyle = {
  maxWidth: '70%',
  maxHeight: '300px', // Establece una altura máxima de 300px
  display: 'block',
  margin: '0 auto',
};


const Header = () => {
  return (
    <header style={headerStyle}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h1 style={titleStyle}>BeFocus</h1>
      </Link>
      <Link to="/contacto" style={{ textDecoration: 'none' }}>
        <h2 style={titleStyle}>Acerca de Nosotros</h2>
      </Link>
      <nav style={navStyle}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <button style={botonStyle}>Regresar al Inicio</button>
        </Link>
        <Link to="/contacto" style={{ textDecoration: 'none' }}>
          <button style={botonStyle}>Contacto</button>
        </Link>
      </nav>
    </header>
  );
};

const NosotrosP = () => {
  return (
    <section id="nosotros">
      <Header />
      <div className="container">
        <div className="nosotros-content">
          <p style={textContent}>
            Bienvenidos a BeFocus, una empresa dedicada a brindar soluciones de vanguardia en el mundo empresarial.
          </p>
          <img src={imagen1} alt="Imagen 1" style={imgStyle} />
          <p style={textContent}>
            Nuestra misión es ayudar a las organizaciones a alcanzar sus metas y objetivos a través de estrategias innovadoras y servicios personalizados.
          </p>
          <img src={imagen2} alt="Imagen 2" style={imgStyle} />
          <p style={textContent}>
            En BeFocus, valoramos la excelencia, la creatividad y la colaboración. Nos esforzamos por ser líderes en la industria y superar las expectativas de nuestros clientes en cada proyecto que emprendemos.
          </p>
          <img src={imagen3} alt="Imagen 3" style={imgStyle} />
          <p style={textContent}>
            Siempre estamos buscando nuevas formas de empoderar a las empresas y proporcionarles las herramientas que necesitan para tener éxito en un mundo en constante evolución.
          </p>
          <img src={imagen4} alt="Imagen 4" style={imgStyle} />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default NosotrosP;
