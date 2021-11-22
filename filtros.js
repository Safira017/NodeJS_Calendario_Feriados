//subcamada da camada de serviços
function filtraFeriados(feriados, numeroFeriados)
 {
     const dataAtual = new Date();
     const anoAtual = dataAtual.getFullYear();

     let proximosFeriados = [];
     let novaDataFeriado;

     feriados.forEach(feriado => {
        //colocando ano em cada data do array
        //01/01/2020...04/21/2020...
         novaDataFeriado = new Date(feriado.data + '/' + anoAtual);
        //se 01/01/2022 for maior que 01/01/2021 por ex, ano atual precisa receber + 1
         if(dataAtual > novaDataFeriado)
         {
             novaDataFeriado.setFullYear(anoAtual + 1);
         }

         proximosFeriados.push({
             nome: feriado.nome,
             data: novaDataFeriado
         });
     });
     //ordenando de forma crescente
     proximosFeriados = proximosFeriados.sort((a, b) => a.data - b.data);
     //depois de ordenar só pegar os 3 primeiros
     proximosFeriados = proximosFeriados.slice(0, numeroFeriados);

     return proximosFeriados;
 }

 export default filtraFeriados;