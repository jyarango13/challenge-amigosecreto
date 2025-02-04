// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//array en variable global
let amigos = []

//mejorar la usabilidad y permitir que se con solo dar enter se pueda agregar los nombres
document.getElementById('amigo').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        //invocamos a la funcion agregar amigo
        agregarAmigo();
    }
});


function agregarAmigo() {
    //capturamos el valor ingresado en el input con id amigo
    let nombre = document.getElementById('amigo').value;
    //evitar datos vacios o con espacio en blanco
    if (nombre === '' || nombre === ' ') {
        alert('Por favor, inserte un nombre.')
        //evitar caracteres especiales
    } else if (!/^[a-zA-Z\s]+$/.test(nombre)) {
        alert('El nombre no puede contener caracteres especiales.')
    }

    else {
        //Evitar que se repitan los concursantes con la salvedad que sean omonimos y se pueda diferencia por la letra de su apellido
        if (amigos.includes(nombre)) {
            alert('El nombre ya existe en la lista, agregale una letra que lo diferencie.')
        } else {
            //despues de la validación se procede agregar el nombre 
            amigos.push(nombre)
            //invocamos la funcion limpiar que al mismo tiempo limpia la caja de texto y coloca el foco automaticamente para volver a escribir
            limpiar()
            //mostramos los amigos con la funcion
            mostrarAmigos()
        }

    }

}


function mostrarAmigos() {
    //obtener valor de ul con id listaAmigos
    let lista = document.getElementById('listaAmigos');
    //limpiar lista
    lista.innerHTML = ""
    for (let i = 0; i < amigos.length; i++) {
        //crear elemento li
        let li = document.createElement('li');
        //asgina contenido al li
        li.textContent = amigos[i];
        //agrega el li (hijo) a lista (ul padre)
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    //verificamos que el array no este vacio
    if (amigos.length > 0) {
        //Quite el +1 porque los array inician desde cero
        let numeroAleatorio = Math.floor(Math.random() * amigos.length);
        //capturamos el valor
        let resultado = document.getElementById('resultado');
        //asignamos el resultado y mostramos el amigo ganador
        resultado.innerHTML = `El amigo secreto sorteado es: ${amigos[numeroAleatorio]}`


        //Ponemos fina la juego limpiando la lista y el arreglo
        //obtener valor de ul con id listaAmigos
        let lista = document.getElementById('listaAmigos');
        //limpiar lista y
        lista.innerHTML = ""
        //Limpiar el arreglo para ya no seguir  sorteando y asi terminar
        amigos = []
    } else {
        alert("No hay amigos para sortear.")
        limpiar()
    }

}

function limpiar() {
    document.getElementById('amigo').value = '';
    //Volver al foco para escribir rapidamente
    document.getElementById('amigo').focus()
}
