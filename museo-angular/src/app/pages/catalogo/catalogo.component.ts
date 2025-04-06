import { Component } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  imports: [],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {

  imagenes: any[] = [];

  ngOnInit(): void {
    fetch('assets/galeria.json')
      .then(res => res.json())
      .then(data => {
        this.imagenes = data;
      })
      .catch(err => console.error('Error al cargar JSON:', err));
  }
}