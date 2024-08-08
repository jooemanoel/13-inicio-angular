import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  // private readonly API = 'https://json-server-seven-alpha.vercel.app/lista';
  private readonly API = 'https://json-server-vercel-pied.vercel.app/lista';
  
  constructor(private http: HttpClient) {
  }

  getItens(): Observable<Item[]> {
    return this.http.get<Item[]>(this.API);
  }

  salvarItem(item: Item): Observable<Item>{
    return this.http.post<Item>(this.API, item);
  }
}
