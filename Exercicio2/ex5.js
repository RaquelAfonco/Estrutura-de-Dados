// EX 5

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pedirNumeroInteiroPositivo(mensagem) {

  return new Promise((resolve, reject) => {
    rl.question(mensagem, (numero) => {
      const parsedNumber = parseInt(numero);
      if (!isNaN(parsedNumber) && parsedNumber > 0) {
        resolve(parsedNumber);

      } else {
        reject(new Error("Por favor, insira um número inteiro positivo válido."));
      }
    });
  });
}

function gerarFibonacci(numero) {

  const fibonacci = [0, 1];

  for (let i = 2; i < numero; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }
  return fibonacci;
}

async function main() {

  try {
    const numero = await pedirNumeroInteiroPositivo("Digite um número inteiro positivo: ");
    const numerosFibonacci = gerarFibonacci(numero);

    console.log("Números de Fibonacci até", numero, ":", numerosFibonacci.join(', '));

  } catch (error) {
    console.error(error.message);

  } finally {
    rl.close();
  }
}

main();
