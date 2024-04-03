// EX 10

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Pilha {
  constructor() {
    this.items = [];
  }

  empilhar(element) {
    this.items.push(element);
  }

  desempilhar() {
    if (this.estaVazia()) {
      return "Pilha vazia";
    }
    return this.items.pop();
  }

  estaVazia() {
    return this.items.length === 0;
  }

  topo() {
    if (this.estaVazia()) {
      return "Pilha vazia";
    }
    return this.items[this.items.length - 1];
  }
}

function programa() {

  const pilhaPar = new Pilha();
  const pilhaImpar = new Pilha();

  function ehPar(numero) {
    return numero % 2 === 0;
  }

  let contador = 0;

  function lerNumero() {

    rl.question(`Digite o ${contador + 1}º número: `, (numero) => {

      const numeroInt = parseInt(numero);
      if (!isNaN(numeroInt)) {
        if (numeroInt === 0) {
          const desempilhadoPar = pilhaPar.desempilhar();
          const desempilhadoImpar = pilhaImpar.desempilhar();
          if (
            desempilhadoPar === "Pilha vazia" ||
            desempilhadoImpar === "Pilha vazia"
          ) {
            console.log("Erro: Uma das pilhas está vazia.");
          } else {
            console.log(
              `Número zero encontrado. Desempilhados: ${desempilhadoPar}, ${desempilhadoImpar}`
            );
          }
        } else if (ehPar(numeroInt)) {
          pilhaPar.empilhar(numeroInt);
        } else {
          pilhaImpar.empilhar(numeroInt);
        }

        contador++;
        if (contador < 10) {
          lerNumero();

        } else {
          console.log("Desempilhando todos os elementos da pilha par:");
          while (!pilhaPar.estaVazia()) {
            console.log(`Desempilhado: ${pilhaPar.desempilhar()}`);
          }
          console.log("Desempilhando todos os elementos da pilha ímpar:");
          while (!pilhaImpar.estaVazia()) {
            console.log(`Desempilhado: ${pilhaImpar.desempilhar()}`);
          }
          rl.close();
        }

      } else {
        console.log("Por favor, insira um número válido.");
        lerNumero();
      }
    });
  }

  lerNumero();

}

programa();
