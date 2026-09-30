function TarjetaLibro({titulo, autor, anio, numpaginas}){
  return(
    <div>
      <h3>Titulo: {titulo}</h3>
      <p>Autor: {autor}</p>
      <p>Anio: {anio}</p>
      <p>Numero de Paginas: {numpaginas}</p>
    </div>
  )
}

export default TarjetaLibro;