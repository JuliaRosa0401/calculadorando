
let salario = document.getElementById('salario')
let res = document.getElementById('res')

function salarionovo() {
    if (salario.value<0){
        res.innerHTML += `<p>Não existe salário negativo !!! </p>`
    }
    else if (salario.value <= 1200) {
        res.innerHTML += `<p>O salario após o aumento é de ${Number(salario.value)*1.16 } </p>`

    }
    else if (salario.value <= 2100){
        res.innerHTML += `<p>O salario após o aumento é de ${Number(salario.value)*1.13 } </p>`
    }
    else if (salario.value <= 3000){
        res.innerHTML += `<p>O salario após o aumento é de ${Number(salario.value)*1.10 } </p>`
    }
    else{
        res.innerHTML += `<p>O salario após o aumento é de ${Number(salario.value)*1.05 } </p>`
    }

}
