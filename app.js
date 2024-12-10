function sortear(){
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    let sorteados = [];

    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = numAleatorio(de, ate);
        sorteados.push(numero);
    }
    document.getElementById("resultado").innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados} </label>`;
}

function numAleatorio(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}