import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Item } from '../../services/item';
import { ListaService } from '../../services/lista.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  itemForm!: FormGroup;
  itembasico: any = { nome: '', qt: 0, md: 'un' };
  constructor(private listaService: ListaService, private router: Router) {
  }
  ngOnInit() {
    this.inicializarFormulario();
  }
  inicializarFormulario() {
    this.itemForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      qt: new FormControl(0, Validators.required),
      md: new FormControl('un', Validators.required)
    });
  }

  salvarItem() {
    if (this.itemForm.valid) {
      const novoItem = this.itemForm.value;
      console.log(this.itemForm.value);
      this.listaService.salvarItem(novoItem).subscribe(() => {
        this.itemForm.patchValue(this.itembasico);
        this.router.navigateByUrl('/tabela');
      });
    }
  }
}
