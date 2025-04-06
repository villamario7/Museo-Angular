import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true // Indica que este es un componente standalone
})
export class AppComponent {
  title = 'Museo Virtual de Arte';
}
