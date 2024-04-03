// EX 7

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

function criarMatriz(linhas, colunas) {

  const matriz = [];

  for (let i = 0; i < linhas; i++) {
    const linha = [];
    for (let j = 0; j < colunas; j++) {
      linha.push(i + j + 2);
    }
    matriz.push(linha);
  }
  return matriz;
}

async function main() {
  try {
    const numLinhas = await pedirNumeroInteiroPositivo("Digite a quantidade de linhas: ");
    const numColunas = await pedirNumeroInteiroPositivo("Digite a quantidade de colunas: ");
    const matriz = criarMatriz(numLinhas, numColunas);
    
    console.log("Matriz criada:");

    for (let i = 0; i < numLinhas; i++) {
      console.log(matriz[i].join(' '));
    }

  } catch (error) {
    console.error(error.message);

  } finally {
    rl.close();
  }
}

main();
