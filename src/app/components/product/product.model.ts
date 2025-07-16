export interface Product {
    proId?: number;
    proNome: string;
    proPrecoCusto: number;
    proPrecoVenda: number;
    proQuantidadeEstoque: number;
    proCategoria: string;
    proCodigoDeBarras: string;
    proMarca: string;
    proUnidadeMedida: string;
    proAtivo: string;
    proDataCadastro: Date;
    proDataAtualizacao: Date;
  }