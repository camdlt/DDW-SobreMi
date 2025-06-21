// Variables con datos de ejemplo (ejercicio 1) (comentado para dejar funcionalidad 2)
//const ejemploNombre = "Pepita";
//const ejemploApellido = "Suarez";
//const ejemploFechaNacimiento = "1996-01-20";
//document.getElementById("mensajeBienvenida").textContent =
// `¡Bienvenida, ${ejemploNombre} ${ejemploApellido}!`;

// Con info del formulario (ejercicio 2 y 3)
document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault(); // Evita que se recargue la página

  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const fechaNacimiento = new Date(document.getElementById("fechaNacimiento").value);

  // Mostrar nuevo mensaje de bienvenida
  document.getElementById("mensajeBienvenida").textContent =
    `¡Hola, ${nombre} ${apellido}!`;

  // Calcular días aprox vividos (ejercicio 3)
  const hoy = new Date();
  const diferencia = hoy - fechaNacimiento;
  const diasVividos = Math.floor(diferencia / (1000 * 60 * 60 * 24));

  document.getElementById("mensajeDias").textContent =
    `Has vivido aproximadamente ${diasVividos} días.`;
});
