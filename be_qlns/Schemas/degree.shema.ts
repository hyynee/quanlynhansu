import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Degree extends Document {
  @Prop({
    type: String,
    required: true,
    trim: true,
  })
  @ApiProperty({ type: String })
  degreeName: string;

  @Prop({ type: [{ type: String, ref: 'Employee' }] })
  @ApiProperty({ type: [String] })
  employees?: string[];

  @ApiProperty({ type: Date })
  createdAt: Date;

  @ApiProperty({ type: Date })
  updatedAt: Date;
}

export const DegreeSchema = SchemaFactory.createForClass(Degree);
