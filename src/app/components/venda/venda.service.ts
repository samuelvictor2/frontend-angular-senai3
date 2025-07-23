import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VendaDTO } from './venda.model';

@Injectable({
  providedIn: 'root'
})
export class VendaService {
  private baseUrl = 'http://localhost:8080/vendas';  // Ajuste a URL conforme necessário

  constructor(private http: HttpClient) {}

  criarVenda(venda: VendaDTO): Observable<any> {
    return this.http.post(this.baseUrl, venda);
  }

  listarVendas(): Observable<VendaDTO[]> {
    return this.http.get<VendaDTO[]>(this.baseUrl);
  }
}
