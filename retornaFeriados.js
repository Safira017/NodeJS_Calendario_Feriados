//camada de serviço de feriados que consome a camada de dados
import feriadosNacionais from './dataFeriados.js';
import filtraFeriados from './filtros.js';
import {formataDiaSemana, formataDataFeriado} from './formataDataFeriado.js';

function retornaProximosFeriados(numeroFeriados)
{
    let feriadosFiltro = filtraFeriados(feriadosNacionais, numeroFeriados);

    let feriadosFiltroFormatados = [];
    //percorrendo o array com os 3 proximos feriados
    feriadosFiltro.forEach(feriado => {
        //01/01/2021 de maneira americana
        const dataFeriado = feriado.data;
        //segunda, terça, e quarto por ex
        let diaSemana = formataDiaSemana(dataFeriado);
        //recebendo data formatada no padrão brasileiro
        const dataFeriadoFormatada = formataDataFeriado(dataFeriado);

        //esse array está armazenando nos 3 proximos feriados, o nome, dia da semana formatada e a data formatada 
        //padrão BR   
        feriadosFiltroFormatados.push({
            nome: feriado.nome,
            diaSemana: diaSemana,
            data: dataFeriadoFormatada
        });
    });
    //retornando o dia da semana formatado e as datas no formato do brasil
    return feriadosFiltroFormatados;
}

export default retornaProximosFeriados;