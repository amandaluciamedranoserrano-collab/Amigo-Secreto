// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema planteado, utilizando las herramientas y estructuras que consideres necesarias.


let ListaAmigos = []; // Almacenar los nombres


//Asignar los botones del html
const listaAmigos = document.getElementById("listaAmigos");
const botonAgregar = document.getElementById("agregarAmigo");
const botonSortear = document.getElementById("sortearAmigo"); 

botonAgregar.onclick("click", agregarAmigo);
botonSortear.onclick("click", sortearAmigo);

//Que se añada el nombre a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
//Si no hay nombre
    if (nombre === "") {
        resultado.innerHTML= "Ingresa un nombre a la lista!😠.";
        return;
    }
//Si repiten el mismo
    if (ListaAmigos.includes(nombre)) {
        resultado.innerHTML= "Este amigo ya está en la lista 🙄  .";
        return;
    }
//todo bien
    ListaAmigos.push(nombre);
    mostrarListaAmigos();
    input.value = "";
    resultado.innerHTML = "Amigo agregado correctamente 😎.";
}

function mostrarListaAmigos() {
    listaAmigos.innerHTML = ListaAmigos.join(", ");
}

//Para sortear los amigos 

function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    if (ListaAmigos.length === 0) {
        resultado.innerHTML = 'Ya lo sorteaste todo!!! ദ്ദി(ᵔᗜᵔ).';
        return;
    }

    //Seleccionar un amiguito al azar
    const indiceAleatorio = Math.floor(Math.random() * ListaAmigos.length);
    const nombreSorteado = ListaAmigos[indiceAleatorio];

    resultado.innerHTML = `El amigo sorteado es: ${nombreSorteado} ( ˶ˆᗜˆ˵ ) `;
    ListaAmigos.splice(indiceAleatorio, 1);
    mostrarListaAmigos();
}

// Inicializar el juego
listaAmigos.innerHTML = '';
document.getElementById('resultado').innerHTML = '';
document.getElementById('amigo').value = '';