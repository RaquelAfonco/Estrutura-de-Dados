// //declarando uma classe (construtor) que representa um livro:
// function Book (title, pages, isbn) {
//     this.title = title; 
//     this.pages = pages;
//     this.isbn = isbn;
// }

// //para intanciar essa classe, podemos usar o código a seguir
// var book = new Book('Estrutura de Dados', 406, '978-85-7522-553-0');
// //acessando suas propriedades
// console.log(book.title); //exibe o titulo do livro
// book.title = 'Estrutura de Dados e algoritimos com JavaScript'
// console.log(book.title); //exibe o valor atualizado
// console.log('Este livro possui: ' + book.pages + ' páginas.');

//declarando uma classe (construtor) que representa um livro:

// -------------------------------------------------------------------------------------

// function Book (title, pages, isbn) {
//     this.title = title; 
//     this.pages = pages;
//     this.isbn = isbn;
// }

// //para instanciar essa classe, podemos usar o código a seguir
// var book = new Book('Estrutura de Dados', 406, '978-85-7522-553-0');
// //Podemos declarar e usar uma função/método:
// Book.prototype.printTitle = function(){
//     console.log(this.title);
// };
// book.printTitle();
