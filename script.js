const calcular = document.getElementById("calcular")
const resultado = document.getElementById("resultado")


function calcularIMC() {
    const nome = document.querySelector("#nome").value
    const peso = document.querySelector("#peso").value
    const altura = document.querySelector("#altura").value
    const calculo = (peso / (altura * 2)).toFixed(2)
    const expondoResultado = resultado.textContent = `${nome}, seu IMC é: ${calculo}!`

    if (nome !== '') {
        
    } else {
        alert("Nenhum campo pode estar vazio.")
    }
}


calcular.addEventListener('click', calcularIMC)
