//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

let amigo = document.getElementById("amigo");

function adicionarAmigo() {
    if (amigo.value == "") {
        alert("Por favor, insira um nome");
    } else {
        amigos.push(amigo.value);
        amigo.value = "";
        console.log(amigos);
    }
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let novoElemento = document.createElement("li");
        novoElemento.textContent = amigos[i];
        listaAmigos.appendChild(novoElemento);
    }
}

function sortearAmigo() {
    let indice_aleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indice_aleatorio];
    document.getElementById("resultado").innerHTML = amigoSorteado;
}