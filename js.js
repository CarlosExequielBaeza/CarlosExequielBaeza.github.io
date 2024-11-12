window.onload = function () {
    var items = document.querySelectorAll('.carrusel-item');
    var totalItems = items.length;
    var indiceActual = 0;

    var arregloCarrusel = [];
    for (i = 0; i < totalItems; i++) {
        arregloCarrusel[i] = items[i];
    }

    function actualizarCarrusel() {
        var desplazamiento = -(100 * indiceActual / totalItems); 
        document.querySelector('.carrusel-contenido').style.transform = 'translateX(' + desplazamiento + '%)';
    } 
    function siguienteItem() {
        indiceActual = (indiceActual + 1) % totalItems;
        actualizarCarrusel();
    }

    
    function anteriorItem() {
        indiceActual = (indiceActual - 1 + totalItems) % totalItems;
        actualizarCarrusel();
    }

    var siguiente = document.querySelector('.carrusel-control.siguiente');
    var anterior = document.querySelector('.carrusel-control.anterior');

    siguiente.onclick = function () {
        siguienteItem();
    };

    anterior.onclick = function () {
        anteriorItem();
    };



    actualizarCarrusel();
};
/*******************************/ 

document.getElementById('formularioContacto').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
        nombre = document.getElementById('nombre').value.trim();
        correo = document.getElementById('correo').value.trim();
        mensaje = document.getElementById('mensaje').value.trim();
        categoria = document.getElementById('categoria').value.trim();

        errores = []; 

    
    if (!nombre) errores.push("Por favor ingresa tu nombre.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) errores.push("El correo es incorrecto");
    if (mensaje.length < 10) errores.push("El mensaje debe tener al menos 10 caracteres");
    if (mensaje.length > 300) errores.push("El mensaje no debe superar los 300 caracteres");
    if (!categoria) errores.push("Selecciona una categoría");

    // Limpio
         salida = document.getElementById('salidaFormulario');
    salida.innerHTML = "";  
    salida.classList.remove("error"); 

    if (errores.length > 0) {
        salida.classList.add("error");
        
        
        errores.forEach(error => {
                 p = document.createElement('p');
            p.style.color = 'red';
            p.textContent = error;
            salida.appendChild(p);
        });
    } else {
        salida.classList.remove("error");

        
             datos = [
            { etiqueta: "Nombre", valor: nombre },
            { etiqueta: "Correo Electrónico", valor: correo },
            { etiqueta: "Mensaje", valor: mensaje },
            { etiqueta: "Categoría", valor: categoria }
        ];

        datos.forEach(item => {
                 p = document.createElement('p');
            p.textContent = `${item.etiqueta}: ${item.valor}`;
            salida.appendChild(p);
        });

        
             exito = document.createElement('p');
        exito.style.color = 'green';
        exito.textContent = "¡Formulario enviado con éxito!";
        salida.appendChild(exito);

        // Limpio
        this.reset();
    }
});

