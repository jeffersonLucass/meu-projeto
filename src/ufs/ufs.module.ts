import { Module } from '@nestjs/common';
import { UfsService } from './ufs.service';
import { UfsController } from './ufs.controller';

@Module({
  controllers: [UfsController],
  providers: [UfsService],
})
export class UfsModule {}
