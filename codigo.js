let datetimeElement = document.getElementById('datetime'); // Elemento para mostrar a data e hora

function exibirDataHora() {
    // Cria um novo objeto Date com a data e hora atual
    let dataAtual = new Date();

    // Formata a data e hora no formato "DD/MM/YYYY HH:MM:SS"
    let dia = String(dataAtual.getDate()).padStart(2, '0');
    let mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    let ano = dataAtual.getFullYear();
    let horas = String(dataAtual.getHours()).padStart(2, '0');
    let minutos = String(dataAtual.getMinutes()).padStart(2, '0');
    let segundos = String(dataAtual.getSeconds()).padStart(2, '0');

    // Formata a string final
    let dataHora = `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;

    // Exibe a data e hora no elemento
    datetimeElement.innerHTML = `Data e Hora Atual: ${dataHora}`;
}

// Atualiza a data e hora a cada segundo
setInterval(exibirDataHora, 1000);