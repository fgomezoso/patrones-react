import './App.css'
import Bibliotecario from './components/Bibliotecario';
import CajaMagicaCh from './components/CajaMagicaCh';
import TarjetaLibro from './components/TarjetaLibro';

function App() {
  
  function recibirLibro(tituloLibro){
    alert("Gracias! Recibi el libro: " + tituloLibro) 
  }

  const libro1 = {
    titulo: "Crimen y castigo",
    autor: "Fiodor Dostoyevski",
    anio: 1866,
    numpaginas: 672
  }

  const libro2 = { 
    titulo: "Cien años de soledad", 
    autor: "Gabriel García Márquez", 
    anio: 1967, 
    numpaginas: 471 
  };

  const libro3 = { 
    titulo: "1984", 
    autor: "George Orwell", 
    anio: 1949, 
    numpaginas: 328 
  };

  return (
    <>
      <h2>CALLBACK</h2>
      <Bibliotecario entregarLibro={recibirLibro}/>

      <br/>

      <h2>CHILDREN</h2>
      <CajaMagicaCh>
        <p>Este texto esta dentro de la caja!</p>
        <button>Este boton tambien!</button>
        <textarea>aqui hay algo que envie a children</textarea>
      </CajaMagicaCh>

      <br/>
      <h2>SPREAD</h2>
      <TarjetaLibro {...libro1}/>
      <TarjetaLibro {...libro2}/>
      <TarjetaLibro {...libro3}/>
    </>
  )
}

export default App
