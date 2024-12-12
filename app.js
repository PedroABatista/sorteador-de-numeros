function sortear(){
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    let sorteados = [];

    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = numAleatorio(de, ate);

        while(sorteados.includes(sorteados)){
            numero = numAleatorio(de, ate);
        }

        sorteados.push(numero);
        alterarBotao();
    }
    document.getElementById("resultado").innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados} </label>`;
}

function numAleatorio(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarBotao(){
    let botao = document.getElementById('btn-reiniciar');   
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
      } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    limparCampos(['quantidade', 'de', 'ate']);
    alterarBotao();
}

function limparCampos(ids) {
    ids.forEach(id => {
      const campo = document.getElementById(id);
      if (campo) campo.value = ''; 
    });
  }