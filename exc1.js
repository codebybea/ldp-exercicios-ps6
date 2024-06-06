// Beatriz Alves Borges - 23214290001

// 1 -
const A = [1, 5, 10, 15, 20, 25 ];
console.log("1 - ", A);

// 2 -
const k = 2;

function multArray(a, k) {
  const final = [];
  for (let number of a) {
      final.push(number * k)
  }
  return final;
}
const B = multArray(A, k); // multiplica todo o array por k
console.log("2 - ", B); 

// 3 -
const ultimoN = B.pop();
console.log("3 - ", B); // remove o ultimo numero

// 4 -
B.unshift(100);
console.log("4 - ", B); // adiciona um numero no começo do array

// 5 -
const primeiroN = B.shift();
console.log("5 -  ", B); // remove o primeiro numero

// 6 -
B.splice(1, 1);
console.log("6 - ", B); // remove o segundo numero

// 7 -
B.splice(1, 0, 10, 20, 30);
console.log("7 - ", B); // adiciona os 3 numeros no começo do array

// 8 -
const pares = B.filter((numero) => numero % 2 === 0);
console.log("8 - ", pares); // faz um novo array com somente os numeros pares

// 9 - 
const indice = B.indexOf(2);
console.log("9 - ", indice); // retorna o índice da segunda ocorrência do nuemro

// 10 -
const k = 2; 
const B = A.map(n => n * k);
console.log("10 - ", B);  //o map pega todo o array A e multiplica por k