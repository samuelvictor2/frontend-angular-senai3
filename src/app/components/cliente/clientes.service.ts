  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { MatSnackBar } from '@angular/material/snack-bar';
  import { Observable } from 'rxjs';
  import { ClienteDTO } from './clienteDTO.model';

  @Injectable({
    providedIn: 'root'
  })
  export class ClienteService {

    baseUrl = 'http://localhost:8080/clientes';

    constructor(
      private snackBar: MatSnackBar,
      private http: HttpClient
    ) {}

    // Alterado para exibir as classes de erro ou sucesso com base no valor de 'isError'
    showMessage(msg: string, isError: boolean = false): void {
      this.snackBar.open(msg, 'X', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
        panelClass: isError ? ['msg-error'] : ['msg-success']  // Aplicando as classes CSS para erro ou sucesso
      });
    }

    create(cliente: ClienteDTO): Observable<ClienteDTO> {
      return this.http.post<ClienteDTO>(this.baseUrl, cliente);
    }

    read(): Observable<ClienteDTO[]> {
      return this.http.get<ClienteDTO[]>(this.baseUrl);
    }

    // Corrigido para 'cliId' ser um número
    readById(cliId: number): Observable<ClienteDTO> {
      const url = `${this.baseUrl}/${cliId}`;
      return this.http.get<ClienteDTO>(url);
    }

    update(cliente: ClienteDTO): Observable<ClienteDTO> {
      const url = `${this.baseUrl}/${cliente.cliId}`;
      return this.http.put<ClienteDTO>(url, cliente);
    }

    // Corrigido para 'cliId' ser um número
    delete(cliId: number): Observable<void> {
      const url = `${this.baseUrl}/${cliId}`;
      return this.http.delete<void>(url); // Alterado para 'void', pois não retorna dados
    }
  }
