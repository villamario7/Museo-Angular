export interface Expositor{
    evento: string
    fecha: string
    articulos : articulo[]
}

export class articulo{
    nombre: string;
    autor: string;
    fecha: string;
    imagen: string;
    link: string;

    constructor(Nombre : string, Autor : string, Fecha : string, Imagen : string, Link : string){
        this.nombre = Nombre;
        this.autor = Autor;
        this.fecha = Fecha;
        this.imagen = Imagen;
        this.link = Link;
    }

}