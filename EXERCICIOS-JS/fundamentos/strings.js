/* Strings é uma cadeia de caracteres, delimitadas por aspas, duplas aspas simples ou crase */

const escola = "Cod3r"

console.log(escola.charAt(4)) //retorna o indice na posição 4
console.log(escola.charAt(5)) // não retorna informção pois não existe um indice na posição 5
console.log(escola.charCodeAt(3)) // codigo relacionado a tabela unicode, com relação ao indice 3
console.log(escola.indexOf('3')) // existe o valor 3  dente de code? É o indice 3


console.log(escola.substring(1)) // ele vai imprimir a partir do indice 1
console.log(escola.substring(0, 3)) // ele vai do zero até o indice 3  mas ele não vai imprimir o indice 3 

console.log('Escola '.concat(escola).concat("!")) // concatena ele incluiu o literal escola e a exclamação
console.log('Escola ' + escola + "!")


console.log(escola.replace(3, 'e')) // executando ele vao substiuir o indice 3 pelo "e"
console.log(escola.replace(/\d/, 'e')) // regex - expressão regulares, substitui todos os digitos dentro do texto pela letra 'e' 
console.log(escola.replace(/\w/g, 'e')) // regex - expressão regulares, substitui todos os digitos e letras dentro do texto pela letra 'e' 

console.log('Ana,Maria,Pedro'.split(',')) /* array, estrutura linear, como se fosse um agrupador de variaveis, ou seja dentro de cada posição você tem espaço para colocar um valor
Para converter a string em array, usamos a split como separados */