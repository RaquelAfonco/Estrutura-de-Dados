// EX 6

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pedirNumeroInteiroPositivo(mensagem) {

  return new Promise((resolve, reject) => {
    rl.question(mensagem, (numero) => {
      const parsedNumber = parseInt(numero);
      if (!isNaN(parsedNumber) && parsedNumber >= 0) {
        resolve(parsedNumber);
      } else {
        reject(new Error("Por favor, insira um número inteiro não negativo válido."));
      }
    });
  });
}

function calcularFatorial(numero) {

  let fatorial = 1;

  for (let i = 1; i <= numero; i++) {
    fatorial *= i;
  }
  return fatorial;
}

async function main() {

  try {
    const numero = await pedirNumeroInteiroPositivo("Digite um número inteiro não negativo: ");

    let fatorialString = '';

    for (let i = 0; i <= numero; i++) {
      if (i === 0) {
        fatorialString += `Fatorial de ${i}: ${i}! = 1\n`;
      } else {
        fatorialString += `Fatorial de ${i}: ${i}! = ${calcularFatorial(i)}\n`;
      }
    }
    console.log(fatorialString);

  } catch (error) {

    console.error(error.message);

  } finally {
    rl.close();
  }
}

main();
