function media() {
    let nome = window.prompt('Qual é o nome do aluno? ')
    let nota_1 = Number(window.prompt(`Qual foi a primeira nota?`))
    let nota_2 = Number(window.prompt(`qual a outra nota? `))
    med = (nota_1 + nota_2)/2

    let mensagem
    if (med >= 6) {
        mensagem = 'meus parabéns!'
    }
    else {
        mensagem = 'Estude mais lixo!'
    }
let res = document.getElementById('situacao')
res.innerHTML = `<p>Calculando a média final de <mark>${nome}</mark>.</p>`
res.innerHTML += `<p>As notas obtidas foram <mark>${nota_1} e  ${nota_2} </mark></p>`
res.innerHTML += `<p>A média será <mark>${med}</mark></p>`
res.innerHTML += `<p>A mensagem que temos é: <strong style='color:red;'>${mensagem}</strong></p>`
}