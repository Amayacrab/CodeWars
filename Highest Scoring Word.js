// Nome : Highest Scoring Word | URL : https://www.codewars.com/kata/57eb8fcdf670e99d9b000272 | Enunciado Resumido :  
// Fazer uma função oque some o valor de cada palavra com base no valor das palavras (a=1, b=2, c=3,...) e fale a palavra que tem o maior valor

function high(x) {
    const Palav = x.split(" ")
    const valor = [];

    function ValorPalavra(x) {

        const numeros = [];
        x.split('').map(function (letra) {
            numeros.push((letra.charCodeAt(0) - 97) + 1);
        });

        let sum = 0;

        for (var i = 0; i < numeros.length; i++) {
            sum += numeros[i];
        }
        return sum;

    }

    for (var x = 0; x < Palav.length; x++) {
        valor.push(ValorPalavra(Palav[x]))
    }

    const Maior = Math.max.apply(null, valor)

    function teste(value) {
        return value == Maior;
    }
// teste
console.log(Palav)
console.log(valor)
//
    return Palav[valor.findIndex(teste)];
}

/// teste
Ditado = "Macaco velho nao trepa em galho seco";
console.log(high(Ditado))
