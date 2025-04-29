$(document).ready(function () {
    $('.sidenav').sidenav();

// llama la funcion para guardar los valores en localStorage
    guardarInputsContacto();
});
$(document).ready(function(){
    $('.datepicker').datepicker({
      format: 'yyyy-mm-dd',
      autoClose: true
    });
  });
  $(document).ready(function(){
    $('.collapsible').collapsible();
    $('.modal').modal();
    $('.tap-target').tapTarget();
    $('.datepicker').datepicker();
  });
document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submit_Button');

    submitButton.addEventListener('click', function () {
        procesarFormularioContacto();
    });

    const submit_Button = document.getElementById('button');
    submitButton.addEventListener('click', function () {
        guardarYLimpiarFormulario();
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('button');
    if (submitButton) {
        submitButton.addEventListener('click', function (event) {
            event.preventDefault();
            guardarYLimpiarFormulario();
        });
    }
});

// Validaciones 
function validarCedula() {
    const elementoCedula = document.getElementById('icon_prefix');
    const cedula = elementoCedula.value.trim();
    const expReg = /^[0-9]{6,10}$/;

    if (!expReg.test(cedula)) {
        alert('Por favor, ingresa una cédula válida (solo números, entre 6 y 10 dígitos).');
        elementoCedula.classList.add('error');
        return false;
    }

    elementoCedula.classList.remove('error');
    return true;
}

function validarNombre() {
    const elementoNombre = document.getElementById('icon_nombre'); 
    const nombre = elementoNombre.value.trim(); 
    const expReg = /^[a-zA-Z\s]+$/;

    if (nombre.length === 0 || !expReg.test(nombre)) {
        alert('Por favor, ingresa un nombre válido (solo letras y espacios).');
        elementoNombre.classList.add('error'); 
        return false;
    }

    elementoNombre.classList.remove('error');
    return true;
}

function validarApellido() {
    const elementoApellido = document.getElementById('perm_identity');
    const apellido = elementoApellido.value.trim();
    const expReg = /^[a-zA-Z0-9\s]+$/;

    if (apellido.length === 0 || !expReg.test(apellido)) {
        alert('Por favor, ingresa un apellido válido (solo letras, números y espacios).');
        elementoApellido.classList.add('error');
        return false;
    }

    elementoApellido.classList.remove('error');
    return true;
}

function validarEmail() {
    const elementoEmail = document.getElementById('email');
    const email = elementoEmail.value.trim();
    const expReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (email.length === 0 || !expReg.test(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        elementoEmail.classList.add('error');
        return false;
    }

    elementoEmail.classList.remove('error'); 
    return true;
}

function validarClave() {
    const elementoClave = document.getElementById('phonelink_lock'); 
    const clave = elementoClave.value.trim();
    const expReg = /^[0-9]{8,}$/;

    if (!expReg.test(clave)) {
        alert('Por favor, ingresa una clave válida (solo números, mínimo 8 caracteres).');
        elementoClave.classList.add('error');
        return false;
    }

    elementoClave.classList.remove('error');
    return true;
}

function validarFecha() {
    const elementoFecha = document.getElementById('date');
    const fechaIngresada = new Date(elementoFecha.value);
    const fechaActual = new Date();


    const fechaLimite = new Date(
        fechaActual.getFullYear() - 18,
        fechaActual.getMonth(),
        fechaActual.getDate()
    );

    if (fechaIngresada > fechaLimite) {
        alert('Debes ser mayor de 18 años para continuar.');
        elementoFecha.classList.add('error');
        return false;
    }

    elementoFecha.classList.remove('error');
    return true;
}

// Función para guardar los valores de los inputs del card #contacto en localStorage
function guardarInputsContacto() {
  $('#contacto input, #contacto textarea').on('blur', function () {
      var inputId = $(this).attr('id'); 
      var label = $(`label[for="${inputId}"]`).text();
      var value = $(this).val();

      if (value.trim() !== '') {
          localStorage.setItem(label, value);
      }
  });
}

function procesarFormularioContacto() {

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validar el nombre
    if (name.length === 0) {
        alert('Por favor, ingresa tu nombre.');
        return;
    }

    // Validar el correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }

    // Validar el mensaje
    if (message.length === 0) {
        alert('Por favor, ingresa un mensaje.');
        return;
    }

    // Guardar los datos en localStorage
    localStorage.setItem('Nombre', name);
    localStorage.setItem('Correo Electrónico', email);
    localStorage.setItem('Mensaje', message);

    // Limpiar los inputs
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';

    // Confirmación
    alert('Formulario enviado correctamente.');
}

let formularioEnviado = false;

function guardarYLimpiarFormulario() {
    const inputs = document.querySelectorAll('.form input');
    let isValid = true;

    inputs.forEach(input => {
        const value = input.value.trim();
        if (value === '') {
            input.classList.add('input-error');
            isValid = false;
        } else {
            input.classList.remove('input-error');
        }
    });

    if (!isValid) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    inputs.forEach(input => {
        input.value = '';
    });

    formularioEnviado = true;
    alert('Formulario enviado correctamente.');
}

document.addEventListener('DOMContentLoaded', function () {
    const crucigramaLink = document.querySelector('a[href="../HTML/crucigrama.html"]');

    if (crucigramaLink) {
        crucigramaLink.addEventListener('click', function (event) {
            if (!formularioEnviado) {
                event.preventDefault();
                alert("Por favor, completa y envía el formulario antes de continuar.");
            }
        });
    }
});