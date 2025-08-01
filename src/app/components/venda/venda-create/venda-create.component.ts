import { Component, OnInit } from '@angular/core';
import { VendaDTO, CompraDTO } from '../venda.model';
import { VendaService } from '../venda.service';
import { FormaPagamentoService } from 'src/app/components/formaPagamento/forma-pagamento.service';
import { ProductService } from 'src/app/components/product/product.service';
import { Router } from '@angular/router';

import { ClienteDTO } from '../../cliente/clienteDTO.model';
import { FormaPagamento } from '../../formaPagamento/formaPagamento.model';
import { ClienteService } from '../../cliente/clientes.service';
import { Product } from '../../product/product.model'; // ✅ Corrigido aqui!

@Component({
  selector: 'app-venda-create',
  templateUrl: './venda-create.component.html',
  styleUrls: ['./venda-create.component.css']
})
export class VendaCreateComponent implements OnInit {

  venda: VendaDTO = {
    cliente: {} as ClienteDTO,
    formaPagamento: {} as FormaPagamento,
    compras: [],
    dataVenda: '',
    total: 0
  };

  clientes: ClienteDTO[] = [];
  formasPagamento: FormaPagamento[] = [];
  produtos: Product[] = []; // ✅ Corrigido aqui também!
  produtoSelecionado: Product = {} as Product; // ✅ Corrigido

  quantidade: number = 1;

  constructor(
    private vendaService: VendaService,
    private clienteService: ClienteService,
    private formaPagamentoService: FormaPagamentoService,
    private produtoService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.clienteService.read().subscribe(c => this.clientes = c);
    this.formaPagamentoService.read().subscribe(f => this.formasPagamento = f);
    this.produtoService.read().subscribe(p => this.produtos = p);
  }

  adicionarProduto(): void {
    if (!this.produtoSelecionado || this.quantidade < 1) return;

    const compra: CompraDTO = {
      produto: this.produtoSelecionado,
      quantidade: this.quantidade,
      precoUnitario: this.produtoSelecionado.proPrecoVenda
    };

    this.venda.compras.push(compra);
    this.calcularTotal();
  }

  removerCompra(index: number): void {
    this.venda.compras.splice(index, 1);
    this.calcularTotal();
  }

  calcularTotal(): void {
    this.venda.total = this.venda.compras.reduce((soma, c) => {
      return soma + (c.quantidade * c.precoUnitario);
    }, 0);
  }

  criarVenda(): void {
    this.venda.dataVenda = new Date().toISOString().slice(0, 10);

    this.vendaService.create(this.venda).subscribe(() => {
      this.router.navigate(['/vendas']);
    });
  }
}
