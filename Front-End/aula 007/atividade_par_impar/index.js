let number_01; // Declare as variáveis fora das funções para que sejam acessíveis em ambas.
let number_02;

function iniciar() {
    number_01 = Number(window.prompt('Digite o primeiro número: '));
    number_02 = Number(window.prompt('Digite o segundo número: '));
    let type1;
    let type2;

    if (number_01 % 2 === 0) {
        type1 = 'PAR';
    } else {
        type1 = 'ÍMPAR';
    }

    if (number_02 % 2 === 0) {
        type2 = 'PAR';
    } else {
        type2 = 'ÍMPAR';
    }

    let res = document.querySelector('section#resultado');
    res.innerHTML = `<p>O ${number_01} é ${type1}, este foi o que você digitou.</p>
                     <p>O ${number_02} é ${type2}, este foi o que você digitou.</p>
                     <button class="button-2" onclick="realizarOperacoes()" href="#">Continuar</button>`;
}

function realizarOperacoes() {
    let soma = number_01 + number_02;
    let subtracao = number_01 - number_02;
    let multiplicacao = number_01 * number_02;
    let divisao = number_01 / number_02;

    let contas = document.querySelector('section#resultado');
    contas.innerHTML = `<p> Números digitados: ${number_01} e ${number_02}! </p>
                        <p>Soma: ${soma}</p>
                        <p>Subtração: ${subtracao}</p>
                        <p>Multiplicação: ${multiplicacao}</p>
                        <p>Divisão: ${divisao}</p>`;
}
