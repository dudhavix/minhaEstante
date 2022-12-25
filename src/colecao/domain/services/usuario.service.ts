import { Inject } from "@nestjs/common";
import { UsuarioRepository } from "src/colecao/adapter/repositories";
import { DI_USUARIO_REPOSITORY } from "src/config";
import { NovoUsuario } from "../interfaces";

export class UsuarioService {
    constructor(
        @Inject(DI_USUARIO_REPOSITORY) private readonly repository: UsuarioRepository,
    ){}

    async adicionar(documento: NovoUsuario): Promise<string>{
        const novoUsuario = await this.repository.adicionar(documento);
        return novoUsuario._id;
    }
}