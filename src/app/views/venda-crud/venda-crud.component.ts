import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-venda-crud',
  templateUrl: './venda-crud.component.html',
  styleUrls: ['./venda-crud.component.css']
})
export class VendaCrudComponent {
  constructor(private router: Router) {}

  // Método para navegar até a página de criação de venda
  navigateToVendaCreate(): void {
    this.router.navigate(['/vendas/create']); // rota para o formulário de criação
  }
}
