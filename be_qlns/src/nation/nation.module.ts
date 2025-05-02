import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NationSchema } from 'Schemas/nation.schema';
import { NationController } from './nation.controller';
import { NationService } from './nation.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Nation', schema: NationSchema }]),
  ],
  controllers: [NationController],
  providers: [NationService],
})
export class NationModule {}
