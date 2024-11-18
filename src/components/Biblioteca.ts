import { Livro } from "./Livro";

export class Biblioteca {
  private acervo: Livro[] = [];

  adicionarLivro(livro: Livro): void {
    this.acervo.push(livro);
    console.log(`Livro "${livro.titulo}" adicionado ao acervo.`);
  }

  registrarEmprestimo(codigo: number): void {
    const livro = this.acervo.find((livro) => livro.codigo === codigo);
    if (!livro) {
      console.error(`Erro: Livro com código ${codigo} não encontrado.`);
      return;
    }
    if (!livro.disponivel) {
      console.error(`Erro: O livro "${livro.titulo}" já está emprestado.`);
      return;
    }
    livro.disponivel = false;
    console.log(`Empréstimo registrado: "${livro.titulo}".`);
  }

  consultarDisponibilidade(codigo: number): boolean {
    const livro = this.acervo.find((livro) => livro.codigo === codigo);
    if (!livro) {
      console.error(`Erro: Livro com código ${codigo} não encontrado.`);
      return false;
    }
    console.log(
      `O livro "${livro.titulo}" está ${
        livro.disponivel ? "disponível" : "indisponível"
      }.`
    );
    return livro.disponivel;
  }
}
