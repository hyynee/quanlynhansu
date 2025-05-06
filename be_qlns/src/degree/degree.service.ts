import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Degree } from 'Schemas/degree.shema';
import {
  BaseResponseDTO,
  errorResponse,
} from 'src/createResponse/createResponse';
import { CreateDegreeDTO } from './dto/create.degree.dto';
import { UpdateDegreeDTO } from './dto/update.degree.dto';

@Injectable()
export class DegreeService {
  constructor(@InjectModel('Degree') private degreeModel: Model<Degree>) {}
  async getAllDegree() {
    const degrees = await this.degreeModel.find();
    return new BaseResponseDTO(200, 'Get all degrees success', degrees);
  }
  async getDegreeByID(id: string): Promise<BaseResponseDTO<Degree | null>> {
    const degree = await this.degreeModel.findById(id);
    if (!degree) {
      return errorResponse('Degree not found', 404);
    }
    return new BaseResponseDTO(200, 'Get degree success', degree);
  }

  async createDegree(
    body: CreateDegreeDTO,
  ): Promise<BaseResponseDTO<Degree | null>> {
    const existed = await this.degreeModel.findOne({
      degreeName: body.degreeName,
    });
    if (existed) return errorResponse('Degree name already exists', 409);
    const degree = new this.degreeModel(body);
    await degree.save();
    return new BaseResponseDTO(200, 'Create success', degree);
  }

  async updateDegree(
    id: string,
    body: UpdateDegreeDTO,
  ): Promise<BaseResponseDTO<Degree | null>> {
    const existed = await this.degreeModel.findOne({
      degreeName: body.degreeName,
    });
    if (existed) return errorResponse('Degree name already exists', 409);
    const degree = await this.degreeModel.findByIdAndUpdate(id, body, {
      new: true,
    });
    if (!degree) return errorResponse('Degree not found', 404);
    return new BaseResponseDTO(200, 'Update success', degree);
  }

  async deleteDegree(id: string): Promise<BaseResponseDTO<Degree | null>> {
    const degree = await this.degreeModel.findByIdAndDelete(id);
    if (!degree) return errorResponse('Degree not found', 404);
    return new BaseResponseDTO(200, 'Delete success', degree);
  }
}
