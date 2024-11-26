import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap'; // Importamos estos componentes
import Novedades1 from '../../assets/img/Novedades/novedades1.png'; // Importa la imagen como módulo
import Novedades2 from '../../assets/img/Novedades/novedades2.png'; // 
import Novedades3 from '../../assets/img/Novedades/novedades3.png'; // 
import '../styles/Novedades.css';

function BasicExample() {
  return (
    <Container>
      <h3 className="mt-5 text-center">Novedades</h3> {/* Título con margen superior y centrado */}
      
      <Row className="justify-content-center"> {/* Fila que centra las tarjetas */}
      <Col md="4" className="mb-4">
          <Card style={{ width: '26rem', position: 'relative', border: 'none' }}>
            <Card.Img variant="top" src={Novedades1} style={{ height: '450px', width: '350px', objectFit: 'cover' }} /> {/* Aumento de altura */}
            <Card.Body 
              style={{ 
                position: 'absolute', 
                bottom: '25px', 
                left: '50px', 
                right: '150px', 
                color: 'white', 
                
                padding: '20px' 
              }}
            >
              <Card.Title className="text-start">Junio 8, 2024</Card.Title>
              <Card.Text className="text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Card.Text>
              <Button className="btn-primary w-100">Ver más</Button> {/* Botón con estilo primario */}

            </Card.Body>
          </Card>
        </Col>

        <Col md="4" className="mb-4">
          <Card style={{ width: '26rem', position: 'relative', border: 'none' }}>
            <Card.Img variant="top" src={Novedades2} style={{ height: '450px', width: '350px', objectFit: 'cover' }} /> {/* Aumento de altura */}
            <Card.Body 
              style={{ 
                position: 'absolute', 
                bottom: '25px', 
                left: '50px', 
                right: '150px', 
                color: 'white', 
                
                padding: '20px' 
              }}
            >
              <Card.Title className="text-start">Junio 8, 2024</Card.Title>
              <Card.Text className="text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Card.Text>
              <Button className="btn-primary w-100">Ver más</Button> {/* Botón con estilo primario */}

            </Card.Body>
          </Card>
        </Col>

        <Col md="4" className="mb-4">
          <Card style={{ width: '26rem', position: 'relative', border: 'none' }}>
            <Card.Img variant="top" src={Novedades3} style={{ height: '450px', width: '350px', objectFit: 'cover' }} /> {/* Aumento de altura */}
            <Card.Body 
              style={{ 
                position: 'absolute', 
                bottom: '25px', 
                left: '50px', 
                right: '150px', 
                color: 'white', 
                
                padding: '20px' 
              }}
            >
              <Card.Title className="text-start">Junio 8, 2024</Card.Title>
              <Card.Text className="text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Card.Text>
              <Button className="btn-primary w-100">Ver más</Button> {/* Botón con estilo primario */}

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default BasicExample;
