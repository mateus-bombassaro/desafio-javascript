/*
 1. Crie uma função com as seguintes características:
    - A função deve receber 2 argumentos;
    - O retorno das funcão deve ser a soma dos dois parametros passados.
*/
const sum = (valor1, valor2) => valor1 + valor2;

exports.sum = sum;

/*
 2. Crie uma função com as seguintes características:
    - A função deve receber 2 argumentos, nome e sobrenome;
    - O retorno das funcão deve ser juncão(cancatenacão) dos dois parametros passados e retonar o nome completo.
*/
const fullName = (nome, sobrenome) => `${nome} ${sobrenome}`;
exports.fullname = fullName;

/*
 3. Crie uma função com as seguintes características:
    - A função deve receber 3 argumentos;
    - Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
      - "Preencha todos os valores corretamente!"
    - O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
const calculate = (valor1, valor2, valor3) => {
    return (!valor1 || !valor2 || !valor3)
        ? "Preencha todos os valores corretamente!"
        : (valor1 * valor2 * valor3) + 2;
}
exports.calculate = calculate

/*
 4. Crie uma função com as seguintes características:
    - A função deve receber 3 argumentos.
    - Se somente um argumento for passado, retorne o valor do argumento.
    - Se dois argumentos forem passados, retorne a soma dos dois argumentos.
    - Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
    - Se nenhum argumento for passado, retorne o valor booleano `false`.
*/
function calculatev2(valor1, valor2, valor3) {
    if(!valor2 && !valor3 && valor1) {
        return valor1;
    } else if(valor1 && valor2 && !valor3) {
        return valor1 + valor2;
    } else if(valor1 && valor2 && valor3) {
        return (valor1 + valor2) / valor3;
    } else {
        return false;
    }
}
exports.calculatev2 = calculatev2;

/*
 5. Crie uma função com as seguintes características:
    - A função deve receber 1 argumento;
    - O retorno das funcão deve ser um boolean indicando se o numero passado é um numero par ou não.
*/
const isPair = (valor) => valor % 2 === 0;
exports.isPair = isPair;
