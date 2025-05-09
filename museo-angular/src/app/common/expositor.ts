export interface Expositor{
    evento: string
    fecha: string
    articulos : articulo[]
}

export class articulo{
    id: string;
    nombre: string;
    autor: string;
    fecha: string;
    imagen: string;
    link: string; //ya no es necesario, borrar cuando se termine el resto

    //detalle
    detalle_titulo: string;
    detalle_autor: string;
    detalle_desc: string;

    constructor(Id : string, Nombre : string, Autor : string, Fecha : string, Imagen : string, Link : string, Dtitulo:string, Dautor:string, Ddesc:string){
        this.id = Id;
        this.nombre = Nombre;
        this.autor = Autor;
        this.fecha = Fecha;
        this.imagen = Imagen;
        this.link = Link;

        this.detalle_titulo = Dtitulo;
        this.detalle_autor = Dautor;
        this.detalle_desc = Ddesc;
    }

}