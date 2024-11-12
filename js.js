document.addEventListener('DOMContentLoaded', function () {
    var items = document.querySelectorAll('#carrusel .carrusel-item');
    var totalItems = items.length;
    var indiceActual = 0;

    // Función para actualizar el carrusel
    function actualizarCarrusel() {
        var desplazamiento = -(100 * indiceActual / totalItems);
        document.querySelector('.carrusel-contenido').style.transform = 'translateX(' + desplazamiento + '%)';
    }

    // Función para avanzar o retroceder en el carrusel
    function cambiarItem(direccion) {
        indiceActual = (indiceActual + direccion + totalItems) % totalItems;
        actualizarCarrusel();
    }

    // Añadir eventos a los botones de control
    var siguienteBtn = document.querySelector('#carrusel .carrusel-control.siguiente');
    var anteriorBtn = document.querySelector('#carrusel .carrusel-control.anterior');

    siguienteBtn.addEventListener('click', function () {
        cambiarItem(1);
    });

    anteriorBtn.addEventListener('click', function () {
        cambiarItem(-1);
    });

    // Inicializar el carrusel mostrando la primera imagen
    actualizarCarrusel();
});





document.getElementById('formularioContacto').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir que el formulario se envíe y recargue la página

    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    const categoria = document.getElementById('categoria').value.trim();

    const errores = [];

    // Validaciones
    if (!nombre) errores.push("El nombre es obligatorio.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) errores.push("El correo electrónico no es válido.");
    if (mensaje.length < 10) errores.push("El mensaje debe tener al menos 10 caracteres.");
    if (mensaje.length > 300) errores.push("El mensaje no puede tener más de 300 caracteres.");
    if (!categoria) errores.push("La categoría es obligatoria.");

    const salida = document.getElementById('salidaFormulario');
    salida.innerHTML = "";  // Limpiamos cualquier mensaje previo
    salida.classList.remove("error"); // Eliminamos la clase 'error'

    if (errores.length > 0) {
        salida.classList.add("error");
        errores.forEach(error => {
            const p = document.createElement('p');
            p.style.color = 'red';
            p.textContent = error;
            salida.appendChild(p);
        });
    } else {
        salida.classList.remove("error");

        // Mostrar los datos ingresados
        const datos = [
            { etiqueta: "Nombre", valor: nombre },
            { etiqueta: "Correo Electrónico", valor: correo },
            { etiqueta: "Mensaje", valor: mensaje },
            { etiqueta: "Categoría", valor: categoria }
        ];

        datos.forEach(item => {
            const p = document.createElement('p');
            p.textContent = `${item.etiqueta}: ${item.valor}`;
            salida.appendChild(p);
        });

        // Mensaje de éxito
        const exito = document.createElement('p');
        exito.style.color = 'green';
        exito.textContent = "¡Formulario enviado con éxito!";
        salida.appendChild(exito);

        // Limpiar el formulario
        this.reset();
    }
});

