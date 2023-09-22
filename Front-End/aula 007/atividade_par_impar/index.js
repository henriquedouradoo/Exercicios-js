function iniciar() {
    let number_01 = Number(window.prompt('Digite o primeiro número: '));
    let number_02 = Number(window.prompt('Digite o segundo número: '));
    let type
    if (number_01 % 2 == 0) {
        type = 'PAR'
    }
    else {
        type = 'IMPAR'
    }

    if (number_02 % 2 == 0) {
        type2 = 'PAR'
    } 
    else {
        type2 = 'IMPAR'
    }

    let res = document.querySelector('section#resultado')
    res.innerHTML = `<p>O ${number_01} é ${type}, este foi o que você digitou
    <p>O ${number_02} é ${type2}, este foi o que você digitou</p>
    <a href="#">Caso queira continuar as operações! </a>`
    }

