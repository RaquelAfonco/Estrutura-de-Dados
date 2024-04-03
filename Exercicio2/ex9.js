// EX 9

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
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

    const pilha = new Pilha();

    function ehPar(numero) {
        return numero % 2 === 0;
    }

    let contador = 0;

    function lerNumero() {
        rl.question(`Digite o ${contador + 1}º número: `, (numero) => {
            const numeroInt = parseInt(numero);

            if (!isNaN(numeroInt)) {
                if (ehPar(numeroInt)) {
                    pilha.empilhar(numeroInt);

                } else {
                    const desempilhado = pilha.desempilhar();
                    if (desempilhado === "Pilha vazia") {
                        console.log("A pilha está vazia. Não foi possível desempilhar.");

                    } else {
                        console.log(`Número ímpar encontrado. Desempilhado: ${desempilhado}`);
                    }
                }

                contador++;
                if (contador < 10) {
                    lerNumero();

                } else {
                    while (!pilha.estaVazia()) {
                        console.log(`Desempilhado: ${pilha.desempilhar()}`);
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
