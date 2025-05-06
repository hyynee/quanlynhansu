import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DegreeSchema } from 'Schemas/degree.shema';
import { DegreeController } from './degree.controller';
import { DegreeService } from './degree.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Degree', schema: DegreeSchema }]),
  ],
  controllers: [DegreeController],
  providers: [DegreeService],
})
export class DegreeModule {}
