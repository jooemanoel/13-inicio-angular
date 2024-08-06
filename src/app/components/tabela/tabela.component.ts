import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabela',
  standalone: true,
  imports: [],
  templateUrl: './tabela.component.html',
  styleUrl: './tabela.component.css'
})
export class TabelaComponent {
  constructor(private router: Router) {
  }
  exibirTelaInicial() {
    this.router.navigateByUrl('/start');
  }
}
