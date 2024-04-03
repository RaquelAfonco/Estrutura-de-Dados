// EX 3

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pedirNumero(mensagem) {

  return new Promise((resolve, reject) => {
    rl.question(mensagem, (numero) => {
      resolve(parseFloat(numero));
    });
  });
}

async function main() {

  const numero1 = await pedirNumero("Digite o primeiro número: ");
  const numero2 = await pedirNumero("Digite o segundo número: ");
  const numero3 = await pedirNumero("Digite o terceiro número: ");

  const numeros = [numero1, numero2, numero3];

  console.log("Array original:", numeros);

  numeros.sort((a, b) => b - a);

  console.log("Array ordenado em ordem decrescente:", numeros);

  rl.close();
}

main();
