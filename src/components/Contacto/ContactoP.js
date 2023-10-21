import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Index/Footer";
import estudio from "../../components/Index/7606066.jpg";

const containerStyle = {
  maxWidth: "100%",
  padding: 0,
};

const headerStyle = {
  backgroundImage: `url(${estudio})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "white",
  padding: "20px 0", // Reducir el espacio superior e inferior
  textAlign: "center",
  height: "200px", // Ajustar la altura de la imagen
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "600px",
  margin: "0 auto",
  padding: "20px",
  background: "white",
  borderRadius: "5px",
  opacity: 0.9,
};

const labelStyle = {
  fontSize: "1rem",
  marginBottom: "10px",
};

const inputStyle = {
  padding: "10px",
  width: "100%",
  marginBottom: "20px",
  border: "1px solid #ccc",
  borderRadius: "5px",
};

const textareaStyle = {
  padding: "10px",
  width: "100%",
  marginBottom: "20px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  height: "50px", // Ajustar la altura del área de texto
};

const buttonStyle = {
  backgroundColor: "#007BFF",
  color: "#fff",
  padding: "10px 20px",
  border: "none",
  cursor: "pointer",
  borderRadius: "5px",
};

const Header = () => {
  const navStyle = {
    display: "flex",
    justifyContent: "flex-end",
    marginRight: "20px",
  };

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
      <nav style={navStyle}>
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Realiza una solicitud a Formspree para enviar el formulario
    const response = await fetch("https://formspree.io/f/{form_id}", {
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
      {isSubmitted ? (
        <p>¡Gracias por tu mensaje!</p>
      ) : (
        <form style={formStyle} onSubmit={handleSubmit}>
          <label style={labelStyle} htmlFor="email">
            Tu correo electrónico
          </label>
          <input
            style={inputStyle}
            name="Email"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label style={labelStyle} htmlFor="comment">
            Comentario
          </label>
          <textarea
            style={textareaStyle}
            name="Comment"
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button style={buttonStyle} type="submit">
            Enviar
          </button>
        </form>
      )}

      <Footer />
    </div>
  );
}

export default ContactoP;
