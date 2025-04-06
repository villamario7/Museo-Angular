import { articulo } from "./articulo"

export interface Expositor{
    evento: string
    fecha: string
    articulos : articulo[]
}