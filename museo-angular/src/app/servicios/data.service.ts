import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Expositor, articulo } from '../common/expositor';
import { dataExposicion } from '../common/dataExposicion';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) { }

  getArticulos(): Observable<Expositor>{
    return this.http.get<Expositor>('data/data.json');
  }

  getArticuloById(id : string): Observable<articulo>{
    return this.getArticulos().pipe(map(
      arts=>{
        const articuloSingular = arts.articulos.find(articuloSingular => articuloSingular.id == id);

        if(!articuloSingular){
          throw new Error ('No se encontró el articulo con el id' + id);
        }
        return articuloSingular;
      }
    )
  )
  }

  getExposiciones() : Observable<dataExposicion>{
    return this.http.get<dataExposicion>('data/expo.json');
  }

  //establecer el protocolo http
  //1. importar el modulo httpClient
  //2. importar el modulo httpClientModule en el app.module.ts
  //3. inyectar el httpClient en el constructor del servicio
  //4. crear un metodo que devuelva un observable
  //5. llamar al metodo en el componente jugadores
  //6. suscribirse al observable en el componente jugadores
  //7. mostrar los datos en el html del componente jugadores
}
