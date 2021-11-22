//camada de exibição que consome a camada de serviço
import retornaProximosFeriados from './retornaFeriados.js';
import imprimeFeriados from './imprimeFeriados.js'

console.log('\nOs próximos feriados serão:\n')

let numeroFeriados = 3;

//Armazenando os 3 proximos feriados com as suas respectivas formatações de data e dia da semana
let proximosFeriados = retornaProximosFeriados(numeroFeriados);
//passando como parametro o array com os proximos 3 feriados com o dia da semana e as datas formatadas no padrão br
imprimeFeriados(proximosFeriados);