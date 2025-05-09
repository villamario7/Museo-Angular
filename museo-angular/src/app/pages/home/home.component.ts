import { Component, OnInit } from '@angular/core';
import { DataService } from '../../servicios/data.service';
import { dataExposicion } from '../../common/dataExposicion';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // OJO: es "styleUrls", no "styleUrl"
})
export class HomeComponent implements OnInit {
  constructor(private dataservice: DataService) {}

  dataExposiciones!: dataExposicion;
  expoIndex: number = 0;

  ngOnInit(): void {
    this.loadExposiciones();
  }

  loadExposiciones(): void {
    this.dataservice.getExposiciones().subscribe({
      next: (data) => {
        this.dataExposiciones = data;

        // Asegúrate de que la lista existe y tiene elementos
        if (this.dataExposiciones?.listaExpos?.length > 0) {
          this.setRandomIndex();
        } else {
          console.warn('No hay exposiciones disponibles.');
        }
      },
      error: (error) => {
        console.error('Error al cargar las exposiciones:', error);
        // Manejo de errores, como mostrar un mensaje al usuario o redirigir a otra página
      },
      complete: () => {
       
      }
    });
  }

  setRandomIndex(): void {
    const total = this.dataExposiciones.listaExpos.length;

    let usados: number[] = JSON.parse(localStorage.getItem('exposUsados') || '[]');
    let disponibles = [...Array(total).keys()].filter(i => !usados.includes(i));

    if (disponibles.length === 0) {
      usados = [];
      disponibles = [...Array(total).keys()];
    }

    const aleatorio = disponibles[Math.floor(Math.random() * disponibles.length)];
    this.expoIndex = aleatorio;

    usados.push(aleatorio);
    localStorage.setItem('exposUsados', JSON.stringify(usados));
  }

  getIndex() {
    return this.dataExposiciones.listaExpos[this.expoIndex];
  }
}
