export class GerenciamentoProdutos {
    public cadastrarProduto(
        nome: string,
        codigo: string,
        preco: number,
        estoqueInicial: number
    ): void {}

    public atualizarProduto(
        codigo: string,
        novosDados: {
            nome?: string,
            preco?: number,
            
        }
    ): void {}
}

export class GerenciamentoEstoque {
    public adicionarEstoque(
        codigoProduto: string,
        quantidade: number,
        data: Date
    ): void {}

    public removerEstoque(
        codigoProduto: string,
        quantidade: number,
        data: Date
    ): void {}
}

export class GerenciamentoRelatorios {
    public gerarRelatorioEstoque(): void {}

    public gerarHistoricoMovimentacao(
        dataInicio: Date,
        dataFim: Date
    ): void {}
}

