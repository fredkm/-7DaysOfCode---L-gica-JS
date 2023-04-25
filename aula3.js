// CAMINHO

const resposta_caminho_dev =
    prompt("Você quer seguir para área de Front-End ou seguir para a área de Back-End? Digite a área que gostaria de seguir!").toUpperCase();
if (resposta_caminho_dev === 'FRONT-END') {
    const resposta_react_vue = prompt("Você quer aprender React ou Vue? Digite o que você quer aprender!");
} else if (resposta_caminho_dev === 'BACK-END') {
    const resposta_csharp_java = prompt("Você quer aprender C# ou Java? Digite o que você quer aprender!");
} else {
    alert("Você digitou algo errado!");
}

// FULLSTACK

const resposta_fullstack =
    prompt("Você quer seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack? Digite 'especializando' ou 'Fullstack'").toUpperCase();
if (resposta_fullstack === 'ESPECIALIZANDO') {
    alert("Muito bem, então você pode procurar a Alura que disponibliza vários cursos para sua área!");
} else if (resposta_fullstack === 'FULLSTACK') {
    alert("Muito bem, então mãos à obra que temos um longo caminho!");
} else {
    alert("Você digitou algo errado!");
}

// LISTA

// PROMPT "Tem mais alguma tecnologia que você gostaria de aprender?"
// ALERT `Muito bem, você pode visitar a Alura para adquirir mais conhecimento sobre ${resposta_tecnologias} ou o Google sempre vai ser um bom amigo.`
// LISTAR Tecnologias que a pessoa quiser aprender e mostrar no fim.

let msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");

while (msg === "ok"){
    
    let novaTecnologia = prompt("Qual?");
    
    alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`)
    
    msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
        
}

alert("Obrigado por participar.")