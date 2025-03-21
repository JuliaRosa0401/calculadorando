let n1 = document.getElementById('n1')
let horasu = document.getElementById('horasu')
let horasf = document.getElementById('horasf')
let res = document.getElementById('res')

function calcular() {
    let horatrabalho = Number(n1.value)/ 200
    let resultado1 = horatrabalho*Number(horasu.value)
    let resultado2 = [horatrabalho*1.5]*Number(horasf.value)
    res.innerHTML += `<p> Valor da Hora de trabalho é ${horatrabalho}`
    res.innerHTML += `<p>O resultado das Horas Extras nos dias uteis é ${resultado1}</p>`
    res.innerHTML += `<p>O resultado das Horas Extras nos finais de semana é ${resultado2}</p>`
    res.innerHTML += `<p>O resultado das Horas Extras final é ${resultado2 + resultado1}</p>`

}


//Para calcular, divida o salário bruto por 200 (total de horas mensais) para descobrir o
//valor da hora trabalhada. Depois multiplique pela quantidade de horas extras
//normais.

//res.value = Number(n1.value) + Number(n2.value)