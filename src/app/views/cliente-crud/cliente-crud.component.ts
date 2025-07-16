import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-crud',
  templateUrl: './cliente-crud.component.html',
  styleUrls: ['./cliente-crud.component.css']
})
export class ClienteCrudComponent {
  constructor(private router: Router) {}

  navigateToClienteCreate(): void {
    this.router.navigate(['/clientes/create']); // rota para o formulário de criação
  }
}
