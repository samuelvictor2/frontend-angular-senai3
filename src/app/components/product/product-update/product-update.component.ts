import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product!: Product;

  constructor(
    private productService: ProductService, 
    private router: Router, 
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Obtendo o 'proId' da URL
    const proId = this.route.snapshot.paramMap.get('proId');
    
    // Verifica se o 'proId' existe
    if (proId) {
      // Faz a requisição para obter os dados do produto pelo 'proId'
      this.productService.readById(proId).subscribe(
        (product: Product) => {
          // Preenche o formulário com os dados do produto
          this.product = product;
        },
        error => {
          // Exibe uma mensagem de erro se não encontrar o produto
          this.productService.showMessage('Produto não encontrado!');
          // Redireciona para a lista de produtos
          this.router.navigate(['/products']);
        }
      );
    }
  }

  updateProduct(): void {
    // Chama o serviço para atualizar o produto
    this.productService.update(this.product).subscribe(
      () => {
        // Exibe a mensagem de sucesso
        this.productService.showMessage('Produto atualizado com sucesso!');
        // Redireciona para a lista de produtos após a atualização
        this.router.navigate(['/products']);
      },
      error => {
        // Exibe a mensagem de erro caso haja algum problema ao atualizar
        this.productService.showMessage('Erro ao atualizar produto!');
      }
    );
  }

  cancel(): void {
    // Redireciona para a lista de produtos caso o usuário cancele a operação
    this.router.navigate(['/products']);
  }
}
