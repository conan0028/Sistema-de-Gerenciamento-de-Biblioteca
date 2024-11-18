// src/index.ts
import { Livro } from "./components/Livro";
import { Biblioteca } from "./components/Biblioteca";

// Funções para testar o sistema
function cadastrarLivros(biblioteca: Biblioteca): void {
  const livro1 = new Livro(1, "1984", "George Orwell");
  const livro2 = new Livro(2, "Dom Quixote", "Miguel de Cervantes");
  const livro3 = new Livro(3, "O Senhor dos Anéis", "J.R.R. Tolkien");

  biblioteca.adicionarLivro(livro1);
  biblioteca.adicionarLivro(livro2);
  biblioteca.adicionarLivro(livro3);
}

function registrarEmprestimo(biblioteca: Biblioteca, codigo: number): void {
  biblioteca.registrarEmprestimo(codigo);
}

function consultarDisponibilidade(
  biblioteca: Biblioteca,
  codigo: number
): void {
  biblioteca.consultarDisponibilidade(codigo);
}

// Teste do sistema
const biblioteca = new Biblioteca();

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
