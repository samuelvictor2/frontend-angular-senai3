export interface FormaPagamento {
    fpgId?: number;
    fpgDescricao: string;
    fpgAtivo: string;
    fpgPermiteParcelamento: string;
    fpgNumeroMaximoParcela: number;
    fpgTaxaAdicional: string;
  }