import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Nation extends Document {
  @Prop({
    type: String,
    required: true,
    trim: true,
    unique: true,
  })
  name: string;
  // schema Employee tham chiếu
  @Prop({ type: [{ type: String, ref: 'Employee' }] })
  @ApiProperty({ type: [String] })
  employees?: string[];

  @ApiProperty({ type: Date })
  createdAt: Date;
  @ApiProperty({ type: Date })
  updatedAt: Date;
}
export const NationSchema = SchemaFactory.createForClass(Nation);
