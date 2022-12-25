import { Schema } from "mongoose";
import { Manga } from "src/colecao/domain/interfaces";

export interface MangaDocument extends Manga { }

export const MangaSchema = new Schema<MangaDocument>({
    nome: { type: String, required: true },
    autor: { type: String, required: true },
    editora: { type: String, required: true },
    categoria: [{ type: String, required: true }],
    genero: [{ type: String, required: true }],
    status: { type: String, required: true },
    volumes: { type: Number, required: true },
    foto: { type: String, required: false },
}, {
    timestamps: true,
    collection: "Manga"
})