import { Controller, Post, Body, Get } from "@nestjs/common";
import { Manga, NovoManga } from "src/colecao/domain/interfaces";
import { MangaService } from "src/colecao/domain/services";

@Controller("manga")
export class MangaController {
    constructor(
        private service: MangaService
    ) { }

    @Post("/adicionar")
    async adicionar(
        @Body() documento: NovoManga): Promise<string> {
        return this.service.adicionar(documento);
    }

    @Get("/listar")
    async listar(): Promise<Manga[]> {
        return this.service.listar();
    }
}