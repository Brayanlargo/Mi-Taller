// Autor: Brayan Steven Largo Ramirez 
// Ejercicio 2 - Catalogo de Peliculas

import './TarjetaPelicula.css';

function obtenerCalificacion(calificacion) {
  if (calificacion >= 4.5) return { texto: "Excelente", clase: "cal-excelente" };
  if (calificacion >= 3.5) return { texto: "Buena", clase: "cal-buena" };
  return { texto: "Regular", clase: "cal-regular" };
}

function TarjetaPelicula({ titulo, director, anio, genero, calificacion }) {
  const { texto, clase } = obtenerCalificacion(calificacion);

  return (
    <div className="tarjeta-pelicula">
      <div className="tarjeta-header">
        <h2 className="tarjeta-titulo">{titulo}</h2>
        <span className={`calificacion ${clase}`}>{texto} {calificacion}</span>
      </div>
      <div className="tarjeta-body">
        <p><span className="etiqueta">Director:</span> {director}</p>
        <p><span className="etiqueta">Año:</span> {anio}</p>
        <p><span className="etiqueta">Género:</span> {genero}</p>
      </div>
    </div>
  );
}

export default TarjetaPelicula;