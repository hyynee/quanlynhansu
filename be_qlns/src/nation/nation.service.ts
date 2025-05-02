import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Nation } from 'Schemas/nation.schema';
import {
  BaseResponseDTO,
  errorResponse,
} from 'src/createResponse/createResponse';
import { CreateNationDTO } from './dto/create-nation.dto';
import { UpdateNationDTO } from './dto/update-nation.dto';

@Injectable()
export class NationService {
  constructor(
    @InjectModel('Nation') private readonly nationModel: Model<Nation>,
  ) {}

  async getAllNation(): Promise<BaseResponseDTO<Nation[]>> {
    const nations = await this.nationModel.find();
    return new BaseResponseDTO(200, 'Get all nations success', nations);
  }

  async getNation(id: string): Promise<BaseResponseDTO<Nation | null>> {
    const nation = await this.nationModel.findById(id);
    if (!nation) return errorResponse('Nation not found', 404);
    return new BaseResponseDTO(200, 'Get nation success', nation);
  }

  async createNation(
    data: CreateNationDTO,
  ): Promise<BaseResponseDTO<Nation | null>> {
    const existed = await this.nationModel.findOne({ name: data.name });
    if (existed) return errorResponse('Nation name already exists', 409);
    const nation = new this.nationModel(data);
    await nation.save();
    return new BaseResponseDTO(200, 'Create success', nation);
  }

  async updateNation(
    data: UpdateNationDTO,
    id: string,
  ): Promise<BaseResponseDTO<Nation | null>> {
    const existed = await this.nationModel.findById(id);
    if (!existed) return errorResponse('Nation not found', 404);
    const nameExist = await this.nationModel.findOne({
      name: data.name,
      _id: { $ne: id },
    });
    if (nameExist) return errorResponse('Nation name already exists', 409);
    await this.nationModel.updateOne({ _id: id }, data);
    const updatedNation = await this.nationModel.findById(id);
    return new BaseResponseDTO(
      200,
      'Nation updated successfully',
      updatedNation,
    );
  }
}
