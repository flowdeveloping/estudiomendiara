import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'; // Importa Button desde react-bootstrap
import '../../styles/sobremi.css';
import Fotomuestra from '../../../assets/img/foto muestra.png'; // Importa la imagen como módulo

function BasicExample() {
  return (
    <Card className="custom-card">
      <div className="card-content">
        <Card.Img className="card-img-left" variant="top" src={Fotomuestra} alt="Sample" />
        <Card.Body className="card-text-right">
          <Card.Title>Seccion
          Sobre mi y estudio</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In quod repellendus quos animi blanditiis. Quaerat mollitia aliquid nam temporibus vero recusandae possimus optio, rem dolor, voluptatum dolores enim officiis provident.
            Incidunt neque, mollitia autem quasi nostrum eligendi fugit, exercitationem animi dolore reiciendis molestias dolorum. Itaque atque beatae ut tempora nesciunt adipisci iusto neque doloremque voluptatum. Qui libero eligendi modi. Officia?
            Consequatur minus, ad sunt odit labore necessitatibus sequi laboriosam magni nemo, excepturi fugiat voluptate aliquid? Voluptatem, ut deserunt! Sequi quos aut illo unde. Laborum eos necessitatibus, similique et beatae odio?
            Dolore sapiente laudantium enim optio cumque nulla provident ea odit voluptatibus dolorem. Quos facilis quas ducimus, eos optio illum ab dolor in ipsa non, pariatur dolorum modi voluptas et laborum?
          </Card.Text>
          <Button variant="custom" className="consulta-button">Enviar Consulta</Button>
        </Card.Body>
      </div>
    </Card>
  );
}

export default BasicExample;

