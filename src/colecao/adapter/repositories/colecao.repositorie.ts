import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { AdicionarColecao, Colecao } from "src/colecao/domain/interfaces";
import { DI_COLECAO_SCHEMA } from "src/config";
import { ColecaoDocument } from "./schemas";

export class ColecaoRepository {
    constructor(
        @InjectModel(DI_COLECAO_SCHEMA) private readonly model: Model<ColecaoDocument>,
    ) { }

    async adicionar(documento: AdicionarColecao): Promise<Colecao> {
        return this.model.create(documento);
    }

    async listar(): Promise<Colecao[]> {
        return this.model.find({}, {idUsuario: 0}).populate("idManga", ["nome"]);
    }
}