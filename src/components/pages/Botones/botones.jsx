import Button from 'react-bootstrap/Button';
import '../../styles/botones.css'; // Asegúrate de que la ruta sea correcta

function SizesExample() {
  return (
    <>
      <div className="mb-2">
        <Button variant="primary" size="lg" className="custom-button blog-button">
          Blog
        </Button>{' '}
        <Button variant="secondary" size="lg" className="custom-button sobre-mi-button">
          Sobre mi
        </Button>
        <Button variant="primary" size="lg" className="custom-button areas-button">
          Áreas de Práctica
        </Button>{' '}
        <Button variant="secondary" size="lg" className="custom-button contact-button">
          Contáctame
        </Button>
      </div>
    </>
  );
}

export default SizesExample;
