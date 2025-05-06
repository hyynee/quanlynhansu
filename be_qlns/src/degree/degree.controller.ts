import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Degree } from 'Schemas/degree.shema';
import { Model } from 'mongoose';
import { BaseResponseDTO } from 'src/createResponse/createResponse';
import { RolesGuard } from 'src/guard/role.auth';
import { DegreeService } from './degree.service';
import { CreateDegreeDTO } from './dto/create.degree.dto';
import { UpdateDegreeDTO } from './dto/update.degree.dto';
@ApiTags('Degree')
@Controller('degree')
@ApiBearerAuth()
export class DegreeController {
  constructor(
    private readonly degreeService: DegreeService,
    @InjectModel('Degree') private degreeModel: Model<Degree>,
  ) {}
  @UseGuards(AuthGuard('jwt'), new RolesGuard(['admin']))
  @HttpCode(200)
  @Get('/get-all-degree')
  getAllDegree(): Promise<BaseResponseDTO<Degree[]>> {
    return this.degreeService.getAllDegree();
  }

  @UseGuards(AuthGuard('jwt'), new RolesGuard(['admin']))
  @HttpCode(200)
  @Get('/get-degree/:id')
  getDegreeByID(
    @Param('id') id: string,
  ): Promise<BaseResponseDTO<Degree | null>> {
    return this.degreeService.getDegreeByID(id);
  }
  @UseGuards(AuthGuard('jwt'), new RolesGuard(['admin']))
  @HttpCode(200)
  @Post('/create')
  createDegree(
    @Body() body: CreateDegreeDTO,
  ): Promise<BaseResponseDTO<Degree | null>> {
    return this.degreeService.createDegree(body);
  }
  @UseGuards(AuthGuard('jwt'), new RolesGuard(['admin']))
  @HttpCode(200)
  @Post('/update/:id')
  updateDegree(
    @Param('id') id: string,
    @Body() body: UpdateDegreeDTO,
  ): Promise<BaseResponseDTO<Degree | null>> {
    return this.degreeService.updateDegree(id, body);
  }

  @UseGuards(AuthGuard('jwt'), new RolesGuard(['admin']))
  @HttpCode(200)
  @Delete('/delete/:id')
  deleteDegree(
    @Param('id') id: string,
  ): Promise<BaseResponseDTO<Degree | null>> {
    return this.degreeService.deleteDegree(id);
  }
}
