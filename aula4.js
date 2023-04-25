// Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).

// Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. 

//Caso erre, ele vai te dar mais 2 tentativas. 

//No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial. 

//Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número pré-definido.



const numeroAdivinhacao = Math.floor(Math.random() * (10 - 0 + 1) + 0); // para utilizar um número aleatório.

//const numeroAdivinhacao = 7; // para utilizar um número pré-definido.

let tentativasRestantes = 3;

while (tentativasRestantes > 0) {
    
    chute = prompt("Qual o valor entre 0 e 10 que você deseja chutar?");
    
    if (chute == numeroAdivinhacao) {
        alert("Parabéns, você acertou!");
        break;
    } else {
        tentativasRestantes--;
        alert(`Você errou, tente novamente! (${tentativasRestantes} tentativas restantes!)`);
    }
}

if (tentativasRestantes === 0) {
alert(`Você perdeu, o número certo era ${numeroAdivinhacao}!`);
}


//-------------------------------------------------

const numeroAdivinhacao = Math.floor(Math.random() * (10 - 0 + 1) + 0); // para utilizar um número aleatório.

//const numeroAdivinhacao = 7; // para utilizar um número pré-definido.

for (tentativasRestantes = 3; tentativasRestantes > 0; tentativasRestantes = tentativasRestantes - 1) {
    
    chute = prompt("Qual o valor entre 0 e 10 que você deseja chutar?");
    
    if (chute == numeroAdivinhacao) {
        alert("Parabéns, você acertou!");
        break;
    } else {
        alert(`Você errou, tente novamente! (${tentativasRestantes - 1} tentativas restantes!)`);
    }
}

if (tentativasRestantes === 0) {
    alert(`Você perdeu, o número certo era ${numeroAdivinhacao}!`);
}




