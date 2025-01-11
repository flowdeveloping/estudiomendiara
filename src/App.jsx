import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import "mdb-react-ui-kit/dist/css/mdb.min.css"; // MDBootstrap CSS
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa Router y Routes

// Importación de componentes principales
import NavBar from './components/pages/NavBar';
import Carousel from './components/pages/Inicio/Carousel';
import Areasdepractica from './components/pages/Areas de practica/areasdepractica';
import Botones from './components/pages/Botones/botones';
import Sobremi from './components/pages/Sobre mi/sobremi';
import Footer from './components/pages/Footer';
import Testimonios from './components/pages/Testimonios/Testimonios';
import Novedades from './components/pages/Novedades';
import NovedadesSeparados from './components/pages/Blog/NovedadesSeparados';
import Contacto from './components/pages/Contacto';
import Blog from './components/pages/Blog'; // Importa tu componente Blog

function App() {
  return (
    <Router> {/* Envuelve toda la aplicación en Router */}
      <NavBar />
      <Routes>
        {/* Ruta principal con múltiples secciones */}
        <Route
          path="/"
          element={
            <>
              <Carousel />
              <Areasdepractica />
              <Botones />
              <Sobremi />
              <Testimonios />
              <Novedades />
              <Contacto />
              <Footer />
            </>
          }
        />

        {/* Rutas adicionales */}
        <Route path="/blog" element={<Blog />} /> {/* Ruta para la página Blog */}
        <Route path="/novedades/:id" element={<NovedadesSeparados />} /> {/* Ruta para una novedad específica */}
        <Route path="/contacto" element={<Contacto />} /> {/* Ruta específica para Contacto */}
      </Routes>
    </Router>
  );
}

export default App;
