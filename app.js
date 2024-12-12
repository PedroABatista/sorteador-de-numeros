function sortear(){
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    if (isNaN(quantidade) || isNaN(de) || isNaN(ate) || quantidade <= 0 || de >= ate) {
        alert('Por favor, preencha os campos corretamente. "De" deve ser menor que "Até" e todos os campos devem ser números válidos.');
        return;
    }

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = numAleatorio(de, ate);
        while(sorteados.includes(numero)){
            numero = numAleatorio(de, ate);
        }
        sorteados.push(numero);
    }

    alterarBotao();
    document.getElementById("resultado").innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados.join(', ')} </label>`;
}

function numAleatorio(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarBotao(){
    let botao = document.getElementById('btn-reiniciar');   
    botao.classList.remove('container__botao-desabilitado');
    botao.classList.add('container__botao');
}

function reiniciar(){
    limparCampos(['quantidade', 'de', 'ate']);
    let botao = document.getElementById('btn-reiniciar'); 
    botao.classList.remove('container__botao');
    botao.classList.add('container__botao-desabilitado');
}

function limparCampos(ids) {
    ids.forEach(id => {
      const campo = document.getElementById(id);
      if (campo) campo.value = ''; 
    });
}