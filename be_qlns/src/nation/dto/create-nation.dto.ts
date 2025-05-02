import { ApiProperty } from '@nestjs/swagger';

export class CreateNationDTO {
  @ApiProperty()
  name: string;
  code: string;
  population: number;
}
