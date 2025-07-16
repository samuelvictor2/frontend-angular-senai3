import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../clientes.service';
import { ClienteDTO } from '../clienteDTO.model';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent implements OnInit {

  clientes!: ClienteDTO[];
  displayedColumns = ['cliId', 'cliNome', 'cliCpf', 'conEmail', 'conCelular', 'action'];

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.clienteService.read().subscribe(clientes => {
      this.clientes = clientes;
      console.log(clientes);
    });
  }
}
