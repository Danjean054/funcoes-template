// Acompanhe a Prática Guiada e repita o exercício no Momento de Réplica!
/*function imprimirNome(nome){
    console.log(`Olá, ${nome}`)
}*/

const imprimirNome = function(nome){
   let dd = console.log(`Olá, ${nome}`)
}

imprimirNome("Daniel")
imprimirNome("Ana")
imprimirNome("Camila")

const fazerOperacoes = (numero) => {
    const verificar = numero %2 ===0
    const soma = numero + 10
    const multiplica = numero * numero

    return`O número ${numero} é par ? ${verificar}. Somado com 10 o resultado é ${soma}. Multiplicado por ele mesmo o resultado é ${multiplica}`
}

console.log(fazerOperacoes(12));

const verificarDados = (login,senha) =>{
    const loginArmazenado = "d@gmail.com"
    const senhaArmazenada = "123456"

    return loginArmazenado === login && senhaArmazenada === senha
}

console.log(verificarDados("d@gmail.com", "123456"));