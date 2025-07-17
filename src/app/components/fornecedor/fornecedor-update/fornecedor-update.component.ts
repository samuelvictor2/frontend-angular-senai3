import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FornecedorService } from '../fornecedor.service';
import { FornecedorDTO } from '../fornecedorDTO.model';

@Component({
  selector: 'app-fornecedor-update',
  templateUrl: './fornecedor-update.component.html',
  styleUrls: ['./fornecedor-update.component.css']
})
export class FornecedorUpdateComponent implements OnInit {

  fornecedor: FornecedorDTO = {
    forId: 0,
    forNomeFantasia: '',
    forCnpj: '',
    forRazaoSocial: '',  // Adicionei forRazaoSocial aqui, conforme o seu DTO
    conCelular: '',  // Corrigido para conCelular
    conEmail: '',
    conTelefoneComercial: '',
    endRua: '',
    endNumero: '',
    endCidade: '',
    endCep: '',
    endEstado: ''
  };

  constructor(
    private fornecedorService: FornecedorService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const forId = this.route.snapshot.paramMap.get('forId');
    if (forId) {
      this.fornecedorService.readById(+forId).subscribe(
        (fornecedor: FornecedorDTO) => {
          this.fornecedor = fornecedor;
        },
        err => {
          this.fornecedorService.showMessage('Fornecedor não encontrado!', true);
          this.router.navigate(['/fornecedores']);
        }
      );
    }
  }

  updateFornecedor(): void {
    this.fornecedorService.update(this.fornecedor).subscribe(
      () => {
        this.fornecedorService.showMessage('Fornecedor atualizado com sucesso!');
        this.router.navigate(['/fornecedores']);
      },
      err => {
        this.fornecedorService.showMessage('Erro ao atualizar fornecedor.', true);
        console.error(err);
      }
    );
  }

  cancel(): void {
    this.router.navigate(['/fornecedores']);
  }
}
