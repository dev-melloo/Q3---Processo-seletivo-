aluno1 = prompt("Digite a nota do primeiro aluno!")
aluno2 = prompt("Digite a nota do segundo aluno!")
aluno3 = prompt("Digite a nota do terceiro aluno!")

aluno1 = parseInt(aluno1)
aluno2 = parseInt(aluno2)
aluno3 = parseInt(aluno3)

if (((aluno1 + aluno2 + aluno3) / 3) >= 6){
    console.log("Aprovado")
}
else{
    console.log("Reprovado")
}


