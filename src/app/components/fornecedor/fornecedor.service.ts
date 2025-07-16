import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Fornecedor } from './fornecedor.model'; // ajuste esse caminho se necessário

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  private baseUrl = 'http://localhost:8080/fornecedor';

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  getAll(): Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(this.baseUrl);
  }

  create(fornecedor: Fornecedor): Observable<Fornecedor> {
    return this.http.post<Fornecedor>(this.baseUrl, fornecedor);
  }

  update(fornecedor: Fornecedor): Observable<Fornecedor> {
    return this.http.put<Fornecedor>(`${this.baseUrl}/${fornecedor.forId}`, fornecedor);
  }

  delete(forId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${forId}`);
  }

  readById(forId: number): Observable<Fornecedor> {
    return this.http.get<Fornecedor>(`${this.baseUrl}/${forId}`);
  }
}
