import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CvModule } from './cv/cv.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm' ;
import { AuthModule } from './auth/auth.module';
import { ProjectModule } from './project/project.module';

const ormOptions: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'nestjs',
    autoLoadEntities: true,
    synchronize: true,


};

@Module({
  imports: [CvModule, ProjectModule, TypeOrmModule.forRoot(ormOptions), AuthModule, ProjectModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
