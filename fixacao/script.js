// Resolva o Exercício de Fixação!

const maiorDeIdade = (nome,anoDeNascimento,anoAtual) =>{

    const saberNome = nome
    
    const caculandoIdade = anoAtual - anoDeNascimento

    return `${saberNome} é maior de idade ? ${caculandoIdade >= 18}`

}
console.log(maiorDeIdade('Daniel',2000,2023))


const maiorDeIdade2 = (name,anoDeNas,yearAtual) => {
    const saberName = name

    const caculandoIdade2 = anoDeNas - yearAtual

    return `${name} é maior de idade ? ${caculandoIdade2 >= 18}`
}

console.log(maiorDeIdade2("Fulano",2010,2023))