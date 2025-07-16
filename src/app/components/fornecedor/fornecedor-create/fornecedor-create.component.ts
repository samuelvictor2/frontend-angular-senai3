import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fornecedor } from '../fornecedor.model';
import { FornecedorService } from '../fornecedor.service';

@Component({
  selector: 'app-fornecedor-create',
  templateUrl: './fornecedor-create.component.html',
  styleUrls: ['./fornecedor-create.component.css']
})
export class FornecedorCreateComponent implements OnInit {

  fornecedor: Fornecedor = {
    forId: 0,  
    forNomeFantasia: '',
    forCnpj: '',
    forRazaoSocial: ''
  };

  constructor(
    private fornecedorService: FornecedorService,
    private router: Router
  ) { }

  ngOnInit(): void {}

  createFornecedor(): void {
    this.fornecedorService.create(this.fornecedor).subscribe(() => {
      this.router.navigate(['/fornecedores']);
    });
  }

  cancel(): void {
    this.router.navigate(['/fornecedores']);
  }
}
