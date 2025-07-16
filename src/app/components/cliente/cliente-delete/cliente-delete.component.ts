import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../clientes.service';
import { ClienteDTO } from '../clienteDTO.model';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css']
})
export class ClienteDeleteComponent implements OnInit {

  cliente!: ClienteDTO;

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const cliId = this.route.snapshot.paramMap.get('cliId');
    if (cliId) {
      this.clienteService.readById(cliId).subscribe(
        (cliente) => {
          this.cliente = cliente;
        },
        (error) => {
          this.clienteService.showMessage('Cliente não encontrado!');
          this.router.navigate(['/clientes']);
        }
      );
    }
  }

  deleteCliente(): void {
    if (this.cliente.cliId) {
      this.clienteService.delete(this.cliente.cliId).subscribe(
        () => {
          this.clienteService.showMessage('Cliente excluído com sucesso!');
          this.router.navigate(['/clientes']);
        },
        (error) => {
          this.clienteService.showMessage('Erro ao excluir cliente!');
        }
      );
    } else {
      this.clienteService.showMessage('ID do cliente inválido!');
    }
  }

  cancel(): void {
    this.router.navigate(['/clientes']);
  }
}
