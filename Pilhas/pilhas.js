class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        //adiciona um novo item á pilha
        this.items.push(element)
    }
    pop() {
        //remover o item do topo da pilha
        return this.pop();
    }
    peek() {
        // devolve o elemento que está no topo da pilha
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        //informar se a pilha está vazia ou não
        return this.items.length === 0;
    }
    size() {
        // informar o tamanho da pilha
        return this.items.length
    }
    clear() {
        // limpa a pilha
        this.items = [];
    }
    print() {
        // imprime a pilha no console
        console.log(items.toString());
    }
}

    // criando (intancia) um objeto stack  (pilha)
const stack = new Stack();
    //verificando se a pilha stack está vazia
console.log(stack.isEmpty());

    // adicionando elementos no topo da pilha
stack.push(5);
stack.push(8);
    // exibindo o elemento do topo da pilha 
console.log(stack.peek());

    //vamos adicionar outro elemento na pilha
stack.push(11);
    //exibindo o tamanho da pilha
console.log(stack.size()); // exibe 3

    //verificando se a pilha está vazia
console.log(stack.isEmpty()); // exibe false

    // por fim, vamos acrescentar outro elemento
stack.push(15);
    // mostrando todos os elemento da pilha
    // stack.print();
    // rtirando dois elementos do topo da pilha
stack.pop();
stack.pop();
stack.print();

var pilha = new Stack();
console.log(pilha.isEmpty());

pilha.push(5);
pilha.print();
pilha.push(8);
pilha.print();
pilha.push(11);
pilha.print();
pilha.push(15);
pilha.print();
pilha.pop();
pilha.print();
pilha.pop();
pilha.print();
pilha.pop();
pilha.print();
pilha.pop();
pilha.print();
console.log(pilha.isEmpty());


function decimalToBinary(decNumber){
    var restStack = new Stack(),
    rest,
    binaryString = '';

    while(decNumber > 0) {

    //arredonda pra baixo e atribui o resto da divisão por 2 
rest = Math.floor(decNumber % 2);

    //acrescenta na pilha 
restStack.push(rest);

    //arredonda pra baixo e atribui o resultado da divisão por 2 
decNumber = Math.floor(decNumber / 2);

}
while(!restStack.isEmpty()) {
    //retira o último da pilha e acrescenta à binaryString no formato
    binaryString += restStack.pop().toString();
}
return binaryString;
}

console.log(decimaltoBinary(10));
console.log(decimaltoBinary(25));
console.log(decimaltoBinary(233));
console.log(decimaltoBinary(1000));
