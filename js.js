document.getElementById('formularioContacto').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    
    let errores = [];

    if (nombre === "") {
        errores.push("El nombre es obligatorio.");
    }
    
    const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!patronCorreo.test(correo)) {
        errores.push("El correo electrónico no es válido.");
    }
    
    if (mensaje.length < 10) {
        errores.push("El mensaje debe tener al menos 10 caracteres.");
    }

    const salida = document.getElementById('salidaFormulario');
    salida.innerHTML = "";

    if (errores.length > 0) {
        errores.forEach(error => {
            const p = document.createElement('p');
            p.style.color = 'red';
            p.textContent = error;
            salida.appendChild(p);
        });
    } else {
        const nombreElemento = document.createElement('p');
        nombreElemento.textContent = "Nombre: " + nombre;
        salida.appendChild(nombreElemento);

        const correoElemento = document.createElement('p');
        correoElemento.textContent = "Correo Electrónico: " + correo;
        salida.appendChild(correoElemento);

        const mensajeElemento = document.createElement('p');
        mensajeElemento.textContent = "Mensaje: " + mensaje;
        salida.appendChild(mensajeElemento);

        const mensajeExito = document.createElement('p');
        mensajeExito.style.color = 'green';
        mensajeExito.textContent = "¡Formulario enviado con éxito!";
        salida.appendChild(mensajeExito);

        document.getElementById('formularioContacto').reset();
    }
});