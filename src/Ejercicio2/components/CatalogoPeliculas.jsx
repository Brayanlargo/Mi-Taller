// Autor: Brayan Steven Largo Ramirez 
// Ejercicio 2 - Catalogo de Peliculas

import TarjetaPelicula from './TarjetaPelicula';
import './CatalogoPeliculas.css';

function CatalogoPeliculas({ peliculas }) {
  return (
    <div className="catalogo">
      <h1 className="catalogo-titulo"> Mi Catalogo de Peliculas</h1>
      <div className="catalogo-grid">
        {peliculas.map(pelicula => (
          <TarjetaPelicula
            key={pelicula.id}
            titulo={pelicula.titulo}
            director={pelicula.director}
            anio={pelicula.anio}
            genero={pelicula.genero}
            calificacion={pelicula.calificacion}
          />
        ))}
      </div>
    </div>
  );
}

export default CatalogoPeliculas;