export interface Usuario {
    nome: string;
    email: string;
    foto: string;
    _id?: string;
}

export interface NovoUsuario {
    nome: string;
    email: string;
}