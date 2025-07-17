import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FornecedorService } from '../fornecedor.service';
import { FornecedorDTO } from '../fornecedorDTO.model';

@Component({
  selector: 'app-fornecedor-delete',
  templateUrl: './fornecedor-delete.component.html',
  styleUrls: ['./fornecedor-delete.component.css']
})
export class FornecedorDeleteComponent implements OnInit {

  fornecedor!: FornecedorDTO;

  constructor(
    private fornecedorService: FornecedorService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const forId = Number(this.route.snapshot.paramMap.get('forId'));
    if (forId) {
      this.fornecedorService.readById(forId).subscribe(
        (fornecedor: FornecedorDTO) => {
          this.fornecedor = fornecedor;
        },
        (error) => {
          this.fornecedorService.showMessage('Fornecedor não encontrado!');
          this.router.navigate(['/fornecedores']);
        }
      );
    }
  }

  deleteFornecedor(): void {
    if (this.fornecedor.forId) {
      this.fornecedorService.delete(this.fornecedor.forId).subscribe(
        () => {
          this.fornecedorService.showMessage('Fornecedor excluído com sucesso!');
          this.router.navigate(['/fornecedores']);
        },
        (error) => {
          this.fornecedorService.showMessage('Erro ao excluir fornecedor.');
        }
      );
    } else {
      this.fornecedorService.showMessage('ID do fornecedor inválido!');
    }
  }

  cancel(): void {
    this.router.navigate(['/fornecedores']);
  }
}
