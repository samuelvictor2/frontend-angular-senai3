import { Component, OnInit } from '@angular/core';
import { FornecedorDTO } from '../fornecedorDTO.model';
import { FornecedorService } from '../fornecedor.service';

@Component({
  selector: 'app-fornecedor-read',
  templateUrl: './fornecedor-read.component.html',
  styleUrls: ['./fornecedor-read.component.css']
})
export class FornecedorReadComponent implements OnInit {

  fornecedores: FornecedorDTO[] = [];  // Inicializado com um array vazio
  displayedColumns = ['forId', 'forNomeFantasia', 'forCnpj', 'forRazaoSocial', 'action'];

  constructor(private fornecedorService: FornecedorService) { }

  ngOnInit(): void {
    // Chama o método getAll para obter a lista de fornecedores
    this.fornecedorService.getAll().subscribe(
      (fornecedores) => {
        console.log(fornecedores);  // Verifique no console a estrutura da resposta
        this.fornecedores = fornecedores; // Atribui a resposta à variável fornecedores
      },
      (error) => {
        console.error('Erro ao carregar fornecedores:', error);
      }
    );
  }

}
