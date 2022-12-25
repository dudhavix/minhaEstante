import { Schema } from "mongoose";
import { Colecao } from "src/colecao/domain/interfaces";

export interface ColecaoDocument extends Colecao { }

export const ColecaoSchema = new Schema<ColecaoDocument>({
    idManga: { type: Schema.Types.ObjectId, ref: "Manga", required: true },
    idUsuario: { type: Schema.Types.ObjectId, ref: "Usuario", required: true },
    volumesFaltando: [{ type: Number, required: true, default: null }],
    volumesLidos: [{ type: Number, required: true, default: null }],
    volumesPossuidos: [{ type: Number, required: true, default: null }],
}, {
    timestamps: true,
    collection: "Colecao"
})