// Script para alternar modo claro/oscuro en el portfolio

document.addEventListener('DOMContentLoaded', function () {
  const root = document.documentElement;
  const btnClaro = document.getElementById('btn-modo-claro');
  const btnOscuro = document.getElementById('btn-modo-oscuro');

  // Leer preferencia guardada
  const modoGuardado = localStorage.getItem('modo-color');
  if (modoGuardado === 'claro') {
    root.classList.remove('modo-oscuro');
    root.classList.add('modo-claro');
  } else if (modoGuardado === 'oscuro') {
    root.classList.remove('modo-claro');
    root.classList.add('modo-oscuro');
  }

  if (btnClaro && btnOscuro) {
    btnClaro.addEventListener('click', function () {
      root.classList.remove('modo-oscuro');
      root.classList.add('modo-claro');
      localStorage.setItem('modo-color', 'claro');
    });
    btnOscuro.addEventListener('click', function () {
      root.classList.remove('modo-claro');
      root.classList.add('modo-oscuro');
      localStorage.setItem('modo-color', 'oscuro');
    });
  }
});
