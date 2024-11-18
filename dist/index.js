"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const Livro_1 = require("./components/Livro");
const Biblioteca_1 = require("./components/Biblioteca");
// Funções para testar o sistema
function cadastrarLivros(biblioteca) {
    const livro1 = new Livro_1.Livro(1, "1984", "George Orwell");
    const livro2 = new Livro_1.Livro(2, "Dom Quixote", "Miguel de Cervantes");
    const livro3 = new Livro_1.Livro(3, "O Senhor dos Anéis", "J.R.R. Tolkien");
    biblioteca.adicionarLivro(livro1);
    biblioteca.adicionarLivro(livro2);
    biblioteca.adicionarLivro(livro3);
}
function registrarEmprestimo(biblioteca, codigo) {
    biblioteca.registrarEmprestimo(codigo);
}
function consultarDisponibilidade(biblioteca, codigo) {
    biblioteca.consultarDisponibilidade(codigo);
}
// Teste do sistema
const biblioteca = new Biblioteca_1.Biblioteca();
console.log("Cadastrando livros...");
cadastrarLivros(biblioteca);
console.log("\nConsultando disponibilidade...");
consultarDisponibilidade(biblioteca, 1);
console.log("\nRegistrando empréstimo...");
registrarEmprestimo(biblioteca, 1);
console.log("\nConsultando disponibilidade novamente...");
consultarDisponibilidade(biblioteca, 1);
console.log("\nTentando emprestar o mesmo livro novamente...");
registrarEmprestimo(biblioteca, 1);
console.log("\nConsultando um livro inexistente...");
consultarDisponibilidade(biblioteca, 99);
