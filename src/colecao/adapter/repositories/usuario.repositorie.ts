import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { NovoUsuario, Usuario } from "src/colecao/domain/interfaces";
import { DI_USUARIO_SCHEMA } from "src/config";
import { UsuarioDocument } from "./schemas";

export class UsuarioRepository {
    constructor(
        @InjectModel(DI_USUARIO_SCHEMA) private readonly model: Model<UsuarioDocument>,
    ) { }

    async adicionar(documento: NovoUsuario): Promise<Usuario> {
        return this.model.create(documento);
    }
}