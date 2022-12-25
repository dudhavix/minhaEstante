import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { DI_COLECAO_REPOSITORY, DI_COLECAO_SCHEMA, DI_MANGA_REPOSITORY, DI_MANGA_SCHEMA, DI_USUARIO_REPOSITORY, DI_USUARIO_SCHEMA } from "src/config";
import { ColecaoController, MangaController, UsuarioController } from "./adapter/controllers";
import { ColecaoRepository, MangaRepository, UsuarioRepository } from "./adapter/repositories";
import { ColecaoSchema, MangaSchema, UsuarioSchema } from "./adapter/repositories/schemas";
import { ColecaoService, MangaService, UsuarioService } from "./domain/services";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: DI_COLECAO_SCHEMA, schema: ColecaoSchema }]),
        MongooseModule.forFeature([{ name: DI_MANGA_SCHEMA, schema: MangaSchema }]),
        MongooseModule.forFeature([{ name: DI_USUARIO_SCHEMA, schema: UsuarioSchema }]),
    ],
    controllers: [
        ColecaoController,
        MangaController,
        UsuarioController
    ],
    providers: [
        { provide: DI_COLECAO_REPOSITORY, useClass: ColecaoRepository },
        { provide: DI_MANGA_REPOSITORY, useClass: MangaRepository },
        { provide: DI_USUARIO_REPOSITORY, useClass: UsuarioRepository },

        ColecaoService,
        MangaService,
        UsuarioService
    ]
})
export class MinhaColecao { }