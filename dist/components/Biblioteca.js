"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
class Biblioteca {
    constructor() {
        this.acervo = [];
    }
    adicionarLivro(livro) {
        this.acervo.push(livro);
        console.log(`Livro "${livro.titulo}" adicionado ao acervo.`);
    }
    registrarEmprestimo(codigo) {
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
    consultarDisponibilidade(codigo) {
        const livro = this.acervo.find((livro) => livro.codigo === codigo);
        if (!livro) {
            console.error(`Erro: Livro com código ${codigo} não encontrado.`);
            return false;
        }
        console.log(`O livro "${livro.titulo}" está ${livro.disponivel ? "disponível" : "indisponível"}.`);
        return livro.disponivel;
    }
}
exports.Biblioteca = Biblioteca;
