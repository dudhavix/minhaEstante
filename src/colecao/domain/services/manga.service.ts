import { Inject } from "@nestjs/common";
import { MangaRepository } from "src/colecao/adapter/repositories";
import { DI_MANGA_REPOSITORY } from "src/config";
import { Manga, NovoManga } from "../interfaces";

export class MangaService {
    constructor(
        @Inject(DI_MANGA_REPOSITORY) private readonly repository: MangaRepository,
    ){}

    async adicionar(documento: NovoManga): Promise<string>{
        const novoManga = await this.repository.adicionar(documento);
        return novoManga._id;
    }

    async listar(): Promise<Manga[]>{
        return this.repository.listar();
    }
}