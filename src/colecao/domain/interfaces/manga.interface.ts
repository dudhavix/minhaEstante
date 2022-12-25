import { StatusEnum } from "../helpers";

export interface Manga {
    nome: string;
    status: StatusEnum;
    genero: string[];
    categoria: string[];
    autor: string;
    editora: string;
    volumes: number;
    foto: string;
    _id?: string;
}

export interface NovoManga {
    nome: string;
    status: StatusEnum;
    genero: string[];
    categoria: string[];
    autor: string;
    editora: string;
    volumes: number;
    foto: string;
}