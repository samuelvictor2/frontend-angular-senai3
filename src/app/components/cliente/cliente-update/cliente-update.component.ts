import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../clientes.service';
import { ClienteDTO } from '../clienteDTO.model';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent implements OnInit {

  cliente: ClienteDTO = {
    cliId: 0,
    cliNome: '',
    cliCpf: '',
    endRua: '',
    endNumero: '',
    endCidade: '',
    endCep: '',
    endEstado: '',
    conCelular: '',
    conEmail: '',
    conTelefoneComercial: ''
  };

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const cliId = this.route.snapshot.paramMap.get('cliId');
    if (cliId) {
      this.clienteService.readById(cliId).subscribe(
        (cliente: any) => {
          // Aqui assumimos que o backend já retorna os dados no formato ClienteDTO
          this.cliente = cliente;
        },
        err => {
          this.clienteService.showMessage('Cliente não encontrado!');
          this.router.navigate(['/clientes']);
        }
      );
    }
  }

  updateCliente(): void {
    this.clienteService.update(this.cliente).subscribe(
      () => {
        this.clienteService.showMessage('Cliente atualizado com sucesso!');
        this.router.navigate(['/clientes']);
      },
      err => {
        this.clienteService.showMessage('Erro ao atualizar cliente.');
        console.error(err);
      }
    );
  }

  cancel(): void {
    this.router.navigate(['/clientes']);
  }
}
