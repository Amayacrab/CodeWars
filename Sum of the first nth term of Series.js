//Sum of the first nth term of Series
//Your task is to write a function which returns the sum of following series upto nth term(parameter).
//https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript

function SeriesSum(n)
{

let resultado = 0;

//loop para pegar e somar o resultado com a divisão necessaria da progressão de 1/4, 1/7, 1/10 (sempre somando 3 na divisão)
for (x=0; x < n; x++) {

  resultado = (resultado + (1 / (1 + x * 3))); 

}

return ((resultado).toFixed(2));

}

//test log
console.log(SeriesSum(0));
console.log(SeriesSum(1));
console.log(SeriesSum(2));
console.log(SeriesSum(3));
console.log(SeriesSum(4));
console.log(SeriesSum(5));
console.log(SeriesSum(6));

/*
Resultados esperados.

Test.assertEquals(SeriesSum(1), "1.00")
Test.assertEquals(SeriesSum(2), "1.25")
Test.assertEquals(SeriesSum(3), "1.39")
Test.assertEquals(SeriesSum(4), "1.49")
*/