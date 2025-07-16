import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contato } from './contato.model';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private baseUrl = 'http://localhost:8080/contatos';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Contato[]> {
    return this.http.get<Contato[]>(this.baseUrl);
  }
  create(contato: Contato): Observable<Contato> {
  return this.http.post<Contato>(this.baseUrl, contato);
}
getById(id: number): Observable<Contato> {
  return this.http.get<Contato>(`${this.baseUrl}/${id}`);
}

update(contato: Contato): Observable<Contato> {
  return this.http.put<Contato>(`${this.baseUrl}/${contato.conId}`, contato);
}
delete(id: number): Observable<void> {
  return this.http.delete<void>(`${this.baseUrl}/${id}`);
}



}
