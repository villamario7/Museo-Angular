export interface dataExposicion{
    listaExpos : exposicion[]
}

export class exposicion{
    titulo: string;
    descripcion: string;
    imagen : string;
    constructor(Titulo: string, Descripcion: string, Imagen : string){
        this.titulo = Titulo;
        this.descripcion = Descripcion;
        this.imagen = Imagen;
    }
}