import Carousel from 'react-bootstrap/Carousel';
import PortadaSlider1 from '../../../assets/img/sliderhome/slider1.jpg';
import PortadaSlider2 from '../../../assets/img/sliderhome/slider2.jpg';
import PortadaSlider3 from '../../../assets/img/sliderhome/slider3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselComponent = () => {
  return (
    <div style={{ margin: '3rem 0', width: '100%', height: '700px', overflow: 'hidden' }}>
      <Carousel data-bs-theme="dark" controls={false} indicators={false} interval={3000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={PortadaSlider1}
            alt="First slide"
            style={{ width: '100%', height: '700px', objectFit: 'cover' }}
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={PortadaSlider2}
            alt="Second slide"
            style={{ width: '100%', height: '700px', objectFit: 'cover' }}
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={PortadaSlider3}
            alt="Third slide"
            style={{ width: '100%', height: '700px', objectFit: 'cover' }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
