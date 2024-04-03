// EX 8

function decimalParaHexadecimal(numero) {

    if (!Number.isInteger(numero) || numero < 0) {
        return "O número fornecido não é um inteiro positivo.";
    }

    let hexadecimal = numero.toString(16).toUpperCase();
    return hexadecimal;
}

const numeroDecimal = 20;
console.log(`O número decimal ${numeroDecimal} em hexadecimal é: ${decimalParaHexadecimal(numeroDecimal)}`);
