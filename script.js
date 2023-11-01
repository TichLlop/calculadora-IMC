function calcularIMC() {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);

    if (!isNaN(peso) && !isNaN(altura) && altura > 0) {
        var imc = peso / (altura * altura);
        var interpretacion = interpretarIMC(imc);

        document.getElementById("resultado").innerHTML = "Su IMC es: " + imc.toFixed(2) + "<br>Interpretación: " + interpretacion;
    } else {
        document.getElementById("resultado").innerHTML = "Por favor, ingrese valores válidos para peso y altura.";
    }
}

function interpretarIMC(imc) {
    if (imc < 16) {
        return "Infrapeso severo";
    } else if (imc >= 16 && imc < 16.9) {
        return "Infrapeso moderado";
    } else if (imc >= 17 && imc < 18.4) {
        return "Infrapeso leve";
    } else if (imc >= 18.5 && imc < 24.9) {
        return "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        return "Sobrepeso";
    } else if (imc >= 30 && imc < 34.9) {
        return "Obesidad grado I (Moderada)";
    } else if (imc >= 35 && imc < 39.9) {
        return "Obesidad grado II (Severa)";
    } else {
        return "Obesidad grado III (Muy severa)";
    }
}