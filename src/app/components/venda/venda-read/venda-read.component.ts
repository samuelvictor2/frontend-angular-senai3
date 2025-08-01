import { Component, OnInit } from '@angular/core';
import { VendaService } from '../venda.service';
import { VendaDTO } from '../venda.model';

@Component({
  selector: 'app-venda-read',
  templateUrl: './venda-read.component.html',
  styleUrls: ['./venda-read.component.css']
})
export class VendaReadComponent implements OnInit {
  vendas: VendaDTO[] = [];

  constructor(private vendaService: VendaService) {}

  ngOnInit(): void {
    this.loadVendas();
  }

  loadVendas(): void {
    this.vendaService.findAll().subscribe({
      next: (data) => this.vendas = data,
      error: (e) => console.error(e)
    });
  }
}
