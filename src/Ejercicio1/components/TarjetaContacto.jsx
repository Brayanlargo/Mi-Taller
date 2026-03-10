// Autor: Brayan Steven Largo Ramirez
// Ejercicio 1 - Tarjeta de Contacto

import './TarjetaContacto.css';

// recibe los datos de un contacto y los muestra en una tarjeta
function TarjetaContacto({ nombre, telefono, correo, ciudad, ocupacion, estilo }) {
  return (
    // La clase 'estilo' permite cambiar el color de la tarjeta dinámicamente
    <div className={`tarjeta ${estilo}`}>
      {/* Nombre del contacto como título principal */}
      <h2>{nombre}</h2>
      {/* Información de contacto */}
      <p><strong>Teléfono:</strong> {telefono}</p>
      <p><strong>Correo:</strong> {correo}</p>
      {/* Información personal */}
      <p><strong>Ciudad:</strong> {ciudad}</p>
      <p><strong>Ocupación:</strong> {ocupacion}</p>
    </div>
  );
}

export default TarjetaContacto;