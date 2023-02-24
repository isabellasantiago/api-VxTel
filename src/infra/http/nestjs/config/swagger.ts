import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export default function swagger(app: INestApplication): void {
    const config = new DocumentBuilder()
        .setTitle('VxTel')
        .setDescription('Documentação das rotas da API VxTel')
        .addBearerAuth()
        .build();

    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('docs', app, document);
}