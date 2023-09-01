const para = document.querySelector("p");

para.addEventListener("click", atualizarNome);

function atualizarNome() {
    var nome = prompt("Insira um novo nome");
    para.textContent = "Jogador 1: " + nome;
}

const para2 = document.querySelector("#ende")
para2.addEventListener("click", atualizarEnde);

function atualizarEnde() {
    var ende = prompt("Insira o seu endereço");
    para2.textContent = ("Endereço: ", ende);
}

const para3 = document.querySelector("#tel")
para3.addEventListener("click", atualizarTel);

function atualizarTel() {
    var tel = prompt("Insira o seu Telefone");
    para3.textContent = ("Telefone: ", tel);
}

const para4 = document.querySelector("#idade")
para4.addEventListener("click", atualizarIdade);

function atualizarIdade() {
    var idade = prompt("Insira a sua idade: ");
    para4.textContent = ("Idade: ", idade);
}