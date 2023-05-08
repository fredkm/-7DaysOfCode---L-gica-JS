let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];

while (true) {
    let opcao = prompt ("Deseja adicionar, remover ou sair?").toUpperCase() ;
    if (opcao === 'ADICIONAR') {
        let categoria_produto_adicionar = prompt ("Qual a categoria do produto que deseja adicionar?").toUpperCase() ;
        if (categoria_produto_adicionar === 'FRUTAS') {
                let nome_produto_adicionar = prompt ("Qual produto deseja adicionar?") ;
                frutas.push (nome_produto_adicionar) ;
        } else if (categoria_produto_adicionar === 'LATICINIOS') {
                let nome_produto_adicionar = prompt ("Qual produto deseja adicionar?") ;
                laticinios.push (nome_produto_adicionar) ;
        } else if (categoria_produto_adicionar === 'CONGELADOS') {
                let nome_produto_adicionar = prompt ("Qual produto deseja adicionar?") ;
                congelados.push (nome_produto_adicionar) ;
        } else if (categoria_produto_adicionar === 'DOCES') {
                let nome_produto_adicionar = prompt ("Qual produto deseja adicionar?") ;
                doces.push (nome_produto_adicionar) ;
        }
    } else if (opcao === 'REMOVER') {
        if (frutas.length > 0 || doces.length > 0 || congelados.length > 0 || laticinios.length > 0) {
            let categoria_produto_remover = prompt ('Qual a categoria do produto que deseja remover?').toUpperCase() ;
            if (categoria_produto_remover === 'FRUTAS') {
                let indiceFrutas = frutas.indexOf(prompt(`Qual produto deseja remover? \nFrutas: ${frutas}`)) ;
                frutas.splice(indiceFrutas, 1);
            } else if (categoria_produto_remover === 'LATICINIOS') {
                let indiceLat = laticinios.indexOf(prompt(`Qual produto deseja remover? \nLaticínios: ${laticinios}`)) ;
                laticinios.splice(indiceLat, 1);
            } else if (categoria_produto_remover === 'CONGELADOS') {
                let indiceCong = congelados.indexOf(prompt(`Qual produto deseja remover? \nCongelados: ${congelados}`)) ;
                congelados.splice(indiceCong, 1);
            } else if (categoria_produto_remover === 'DOCES') {
                let indiceDoces = doces.indexOf(prompt(`Qual produto deseja remover? \nDoces: ${doces}`)) ;
                doces.splice(indiceDoces, 1);
            }
        } else {
            alert("Não há itens na lista para remover!")
        }
    } else if (opcao === 'SAIR') {
        alert(`LISTA DE COMPRAS FINALIZADA! \nLista de compras: \n\nFrutas: ${frutas}\nLaticínios: ${laticinios}\nCongelados: ${congelados}\nDoces: ${doces}`);
        break;
    } else {
        alert("Opção não existente!")
    }
}