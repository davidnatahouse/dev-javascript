/*  Desafio:
 *    Gerar uma lista[array] com as idades ordenadas em ordem decrescente
 *
 */
const peoples = [
  { id: 1, firstName: "David", LastName: "Faria", idade: null, age: 33 },
  { id: 2, firstName: "Rafa", LastName: "Oliveira", idade: undefined, age: 21 },
  { id: 3, firstName: "Rafa", LastName: "Reis", idade: undefined, age: 31 },
];

//Your code here

const sortedPeople = peoples.sort( function(a, b){ return a.age - b.age} ).reverse();

console.log(sortedPeople[2]);

//Expected
// const ageSorted = [33, 31, 21];
