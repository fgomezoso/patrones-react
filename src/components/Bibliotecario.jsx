function Bibliotecario ({entregarLibro}){
  return (
  <button onClick={() => entregarLibro("1984")}>Entregar 1984</button>
  );
}

export default Bibliotecario;