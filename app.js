// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];


function agregarAmigo() {

    // Captura el valor del campo de entrada
    let nombre = document.getElementById("amigo").value;

    // Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Actualizar el array de amigos
    amigos.push(nombre);
    // Limpiar el campo de entrada
    document.getElementById("amigo").value = "";

    // Mostrar los amigos actualizados
    mostrarAmigos(amigos);
    
}

function mostrarAmigos(amigos) {
    // Obtener el elemento de la lista
    const listaAmigos = document.getElementById("listaAmigos");
    // Limpiar la lista existente
    listaAmigos.innerHTML = "";
    
    // Iterar sobre el arreglo
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        li.className = "name-item";
        li.setAttribute("role", "listitem");

        // Agregar elementos a la lista
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("Por favor, agrega al menos un amigo antes de sortear.");
        return;
    }
    
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar el resultado
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `<li class="result-item">El amigo secreto sorteado es: ${amigoSorteado}</li>`;
}
