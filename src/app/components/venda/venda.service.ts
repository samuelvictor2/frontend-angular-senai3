import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VendaDTO } from './venda.model';

@Injectable({
  providedIn: 'root'
})
export class VendaService {
  private baseUrl = 'http://localhost:8080/vendas';

  constructor(private http: HttpClient) {}

  create(venda: VendaDTO): Observable<VendaDTO> {
    return this.http.post<VendaDTO>(this.baseUrl, venda);
  }

  findAll(): Observable<VendaDTO[]> {
    return this.http.get<VendaDTO[]>(this.baseUrl);
  }

  findById(id: number): Observable<VendaDTO> {
    return this.http.get<VendaDTO>(`${this.baseUrl}/${id}`);
  }
}
