let n1 = document.getElementById('n1');
let n2 = document.getElementById('n2');
let res = document.getElementById('res');


function somar() {
    res.innerHTML += `<div class="result-box"><p>O resultado da soma de ${n1.value} com ${n2.value} é ${Number(n1.value) + Number(n2.value)}</p></div>`;
}

function subtrair() {
    res.innerHTML += `<div class="result-box"><p>O resultado da subtração entre ${n1.value} e ${n2.value} é ${Number(n1.value) - Number(n2.value)}</p></div>`;
}

function multiplicar() {
    res.innerHTML += `<div class="result-box"><p>O resultado da multiplicação entre ${n1.value} e ${n2.value} é ${Number(n1.value) * Number(n2.value)}</p></div>`;
}

function dividir() {
    if (n2.value == 0) {
        alert('Não é possível dividir por zero');
        res.innerHTML += `<div class="result-box"><p>Não é possível dividir por zero</p></div>`;
    } else {
        res.innerHTML += `<div class="result-box"><p>O resultado da divisão entre ${n1.value} e ${n2.value} é ${Number(n1.value) / Number(n2.value)}</p></div>`;
    }
}

function potencia() {
    let base = Number(n1.value);
    let expoente = Number(n2.value);
    let resultado = Math.pow(base, expoente);
    res.innerHTML += `<div class="result-box"><p>${base} elevado a ${expoente} é: ${resultado}</p></div>`;
}

function raizquadrada() {
    let num1 = Number(n1.value);
    let resultado1 = Math.sqrt(num1);
    let num2 = Number(n2.value);
    let resultado2 = Math.sqrt(num2);
    res.innerHTML += `<div class="result-box"><p>A raiz quadrada de ${num1} é: ${resultado1} <br> A raiz quadrada de ${num2} é: ${resultado2}</p></div>`;
}

function limpar() {
    res.innerHTML = ''; // Limpa o conteúdo de resultados
}
