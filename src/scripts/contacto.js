// Validación y mensajes para el formulario de contacto

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#formulario-contacto form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const asunto = document.getElementById('asunto');
    const mensaje = document.getElementById('mensaje');
    let errores = [];

    if (!nombre.value.trim()) {
      errores.push('El nombre es obligatorio.');
    }
    if (!email.value.trim() || !/^\S+@\S+\.\S+$/.test(email.value)) {
      errores.push('Ingrese un correo electrónico válido.');
    }
    if (!asunto.value.trim()) {
      errores.push('El asunto es obligatorio.');
    }
    if (!mensaje.value.trim()) {
      errores.push('El mensaje es obligatorio.');
    }

    let feedback = document.getElementById('form-feedback');
    if (!feedback) {
      feedback = document.createElement('div');
      feedback.id = 'form-feedback';
      form.parentNode.insertBefore(feedback, form);
    }
    feedback.innerHTML = '';
    feedback.className = '';

    if (errores.length > 0) {
      feedback.className = 'alert alert-danger';
      feedback.innerHTML = '<ul>' + errores.map(e => `<li>${e}</li>`).join('') + '</ul>';
    } else {
      feedback.className = 'alert alert-success';
      feedback.innerHTML = `Gracias por su contacto, <b>${nombre.value}</b>.<br>En breve le estaré respondiendo.`;
      form.reset();
    }
  });
});
