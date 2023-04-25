let querAdicionar = prompt("Você deseja adicionar um produto na sua lista de compras? Responda com SIM ou NÃO!").toUpperCase();

let frutas = [];
let laticínios = [];
let congelados = [];
let doces = [];

while (querAdicionar === 'SIM') {
    let adicionarProduto = prompt("Qual produto você deseja inserir?");
    if (adicionarProduto != '') {
        let categoriaProduto = prompt("Qual categoria esse produto se encaixa? Frutas, Laticínios, Congelados ou Doces.").toUpperCase();
        if (categoriaProduto === 'FRUTAS') {
            frutas.push(adicionarProduto);
        } else if (categoriaProduto === 'LATICÍNIOS') {
            laticínios.push(adicionarProduto);
        } else if (categoriaProduto === 'CONGELADOS') {
            congelados.push(adicionarProduto);
        } else if (categoriaProduto === 'DOCES') {
            doces.push(adicionarProduto);
        } else {
            alert("Categoria inválida!");
        }
        querAdicionar = prompt("Você deseja adicionar outro produto na sua lista de compras? Responda com SIM ou NÃO!").toUpperCase();
    } else {
        alert("Produto inválido!")
    }
}

if (querAdicionar === 'NÃO') {
    alert(`LISTA DE COMPRAS FINALIZADA!
            Lista de compras:
                Frutas: ${frutas}
                Laticínios: ${laticínios}
                Congelados: ${congelados}
                Doces: ${doces}`);
}

