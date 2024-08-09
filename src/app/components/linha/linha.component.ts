import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../services/item';
import { ListaService } from '../../services/lista.service';

@Component({
  selector: 'app-linha',
  standalone: true,
  imports: [],
  templateUrl: './linha.component.html',
  styleUrl: './linha.component.css'
})
export class LinhaComponent implements OnInit {

  @Input() item!: Item;

  constructor(private listaService: ListaService) {
  }

  ngOnInit() {
  }

  aumenta() {
    this.item.qt++;
    console.log(this.item);
    this.listaService.salvarItem(this.item).subscribe(() => {
    });
  }
  diminui() {
    if (this.item.qt >= 0) {
      this.item.qt--;
      console.log(this.item);
      this.listaService.salvarItem(this.item).subscribe(() => {
      });
    }
  }
}
