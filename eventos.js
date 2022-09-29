//listar as regioes por meio da api do ibge

fetch('https://servicodados.ibge.gov.br/api/v1/localidades/regioes')
.then((resposta) => (resposta.json()))
.then((regioes) => {
    regioes.forEach((cadaRegiao) => {
        document.getElementById('regiao').innerHTML += `
        <option value="${cadaRegiao.id}">${cadaRegiao.nome}</option>`;
    });
    
});

//https://servicodados.ibge.gov.br/api/v1/localidades/regioes/{macrorregiao}/estados

function escolherEstado(){
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${regiao.value}/estados`)
    .then((resposta) => (resposta.json()))
    .then((estados) => {
        
        //document.getElementById('estado').innerHTML = '';
        estados.forEach((cadaEstado) => {
        document.getElementById('estado').innerHTML += `
        <option value="${cadaEstado.id}">${cadaEstado.nome}</option>`;
    });

});
}

//https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios

function escolherMunicipio(){
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado.value}/municipios`)
    .then((resposta) => (resposta.json()))
    .then((municipios) => {
        //municipio.innerHTML = '';
        municipios.forEach((cadaMunicipio) => {
        document.getElementById('municipio').innerHTML += `
        <option >${cadaMunicipio.nome}</option>`;
         });
    });
}


