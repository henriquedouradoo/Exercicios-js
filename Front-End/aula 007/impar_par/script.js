function test() {
    let num = Number(window.prompt('Digite um número: '))
    let tipo
    if (num % 2 == 0){
        tipo = '<strong>PAR</strong>'
    }
    else {
        tipo = '<strong>IMPAR</strong>'
    }

    let res = document.querySelector('section#result')
    res.innerHTML = `<p>O número ${num} é do tipo ${tipo} `
}