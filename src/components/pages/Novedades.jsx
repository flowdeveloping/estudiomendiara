import { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap"; // Importamos estos componentes
import "../styles/Novedades.css";

function BasicExample() {
  const [novedades, setNovedades] = useState([]); // Estado para almacenar las novedades
  const [error, setError] = useState(null); // Estado para errores

  useEffect(() => {
    // Función para obtener novedades desde el backend
    const fetchNovedades = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/articles"); // URL del backend
        setNovedades(response.data); // Guardamos las novedades en el estado
      } catch (err) {
        setError(err.message); // Capturamos errores
      }
    };

    fetchNovedades(); // Llamamos a la función al montar el componente
  }, []);

  return (
    <Container>
      <h3 className="mt-5 text-center">Novedades</h3>
      {error && <p className="text-danger text-center">Error: {error}</p>} {/* Muestra el error si ocurre */}
      <Row className="justify-content-center">
        {novedades.map((novedad, index) => (
          <Col md="4" className="mb-4" key={novedad._id || index}>
            <Card style={{ width: "26rem", position: "relative", border: "none" }}>
              <Card.Img
                variant="top"
                src={novedad.image_url.secure_url}
                style={{ height: "450px", width: "350px", objectFit: "cover" }}
              />
              <Card.Body
                style={{
                  position: "absolute",
                  bottom: "25px",
                  left: "50px",
                  right: "150px",
                  color: "white",
                  padding: "20px",
                }}
              >
                <Card.Title className="text-start">{novedad.title}</Card.Title>
                <Card.Text className="text-start">{novedad.short_description}</Card.Text>
                <Button
                  className="btn-primary w-100"
                  onClick={() => window.open("https://www.google.com", "_blank")}
                >
                  Ver más
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default BasicExample;
