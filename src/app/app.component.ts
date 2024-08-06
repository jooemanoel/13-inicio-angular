import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StartComponent } from "./components/start/start.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '13-inicio-angular';
}
