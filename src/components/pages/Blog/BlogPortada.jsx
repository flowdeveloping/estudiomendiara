import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from 'react-bootstrap';
import imagenNovedades from '../../../assets/img/Blog/roman-kraft-_Zua2hyvTBk-unsplash.jpg';

const FluidExample = () => (
  <div style={{ marginTop: '150px' }}> {/* Estilo en línea para el margen superior */}
    <Image src={imagenNovedades} fluid />
  </div>
);

export default FluidExample;
