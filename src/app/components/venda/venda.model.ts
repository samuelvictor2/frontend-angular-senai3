import { ClienteDTO } from '../cliente/clienteDTO.model';
import { FormaPagamento } from '../formaPagamento/formaPagamento.model';
import { Product } from '../product/product.model';

export interface CompraDTO {
  produto: Product; // Corrigido aqui!
  quantidade: number;
  precoUnitario: number;
}

export interface VendaDTO {
  id?: number;
  cliente: ClienteDTO;
  formaPagamento: FormaPagamento;
  compras: CompraDTO[];
  dataVenda: string;
  total: number;
}
