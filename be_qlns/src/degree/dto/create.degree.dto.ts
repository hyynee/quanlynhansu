import { ApiProperty } from '@nestjs/swagger';

export class CreateDegreeDTO {
  @ApiProperty()
  degreeName: string;
}
