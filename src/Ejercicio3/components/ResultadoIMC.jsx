// Autor: Brayan Steven Largo Ramirez 
// Ejercicio 3 - Calculadora de IMC

import './ResultadoIMC.css';

//recibe nombre, peso y altura para calcular el IMC y mostrar el diagnóstico
function ResultadoIMC({ nombre, peso, altura }) {

 // Fórmula del IMC: peso en kg dividido por la altura en metros al cuadrado
  const imc = peso / (altura * altura);

  let diagnostico = '';
  let clase = '';
 
  // Se asigna el diagnóstico y la clase CSS según el rango del IMC
  if (imc < 18.5) {
    diagnostico = "Bajo peso";
    clase = "diag-bajo";
  } else if (imc < 25) {
    diagnostico = "Peso normal";
    clase = "diag-normal";
  } else if (imc < 30) {
    diagnostico = "Sobrepeso";
    clase = "diag-sobre";
  } else {
    // Cualquier IMC >= 30 se clasifica como obesidad
    diagnostico = "Obesidad";
    clase = "diag-obesidad";
  }

  return (
    <div className="tarjeta-imc">
      <h2>{nombre}</h2>
      <p>Peso: {peso} kg | Altura: {altura} m</p>
      {/* Muestra el IMC redondeado a 1 decimal */}
      <p>IMC: {imc.toFixed(1)}</p>
       {/* La clase CSS cambia según el diagnóstico */}
      <p className={clase}>Diagnostico: {diagnostico}</p>
    </div>
  );
}

export default ResultadoIMC;