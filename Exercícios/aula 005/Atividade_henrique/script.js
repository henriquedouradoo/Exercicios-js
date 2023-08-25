let count = 0
let result = document.querySelector('section#result');
let result2 = document.querySelector('section#result2')

function soma() {
    count ++ 
    num1 = Number(window.prompt('Digite o primeiro número: '))
    num2 = Number(window.prompt('Digite o segundo número: '))
    somando = num1 + num2
    result.innerHTML = `<p> O resultado da operação de soma é: ${somando}`
    result2.innerHTML = `<p> A quantidade de operações é de: <mark>${count}</mark> </p>`
    
} 

function subtracao() {
    num1 = Number(window.prompt('Digite o primeiro número: '))
    num2 = Number(window.prompt('Digite o segundo número: '))
    sub_total = num1 - num2
    result.innerHTML = `<p> O resultado da operação de subtração é: ${sub_total}`
}

function multiplica() {
    num1 = Number(window.prompt('Digite o primeiro número: '))
    num2 = Number(window.prompt('Digite o segundo número: '))
    multiplica_total = num1 * num2
    result.innerHTML = `<p> O resultado da operação de multiplicação é: ${multiplica_total}`
}

function divisao() {
    num1 = Number(window.prompt('Digite o primeiro número: '))
    num2 = Number(window.prompt('Digite o segundo número: '))
    divisao_total = num1/num2
    result.innerHTML = `<p> O resultado da operação de divisão é: ${divisao_total}`

}


