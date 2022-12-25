import * as dotenv from "dotenv";
dotenv.config();

import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { APP } from "./config";
import { MinhaColecao } from "./colecao/minhaestante.module";

@Module({
    imports: [
        MongooseModule.forRoot(APP.DATABASE_URI, { useNewUrlParser: true, useUnifiedTopology: true }),
        MinhaColecao,
    ],
})

export class AppModule { }
