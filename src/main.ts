import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle("Nest CV API")
        .setDescription("Cv Maker Api")
    .setVersion("1.0")
    .build();
  app.enableCors({
  origin: ["https://localhost:4200"]});
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("/", app, document);

  await app.listen(3000);
}

bootstrap().then();