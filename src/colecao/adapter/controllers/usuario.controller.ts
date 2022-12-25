import { Body, Controller, Post } from "@nestjs/common";
import { NovoUsuario } from "src/colecao/domain/interfaces";
import { UsuarioService } from "src/colecao/domain/services";

@Controller("usuario")
export class UsuarioController {
    constructor(
        private service: UsuarioService
    ) { }

    @Post("/adicionar")
    async adicionar(
        @Body() documento: NovoUsuario): Promise<string> {
        return this.service.adicionar(documento);
    }
}