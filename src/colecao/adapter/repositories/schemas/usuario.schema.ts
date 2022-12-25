import { Schema } from "mongoose";
import { Usuario } from "src/colecao/domain/interfaces";
import { APP } from "src/config";

export interface UsuarioDocument extends Usuario { }

export const UsuarioSchema = new Schema<UsuarioDocument>({
    nome: { type: String, required: true },
    email: { type: String, required: true },
    foto: { type: String, required: true, default: APP.FOTO_USUARIO_PADRAO },
}, {
    timestamps: true,
    collection: "Usuario"
})