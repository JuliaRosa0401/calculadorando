//informar a quantidade de
//funcionários que necessitarão de transporte fretado e a quantidade de dias úteis em
//que o transporte deverá acontecer.


let funcionarios = document.getElementById('funcionarios')
let dias = document.getElementById('dias')



function customensal(){
    if (funcionarios.value >= 150){
        pessoadia = 3.6
    }
    else if (funcionarios.value >= 100){
        pessoadia = 3.8
    }
    else if (funcionarios.value >= 50){
        pessoadia = 4.1
    }
    else if (funcionarios.value >= 1){
        pessoadia = 4.5
    }
    else {
        alert ('Informe um valor maior que 0')
        res.innerHTML += `<p>Informe um valor maior que 0</p>`
        return
    }

    res.innerHTML += `<p>O resultado do Custo Mensal é R$: ${funcionarios.value * dias.value * pessoadia}</p>`

}