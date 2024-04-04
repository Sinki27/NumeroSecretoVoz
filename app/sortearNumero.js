const menorValor = 1
const maiorValor = 300
const numeroSecreto = gererNumeroAleatorio()

function gererNumeroAleatorio() {
    return Math.floor(Math.random() * maiorValor + 1)
}
console.log('Número Secreto:', numeroSecreto)

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor