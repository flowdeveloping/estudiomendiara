import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {
  return (
    <Form  id="contacto" className="p-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
      {/* Título y Subtítulo */}
      <div className="text-center mb-4">
        <h1>¡Consultanos Ahora!</h1>
        <p className="lead">Obtené una respuesta rápida y pormenorizada a tu problema a un precio más que conveniente.</p>
      </div>

      {/* Campo de Nombre */}
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label></Form.Label>
        <Form.Control type="text" placeholder="Nombre" />
      </Form.Group>

      {/* Campo de Teléfono */}
      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label></Form.Label>
        <Form.Control type="tel" placeholder="Teléfono" />
      </Form.Group>

      {/* Campo de Email */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label></Form.Label>
        <Form.Control type="email" placeholder="Email" />
        <Form.Text className="text-muted">
          Nunca compartiremos tu email con nadie más.
        </Form.Text>
      </Form.Group>

      {/* Campo de Comentarios */}
      <Form.Group className="mb-3" controlId="formBasicComment">
        <Form.Label></Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Escribe tus comentarios aquí..." />
      </Form.Group>

      {/* Checkbox para Newsletter */}
      <Form.Group className="mb-3" controlId="formBasicNewsletter">
        <Form.Check 
          type="checkbox" 
          label="Quiero recibir el newsletter" 
        />
      </Form.Group>

      {/* Botón de envío */}
      <Button variant="primary" type="submit" className="w-100">
        Enviar
      </Button>
    </Form>
  );
}

export default BasicExample;
