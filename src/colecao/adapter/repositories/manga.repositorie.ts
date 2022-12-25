import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Manga, NovoManga } from "src/colecao/domain/interfaces";
import { DI_MANGA_SCHEMA } from "src/config";
import { MangaDocument } from "./schemas";

export class MangaRepository {
    constructor(
        @InjectModel(DI_MANGA_SCHEMA) private readonly model: Model<MangaDocument>,
    ) { }

    async adicionar(documento: NovoManga): Promise<Manga> {
        return this.model.create(documento);
    }

    async listar(): Promise<Manga[]> {
        return this.model.find();
    }
}