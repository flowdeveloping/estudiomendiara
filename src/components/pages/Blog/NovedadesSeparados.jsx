import { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap"; // Importamos el contenedor
import "../../styles/Novedades.css";
import { useParams } from "react-router-dom"; // Para obtener el `id` de los parámetros de la URL

function ArticleDetail() {
  const [article, setArticle] = useState(null); // Estado para almacenar un solo artículo
  const [error, setError] = useState(null); // Estado para errores
  const { id } = useParams(); // Obtenemos el `id` de los parámetros de la URL

  useEffect(() => {
    // Función para obtener un artículo específico desde el backend
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/articles/${id}`); // URL con el ID dinámico
        setArticle(response.data); // Guardamos el artículo en el estado
      } catch (err) {
        console.error("Error fetching article:", err); // Para ver el error completo en consola
        setError("Ocurrió un error al cargar el artículo."); // Mensaje de error amigable
      }
    };

    fetchArticle(); // Llamamos a la función al montar el componente
  }, [id]); // `id` como dependencia para recargar cuando cambie

  if (error) {
    return (
      <Container>
        <h3 className="mt-5 text-center text-danger">{error}</h3>
      </Container>
    );
  }

  if (!article) {
    return (
      <Container>
        <h3 className="mt-5 text-center">Cargando artículo...</h3>
      </Container>
    );
  }

  return (
    <Container>
      <h3 className="mt-5 text-center">{article.title}</h3>
      <Card className="mt-4 mx-auto" style={{ width: "50rem" }}>
        <Card.Img
          variant="top"
          src={article.image_url?.secure_url || "/placeholder.jpg"} // Imagen con placeholder
          style={{ height: "450px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Text>{article.description}</Card.Text>
          <Button
            className="btn-primary w-100"
            onClick={() => window.open(article.link || "/", "_blank")}
          >
            Leer más
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ArticleDetail;
