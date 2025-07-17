import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FornecedorService } from '../fornecedor.service';
import { FornecedorDTO } from '../fornecedorDTO.model'; // Ajustado para usar o DTO correto

@Component({
  selector: 'app-fornecedor-create',
  templateUrl: './fornecedor-create.component.html',
  styleUrls: ['./fornecedor-create.component.css']
})
export class FornecedorCreateComponent implements OnInit {

  fornecedor: FornecedorDTO = {
    forId: 0,
    forNomeFantasia: '',
    forCnpj: '',
    forRazaoSocial: '',
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
    private fornecedorService: FornecedorService,
    private router: Router
  ) { }

  ngOnInit(): void {}

  createFornecedor(): void {
    this.fornecedorService.create(this.fornecedor).subscribe(() => {
      this.fornecedorService.showMessage('Fornecedor criado com sucesso!');
      this.router.navigate(['/fornecedores']);
    }, err => {
      this.fornecedorService.showMessage('Erro ao criar fornecedor.', true);
      console.error(err);
    });
  }

  cancel(): void {
    this.router.navigate(['/fornecedores']);
  }
}
