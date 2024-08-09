import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Item } from '../../services/item';
import { ListaService } from '../../services/lista.service';
import { LinhaComponent } from "../linha/linha.component";

@Component({
  selector: 'app-tabela',
  standalone: true,
  imports: [RouterLink, LinhaComponent],
  templateUrl: './tabela.component.html',
  styleUrl: './tabela.component.css'
})
export class TabelaComponent implements OnInit {
  itens: Item[] = [];
  constructor(private listaService: ListaService) {
  }
  ngOnInit() {
    this.listaService.getItens().subscribe(listaItens => {
      this.itens = listaItens;
      console.log(listaItens);
    });
  }
}
