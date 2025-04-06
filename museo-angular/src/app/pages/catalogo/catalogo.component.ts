import { Component, OnInit } from '@angular/core';
import { ObrasService } from '../../services/obra.service';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  obras: any[] = [];  // Array para almacenar las obras

  constructor(private obrasService: ObrasService) { }

  ngOnInit(): void {
    this.obrasService.obtenerObras().subscribe((data) => {
      this.obras = data;
    });
  }

}
