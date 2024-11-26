import {
  MDBFooter,
 
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-white text-lg-left'>
      

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}  Desarrollo y Diseño 
        <br />
        <a className='text-white' href='https://maurogarro.dev/'>Mauro Garro -</a>
        
        <a className='text-white' href='https://jimenanieto.netlify.app/'> Jimena Nieto</a>
        <br />  
         
      
      </div>
    </MDBFooter>
  );
}