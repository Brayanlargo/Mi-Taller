// Autor: Brayan Steven Largo Ramirez
// App.jsx - Taller

import './App.css';
import TarjetaContacto from './Ejercicio1/components/TarjetaContacto';
import CatalogoPeliculas from './Ejercicio2/components/CatalogoPeliculas';
import ResultadoIMC from './Ejercicio3/components/ResultadoIMC';

//  Datos Ejercicio 2
const peliculas = [
  {
    id: 1,
    titulo: "El Laberinto del Fauno",
    director: "Guillermo del Toro",
    anio: 2006,
    genero: "Fantasia",
    calificacion: 4.8,
  },
  {
    id: 2,
   titulo: "Rapidos y Furiosos",
  director: "Rob Cohen",
  anio: 2001,
  genero: "Accion",
  calificacion: 4.0,
  },
  {
    id: 3,
    titulo: "Titanic",
  director: "James Cameron",
  anio: 1997,
  genero: "Romance",
  calificacion: 4.6,
  },
  {
    id: 4,
    titulo: "Son Como Niños 2",
  director: "Dennis Dugan",
  anio: 2013,
  genero: "Comedia",
  calificacion: 3.6,
  },
  {
    id: 5,
    titulo: "Emoji: La Pelicula",
  director: "Tony Leondis",
  anio: 2017,
  genero: "Animacion",
  calificacion: 1.8,
  },
];

// Datos Ejercicio 3
const personas = [
  { id: 1, nombre: "Carlos Ruiz",  peso: 70, altura: 1.75 },
  { id: 2, nombre: "Laura Torres", peso: 55, altura: 1.62 },
  { id: 3, nombre: "Jorge Perez",  peso: 95, altura: 1.70 },
  { id: 4, nombre: "Sofia Medina", peso: 48, altura: 1.68 },
];

// Encabezado reutilizable para cada ejercicio
function EjercicioHeader({ numero, nombre }) {
  return (
    <div className="ejercicio-header">
      <div className="ejercicio-linea" />
      <div className="ejercicio-etiqueta">
        <span className="ejercicio-numero">Ejercicio {numero}</span>
        <div className="ejercicio-puntos">
          {[...Array(5)].map((_, i) => <span key={i} />)}
        </div>
        <span className="ejercicio-nombre">{nombre}</span>
        <div className="ejercicio-puntos">
          {[...Array(5)].map((_, i) => <span key={i} />)}
        </div>
      </div>
      <div className="ejercicio-linea" />
    </div>
  );
}

function App() {
  return (
    <div>

      {/* ── TÍTULO PRINCIPAL ── */}
      <div className="taller-hero">
        <div className="taller-badge">Brayan Steven Largo Ramirez</div>
        <h1 className="taller-titulo">Taller Componentes JSX React</h1>
      </div>

      {/* Ejercicio 1 - Tarjeta de Contacto */}
      <div className="ejercicio-section">
        <EjercicioHeader numero="1" nombre="Tarjeta de Contacto" />
        <div className="ejercicio-contenido">
          <TarjetaContacto
            estilo="tarjeta-azul"
            nombre="Maria Gomez"
            telefono="3001234567"
            correo="maria@gmail.com"
            ciudad="Bogota"
            ocupacion="Desarrolladora Frontend"
          />
          <TarjetaContacto
            estilo="tarjeta-verde"
            nombre="Miguel Ruiz"
            telefono="3109876543"
            correo="Miguel123@email.com"
            ciudad="Medellin"
            ocupacion="Diseñador Gráfico"
          />
          <TarjetaContacto
            estilo="tarjeta-naranja"
            nombre="Carlos Garcia"
            telefono="3204567891"
            correo="carlosG1@email.com"
            ciudad="Cali"
            ocupacion="Ingeniero de Sistemas"
          />
          <TarjetaContacto
            estilo="tarjeta-violeta"
            nombre="Juan Felipe"
            telefono="3154321098"
            correo="JuanFeli23@email.com"
            ciudad="Tunja"
            ocupacion="Ingeniero Automotriz"
          />
        </div>
      </div>

      <hr className="taller-divisor" />

      {/* Ejercicio 2 - Catalogo de Peliculas */}
      <div className="ejercicio-section">
        <EjercicioHeader numero="2" nombre="Catálogo de Películas" />
        <CatalogoPeliculas peliculas={peliculas} />
      </div>

      <hr className="taller-divisor" />

      {/* Ejercicio 3 - Calculadora de IMC */}
      <div className="ejercicio-section">
        <EjercicioHeader numero="3" nombre="Calculadora de IMC" />
        <div className="ejercicio-contenido">
          {personas.map(persona => (
            <ResultadoIMC
              key={persona.id}
              nombre={persona.nombre}
              peso={persona.peso}
              altura={persona.altura}
            />
          ))}
        </div>
      </div>

    </div>
  );
}

export default App;