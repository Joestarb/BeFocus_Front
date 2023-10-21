import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Index/Footer";
import estudio from "../../components/Index/7606066.jpg"; // Asegúrate de que esta ruta sea correcta y el archivo de imagen exista

const containerStyle = {
  maxWidth: "100%",
  padding: 0,
};

const headerStyle = {
  backgroundImage: `url(${estudio})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "white",
  padding: "20px 0",
  textAlign: "center",
  height: "200px",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "600px",
  margin: "0 auto",
  padding: "20px",
  background: "#fff",
  borderRadius: "5px",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)", // Sombra ligera
  marginTop: "20px", // Separación del encabezado
  marginBottom: "20px", // Separación del pie de página
};

const labelStyle = {
  fontSize: "1rem",
  marginBottom: "10px",
  fontWeight: "bold", // Texto en negrita
};

const inputStyle = {
  padding: "10px",
  width: "100%",
  marginBottom: "20px",
  border: "2px solid orange", // Borde naranja
  borderRadius: "5px",
};

const textareaStyle = {
  padding: "10px",
  width: "100%",
  marginBottom: "20px",
  border: "2px solid orange", // Borde naranja
  borderRadius: "5px",
  height: "60px",
};

const buttonStyle = {
  backgroundColor: "#F5B041",
  color: "#fff",
  padding: "10px 20px",
  border: "none",
  cursor: "pointer",
  borderRadius: "5px",
  transition: "background-color 0.3s", // Transición suave
};

const buttonHoverStyle = {
  backgroundColor: "#D35400", // Color más oscuro al pasar el ratón
};

const Header = () => {
  const titleStyle = {
    fontSize: "2rem",
    textTransform: "uppercase",
    fontFamily: "cursive",
  };

  const botonStyle = {
    backgroundColor: "#007BFF",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
    marginLeft: "10px",
    borderRadius: "5px",
  };

  return (
    <header style={headerStyle}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1 style={titleStyle}>BeFocus</h1>
      </Link>
      <Link to="/nosotros" style={{ textDecoration: "none" }}>
        <h2 style={titleStyle}>Escribenos tu comentario!</h2>
      </Link>
      <nav>
        <Link to="/" style={{ textDecoration: "none" }}>
          <button style={botonStyle}>Regresar al Inicio</button>
        </Link>
        <Link to="/nosotros" style={{ textDecoration: "none" }}>
          <button style={botonStyle}>Nosotros</button>
        </Link>
      </nav>
    </header>
  );
};

function ContactoP() {
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [buttonHover, setButtonHover] = useState(false);

  const handleButtonMouseOver = () => {
    setButtonHover(true);
  };

  const handleButtonMouseOut = () => {
    setButtonHover(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación simple para verificar que los campos no estén vacíos
    if (!email || !comment) {
      alert("Por favor, completa todos los campos antes de enviar.");
      return;
    }

    // Realiza una solicitud a Formspree para enviar el formulario
    const response = await fetch("https://formspree.io/f/meqbnoza", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Email: email, Comment: comment }),
    });

    if (response.ok) {
      setIsSubmitted(true);
    }
  };

  return (
    <div style={containerStyle}>
      <Header />
      <div style={formStyle}>
        {isSubmitted ? (
          <div>
            <p style={{ fontSize: "1.5rem", marginBottom: "20px" }}>¡Gracias por tu mensaje!</p>
            <button style={buttonStyle} onClick={() => setIsSubmitted(false)}>
              Enviar otro comentario
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label style={labelStyle} htmlFor="email">
              Tu correo electrónico
            </label>
            <input
              style={inputStyle}
              name="email"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label style={labelStyle} htmlFor="comment">
              Comentario
            </label>
            <textarea
              style={textareaStyle}
              name="comment"
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            />
            <button
              style={buttonHover ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
              type="submit"
              onMouseOver={handleButtonMouseOver}
              onMouseOut={handleButtonMouseOut}
            >
              Enviar
            </button>
          </form>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default ContactoP;
