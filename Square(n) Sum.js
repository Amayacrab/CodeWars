// Nome : Square(n) Sum | URL : https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript | Enunciado Resumido :  
// pegar um array, multiplicar por ele mesmo (elevar na ²) e retornar a soma

numbers = [0, 3, 4, 5]; // valor = 50

let arr = [];
numbers.push(0)

for (var i = 0; numbers.length > i; i++) {
    arr.push(numbers[i] * numbers[i])
}

function Soma(total, num) {
    return total + num;
}

print = arr.reduce(Soma);
console.log(print);