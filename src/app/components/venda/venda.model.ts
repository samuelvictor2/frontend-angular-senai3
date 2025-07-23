export interface ItemVendaDTO {
  produtoId: number;
  quantidade: number;
}

export interface VendaDTO {
  clienteId: number;
  itens: ItemVendaDTO[];
}
