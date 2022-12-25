import { Controller, Post, Body, Get } from "@nestjs/common";
import { AdicionarColecao, Colecao } from "src/colecao/domain/interfaces";
import { ColecaoService } from "src/colecao/domain/services";

@Controller("colecao")
export class ColecaoController {
    constructor(
        private service: ColecaoService
    ) { }

    @Post("/adicionar")
    async adicionar(
        @Body() documento: AdicionarColecao): Promise<string> {
        return this.service.adicionar(documento);
    }

    @Get("/listar")
    async listar(): Promise<Colecao[]> {
        return this.service.listar();
    }
}