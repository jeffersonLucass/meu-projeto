import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UfsModule } from './ufs/ufs.module';
import { CidadesModule } from './cidades/cidades.module';
import { EstudantesModule } from './estudantes/estudantes.module';

@Module({
  imports: [UfsModule, CidadesModule, EstudantesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
