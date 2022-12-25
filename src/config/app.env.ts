export interface AppEnvs {
    PORT: number;
    DATABASE_URI: string;
    FOTO_USUARIO_PADRAO: string;
}

export const APP: AppEnvs = {
    PORT: +process.env.PORT,
    DATABASE_URI: process.env.DATABASE_URI,
    FOTO_USUARIO_PADRAO: process.env.FOTO_USUARIO_PADRAO,
}