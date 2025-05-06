import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsOptional } from 'class-validator';

export class UpdateDegreeDTO {
  @IsOptional()
  @IsMongoId()
  _id: string;
  @ApiProperty()
  degreeName: string;
}
