const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)


// expressoes...
console.log(`1 + 1 =  ${1 + 1}`) // Interpolação de Expressões. Para encapsular expressões dentro de strings


const up =  texto => texto.toUpperCase() //  função 
console.log(`Ei... ${up('cuidado')}!`)
