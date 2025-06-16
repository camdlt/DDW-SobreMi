// Funciones para manejo de entradas
let descuentoActivo = false;

function sumarEntrada(btn) {
  const card = btn.closest('.ticket-card');
  const counter = card.querySelector('.contador');
  counter.textContent = parseInt(counter.textContent) + 1;
  actualizarSubtotal();
}

function restarEntrada(btn) {
  const card = btn.closest('.ticket-card');
  const counter = card.querySelector('.contador');
  const cantidad = parseInt(counter.textContent);
  if (cantidad > 0) {
    counter.textContent = cantidad - 1;
    actualizarSubtotal();
  }
}

function aplicarDescuento() {
  const codigo = document.getElementById('promoCodeInput').value.trim();
  if (codigo === 'UADE2025') {
    descuentoActivo = true;
  } else {
    descuentoActivo = false;
    alert('Código inválido o expirado.');
  }
  actualizarSubtotal();
}

function actualizarSubtotal() {
  const cards = document.querySelectorAll('.ticket-card');
  let subtotal = 0;
  cards.forEach(card => {
    const cantidad = parseInt(card.querySelector('.contador').textContent);
    const precio = parseFloat(card.dataset.precio);
    subtotal += cantidad * precio;
  });
  document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
  const descuento = descuentoActivo ? subtotal * 0.10 : 0;
  const total = subtotal - descuento;
  document.getElementById('descuento').textContent = `-$${descuento.toFixed(2)}`;
  document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

const fechasPorCiudad = {
  Rosario: ['3/09/2025', '4/09/2025'],
  Mendoza: ['10/09/2025', '11/09/2025'],
  Córdoba: ['17/09/2025', '18/09/2025']
};

function actualizarFechas() {
  const ciudad = document.getElementById('selectCiudad').value;
  const selectFecha = document.getElementById('selectFecha');
  selectFecha.innerHTML = '<option value="">Fecha</option>';
  if (fechasPorCiudad[ciudad]) {
    fechasPorCiudad[ciudad].forEach(fecha => {
      const option = document.createElement('option');
      option.value = fecha;
      option.textContent = fecha;
      selectFecha.appendChild(option);
    });
  }
}

function confirmarSeleccion() {
  const ciudad = document.getElementById('selectCiudad').value;
  const fecha = document.getElementById('selectFecha').value;
  if (!ciudad || !fecha) {
    alert('Por favor seleccione una ciudad y una fecha.');
  } else {
    alert(`Seleccionaste ${ciudad} - ${fecha}`);
  }
}
