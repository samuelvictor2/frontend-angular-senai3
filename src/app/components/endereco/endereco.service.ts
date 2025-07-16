import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Endereco } from './endereco.model';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  private baseUrl = 'http://localhost:8080/enderecos';

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

  getAll(): Observable<Endereco[]> {
    return this.http.get<Endereco[]>(this.baseUrl);
  }

  create(endereco: Endereco): Observable<Endereco> {
    return this.http.post<Endereco>(this.baseUrl, endereco);
  }

  update(endereco: Endereco): Observable<Endereco> {
    return this.http.put<Endereco>(`${this.baseUrl}/${endereco.endId}`, endereco);
  }

  delete(endId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${endId}`);
  }

  readById(endId: number): Observable<Endereco> {
    return this.http.get<Endereco>(`${this.baseUrl}/${endId}`);
  }
}
