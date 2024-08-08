import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Item } from '../../services/item';
import { ListaService } from '../../services/lista.service';

@Component({
  selector: 'app-tabela',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tabela.component.html',
  styleUrl: './tabela.component.css'
})
export class TabelaComponent implements OnInit {
  itens: Item[] = [];
  itembasico: any = { nome: '', qt: 0, md: 'un' };
  constructor(private listaService: ListaService,) {
  }
  ngOnInit() {
    this.listaService.getItens().subscribe(listaItens => {
      this.itens = listaItens;
      console.log(listaItens);
    });
  }
}
