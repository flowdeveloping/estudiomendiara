import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrap CSS
import "mdb-react-ui-kit/dist/css/mdb.min.css";  // MDBootstrap CSS
import NavBar from './components/pages/NavBar';
import Carousel from './components/pages/Inicio/Carousel';
import Areasdepractica from './components/pages/Areas de practica/areasdepractica';
import Botones from './components/pages/Botones/botones';
import Sobremi from './components/pages/Sobre mi/sobremi';
import Footer from './components/pages/Footer';
import Testimonios from './components/pages/Testimonios/Testimonios';
import Novedades from './components/pages/Novedades';
import Contacto from './components/pages/Contacto';

function App() {
  return (
    <>
      <NavBar />
      <Carousel />
      <Areasdepractica />
      <Botones />
      <Sobremi />
      <Testimonios />
      <Novedades/>
      <Contacto/>
      <Footer />
    </>
  );
}

export default App;
