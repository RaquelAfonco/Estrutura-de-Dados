// function part1() {
//   class Queue {
//     constructor() {
//       this.count = 0;
//       this.lowestCount = 0;
//       this.items = {};
//     }
//   }
// }

class Queue {
    constructor() {
      this.count = 0;
      this.lowestCount = 0;
      this.items = {};
    }

    enqueue(element) {

      // incluir elementos na fila
      this.items[this.count] = element;
      this.count++;
    }

    size() {

      // retornar o tamanho da fila
      return this.count - this.lowestCount;
    }

    isEmpty() {

      // retornar true se a fila estiver vazia
      return this.size() === 0;
    }

    dequeue() {

      // remove o elemento da frente da fila
      if (this.isEmpty()) {
        return undefined;
      }
      // armazenando o valor da frente da fila
      const result = this.items[this.lowestCount];

      // removendo o elemento da frente
      delete this.items[this.lowestCount];

      // será necessario incrementar a propriedade lowestCount
      this.lowestCount++;
      return result;
    }

    peek() {

      // mostra o elemento da frente da fila
      if (this.isEmpty()) {
        return undefined;
      }
      return this.items[this.lowestCount];
    }

    clear() {

      // para limpar a fila
      this.items = {};
      this.count = 0;
      this.lowestCount = 0;
    }

    toString() {
        
      // para imprimir a fila
      if (this.isEmpty()) {
        return " ";
      }
      let objString = `${this.items[this.lowestCount]}`;
      for (let i = this.lowestCount + 1; i < this.count; i++) {
        objString = `${objString}, ${this.items[i]}`;
      }
      return objString;
    }
  }
  
  const fila = new Queue();

  // exibe false pois esta vazia
  console.log(fila.isEmpty()); 

  // adicionar duas pessoas na fila 
  fila.enqueue('Jhon');
  fila.enqueue('Jack');

  // exibe false pois esta vazia
  console.log(fila.isEmpty()); 
  
  console.log(`A fila possui `)
