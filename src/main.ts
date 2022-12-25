import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { APP } from './config';
import { join } from "path";
import * as express from "express";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.use(express.static(join("public")));
    app.enableCors();
    await app.listen(APP.PORT);
}
bootstrap();
