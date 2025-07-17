import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FornecedorDTO } from './fornecedorDTO.model';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  private baseUrl = 'http://localhost:8080/fornecedores';  // URL do back-end

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) {}

  // Exibe mensagens de erro ou sucesso
  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  // Obter todos os fornecedores
  getAll(): Observable<FornecedorDTO[]> {
    return this.http.get<FornecedorDTO[]>(this.baseUrl);
  }

  // Obter fornecedor por ID
  readById(forId: number): Observable<FornecedorDTO> {
    const url = `${this.baseUrl}/${forId}`;
    return this.http.get<FornecedorDTO>(url);
  }

  // Criar um novo fornecedor
  create(fornecedor: FornecedorDTO): Observable<FornecedorDTO> {
    return this.http.post<FornecedorDTO>(this.baseUrl, fornecedor);
  }

  // Atualizar fornecedor existente
  update(fornecedor: FornecedorDTO): Observable<FornecedorDTO> {
    const url = `${this.baseUrl}/${fornecedor.forId}`;
    return this.http.put<FornecedorDTO>(url, fornecedor);
  }

  // Deletar fornecedor
  delete(forId: number): Observable<void> {
    const url = `${this.baseUrl}/${forId}`;
    return this.http.delete<void>(url);
  }
}
