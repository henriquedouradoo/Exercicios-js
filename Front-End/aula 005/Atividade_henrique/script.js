let count = 0
let count_feed = 0
let result = document.querySelector('section#result');
let result2 = document.querySelector('section#result2');
let feedback = document.querySelector('section#feedback');

function soma() {
    count ++ 
    num1 = Number(window.prompt('Digite o primeiro número: '))
    num2 = Number(window.prompt('Digite o segundo número: '))
    somando = num1 + num2
    result.innerHTML = `<p> O resultado da operação de soma é: ${somando}`
    result2.innerHTML = `<p> A quantidade de operações é: <mark>${count}</mark> </p>`
    
} 

function subtracao() {
    count ++
    num1 = Number(window.prompt('Digite o primeiro número: '))
    num2 = Number(window.prompt('Digite o segundo número: '))
    sub_total = num1 - num2
    result.innerHTML = `<p> O resultado da operação de subtração é: ${sub_total}`
    result2.innerHTML = `<p> A quantidade de operações é: <mark>${count}</mark> </p>`
}

function multiplica() {
    count ++
    num1 = Number(window.prompt('Digite o primeiro número: '))
    num2 = Number(window.prompt('Digite o segundo número: '))
    multiplica_total = num1 * num2
    result.innerHTML = `<p> O resultado da operação de multiplicação é: ${multiplica_total}`
    result2.innerHTML = `<p> A quantidade de operações é: <mark>${count}</mark> </p>`
}

function divisao() {
    count ++
    num1 = Number(window.prompt('Digite o primeiro número: '))
    num2 = Number(window.prompt('Digite o segundo número: '))
    divisao_total = num1/num2
    result.innerHTML = `<p> O resultado da operação de divisão é: ${divisao_total}`
    result2.innerHTML = `<p> A quantidade de operações é: <mark>${count}</mark> </p>`
}

function nota() {
   window.alert('Clique até sua nota desejada.');
   count_feed ++
   feedback.innerHTML = `<button onclick="nota()">${count_feed} DE NOTA!</button>
   <button onclick="zerar()">ZERAR</button> `;
   if (count_feed > 5) {
        window.alert('Limite de nota atingido!');
        feedback.innerHTML = `<button> 5 DE NOTA!</button>
   <button onclick="zerar()">ZERAR</button> `;
   }
}

function zerar() {
    count_feed = 0
    feedback.innerHTML = `<button onclick="nota()">NOTA PARA SITE!</button>
    <button onclick="zerar()">ZERAR</button> `;
}


