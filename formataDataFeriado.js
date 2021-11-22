//subcamada da camada de serviços
//01/01/2021
function formataDiaSemana(dataFeriado)
{
    let diasDaSemana = ["Domingo","Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    return diasDaSemana[dataFeriado.getDay()]; //retorna diasDaSemana na posição 6 por ex
    //o getDay retorna dias da semana de 0 a 6
}

function formataDataFeriado(dataFeriado)
{
    const diaFeriado = dataFeriado.getDate();
    const mesFeriado = dataFeriado.getMonth() + 1; //mes em JS é de 0 a 11 -> se fosse fev ele ia retornar 1
    const anoFeriado = dataFeriado.getFullYear();
    //deixando a data no formato do brasil
    const dataExibicao = diaFeriado+"/"+mesFeriado+"/"+anoFeriado; //01/01/2022 .. 24/01/2022...3/5/2022 por ex

    return dataExibicao;
}

export {formataDiaSemana, formataDataFeriado};