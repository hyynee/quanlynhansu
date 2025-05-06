import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Model } from 'mongoose';
import { Nation } from 'Schemas/nation.schema';
import { BaseResponseDTO } from 'src/createResponse/createResponse';
import { RolesGuard } from 'src/guard/role.auth';
import { CreateNationDTO } from './dto/create-nation.dto';
import { UpdateNationDTO } from './dto/update-nation.dto';
import { NationService } from './nation.service';
@ApiTags('Nation')
@Controller('nation')
@ApiBearerAuth()
export class NationController {
  constructor(
    private readonly nationService: NationService,
    @InjectModel('Nation') private nationModel: Model<Nation>,
  ) {}
  @UseGuards(AuthGuard('jwt'), new RolesGuard(['admin']))
  @HttpCode(200)
  @Get('/get-all-nation')
  getAllNation(): Promise<BaseResponseDTO<Nation[]>> {
    return this.nationService.getAllNation();
  }

  @UseGuards(AuthGuard('jwt'), new RolesGuard(['admin']))
  @HttpCode(200)
  @Get('/get-nation/:id')
  getNationbyID(
    @Param('id') id: string,
  ): Promise<BaseResponseDTO<Nation | null>> {
    return this.nationService.getNationbyID(id);
  }

  @UseGuards(AuthGuard('jwt'), new RolesGuard(['admin']))
  @HttpCode(200)
  @Post('/create')
  createNation(
    @Body() body: CreateNationDTO,
  ): Promise<BaseResponseDTO<Nation | null>> {
    return this.nationService.createNation(body);
  }

  @UseGuards(AuthGuard('jwt'), new RolesGuard(['admin']))
  @HttpCode(200)
  @Put('/update/:id')
  updateNation(
    @Body() body: UpdateNationDTO,
    @Param('id') id: string,
  ): Promise<BaseResponseDTO<Nation | null>> {
    return this.nationService.updateNation(body, id);
  }

  @UseGuards(AuthGuard('jwt'), new RolesGuard(['admin']))
  @HttpCode(200)
  @Delete('/delete/:id')
  deleteNation(
    @Param('id') id: string,
  ): Promise<BaseResponseDTO<Nation | null>> {
    return this.nationService.deleteNation(id);
  }
}
