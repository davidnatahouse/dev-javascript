/**
 * Programa: Caça letras
 * Descrição:
 *      Uma função que recebe 2 parâmetros [letra e palavra], e apresente
 *      uma mensagem informando a quantidade de vezes que a [letra] aparece
 *      na [palavra]
 *
 *  Critérios de aceite
 *  1 - A função deve analisar a quantidade de letra na palavra independente se
 *  é (maiúscula ou minúscula)
 *      1.1 - Fluxo de sucesso deve mostrar a mensagem abaixo:
 *
 *            Parâmetros: letra = a,  palavra = Natause
 *
 *            Mensagem: Letra: a
 *                      Palavra: Natahouse
 *                      Quantidade encontrada:  2
 *
 *
 *  2 - A função deve verificar se os parâmetros são do tipo string e válidos
 *  "deve conter pelo menos 1 caracter)"
 *      2.1 - Se o parâmetro for inválido mostrar a mensagem:
 *            "Parâmetro Letra inválido: [valor da variável]"
 *            ou
 *            "Parâmetro Palavra inválido: [valor da variável] "
 *
 *
 */

function searchLetter(letter, word) {}

console.log("Sucesso --------------------------------------------------");
searchLetter("a", "Natahouse");
// Letra: a
// Palavra: Natahouse
// Quantidade encontrada:  2

searchLetter("H", "Natahouse");
// Letra: H
// Palavra: Natahouse
// Quantidade encontrada:  1

console.log(
  "Parâmtros inválidos [LETRA] --------------------------------------------------"
);
searchLetter(10, "Natahouse");
searchLetter(true, "Natahouse");
searchLetter({}, "Natahouse");
searchLetter([], "Natahouse");
searchLetter(undefined, "Natahouse");
searchLetter(null, "Natahouse");
searchLetter("", "Natahouse");

// Parâmetro Letra inválido: 10
// Parâmetro Letra inválido: true
// Parâmetro Letra inválido: [object Object]
// Parâmetro Letra inválido:
// Parâmetro Letra inválido: undefined
// Parâmetro Letra inválido: null
// Parâmetro Letra inválido:
// Parâmtros inválidos [PALAVRA]

console.log(
  "Parâmtros inválidos [PALAVRA] --------------------------------------------------"
);
searchLetter("A", 10);
searchLetter("A", true);
searchLetter("A", {});
searchLetter("A", []);
searchLetter("A", undefined);
searchLetter("A", null);
searchLetter("A", "");

// Parâmetro Palavra inválido: 10
// Parâmetro Palavra inválido: true
// Parâmetro Palavra inválido: [object Object]
// Parâmetro Palavra inválido:
// Parâmetro Palavra inválido: undefined
// Parâmetro Palavra inválido: null
// Parâmetro Palavra inválido:
