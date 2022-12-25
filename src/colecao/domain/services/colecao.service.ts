import { Inject } from "@nestjs/common";
import { ColecaoRepository } from "src/colecao/adapter/repositories";
import { DI_COLECAO_REPOSITORY } from "src/config";
import { AdicionarColecao, Colecao } from "../interfaces";

export class ColecaoService {
    constructor(
        @Inject(DI_COLECAO_REPOSITORY) private readonly repository: ColecaoRepository,
    ){}

    async adicionar(documento: AdicionarColecao): Promise<string>{
        const novaColecao = await this.repository.adicionar(documento);
        return novaColecao._id;
    }

    async listar(): Promise<Colecao[]>{
        return this.repository.listar();
    }
}