import { Manga } from "./manga.interface";
import { Usuario } from "./usuario.interface";

export interface Colecao {
    idManga: Manga;
    idUsuario: Usuario;
    volumesPossuidos: number[];
    volumesFaltando: number[];
    volumesLidos: number[];
    _id?: string;
}

export interface AdicionarColecao {
    idManga: Manga;
    idUsuario: Usuario;
    volumesPossuidos: number[];
    volumesFaltando: number[];
    volumesLidos: number[];
}