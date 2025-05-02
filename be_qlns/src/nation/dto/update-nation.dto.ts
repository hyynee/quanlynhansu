import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsOptional } from 'class-validator';

export class UpdateNationDTO {
  @IsOptional()
  @IsMongoId()
  _id: string;
  @ApiProperty()
  name: string;
}
