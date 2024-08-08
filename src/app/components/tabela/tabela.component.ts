import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Item } from '../../services/item';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ListaService } from '../../services/lista.service';

@Component({
  selector: 'app-tabela',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, FormsModule],
  templateUrl: './tabela.component.html',
  styleUrl: './tabela.component.css'
})
export class TabelaComponent implements OnInit{
  itemForm!: FormGroup;
  itens: Item[] = [];
  itembasico: any = {nome: '', qt: 0, md: 'un'};
  constructor(private listaService: ListaService,) {
  }
  ngOnInit() {
    this.inicializarFormulario();
    this.listaService.getItens().subscribe(listaItens => {
      this.itens = listaItens;
      console.log(listaItens);
    });
  }
  inicializarFormulario() {
    this.itemForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      qt: new FormControl(0, Validators.required),
      md: new FormControl('un', Validators.required)
    });
  }

  salvarItem(){
    if(this.itemForm.valid){
      const novoItem = this.itemForm.value;
      console.log(this.itemForm.value);
      this.listaService.salvarItem(novoItem).subscribe(() => {
        this.itemForm.patchValue(this.itembasico);
      });
    }
  }
}
