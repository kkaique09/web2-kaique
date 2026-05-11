let sistemaEncerrado = false;

let participantes = [];

const mensagem = document.getElementById("mensagem");

const lista = document.getElementById("lista");

function validarParticipante(){

    let campoNome = document.getElementById("entrada");

    let nomeDigitado = campoNome.value;

    if(sistemaEncerrado){

        mensagem.textContent = "O sistema já foi encerrado.";

        mensagem.style.color = "red";

        return;
    }

    if(nomeDigitado.trim() === ""){

        mensagem.textContent = "Digite um nome válido.";

        mensagem.style.color = "red";

        return;
    }

    if(nomeDigitado.toUpperCase() === "SAIR"){

        mensagem.textContent = "Processamento encerrado pelo usuário.";

        mensagem.style.color = "red";

        sistemaEncerrado = true;

        return;
    }

    participantes.push(nomeDigitado);

    let itemLista = document.createElement("li");

    itemLista.textContent = nomeDigitado;

    lista.appendChild(itemLista);

    mensagem.textContent = "Participante cadastrado com sucesso!";

    mensagem.style.color = "green";

    campoNome.value = "";

    campoNome.focus();

    if(participantes.length >= 5){

        mensagem.textContent = "Lotação máxima atingida!";

        mensagem.style.color = "red";

        sistemaEncerrado = true;
    }
}