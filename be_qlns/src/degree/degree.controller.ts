import { Controller } from '@nestjs/common';
import { DegreeService } from './degree.service';

@Controller('degree')
export class DegreeController {
  constructor(private readonly degreeService: DegreeService) {}
}
