import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class TypeOfEmployee extends Document {
  @Prop({ required: true, trim: true, maxlength: 191 })
  @ApiProperty({ example: 'Full-time' })
  name: string;

  createdAt: Date;
  updatedAt: Date;
}

export const TypeOfEmployeeSchema =
  SchemaFactory.createForClass(TypeOfEmployee);
