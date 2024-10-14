
import './App.css'
import NavBar from './components/pages/NavBar'
import Carousel from './components/pages/Inicio/Carousel'
import Areasdepractica from './components/pages/Areas de practica/areasdepractica'
import Botones from './components/pages/Botones/botones'
import Sobremi from './components/pages/Sobre mi/sobremi'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  

  return (
    <>
     <NavBar/>
     <Carousel/>
     <Areasdepractica/>
     <Botones/>
     <Sobremi/>
     
    </>
  )
}

export default App
