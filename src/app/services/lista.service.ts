import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ListaService {
  // json-server
  // private readonly API = 'https://json-server-seven-alpha.vercel.app/lista';

  // json-server-vercel
  private readonly API = 'https://json-server-vercel-pied.vercel.app/lista';

  // localhost
  // private readonly API = 'http://127.0.0.1:3000/lista';


  constructor(private http: HttpClient) {
  }

  getItens(): Observable<Item[]> {
    return this.http.get<Item[]>(this.API);
  }

  salvarItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.API, item);
  }
}
