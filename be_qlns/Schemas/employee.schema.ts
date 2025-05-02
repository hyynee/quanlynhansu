import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, Query } from 'mongoose';

export enum STATUS {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

@Schema({
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (doc, ret) => {
      delete ret.__v;
      return ret;
    },
  },
})
export class Employee extends Document {
  @Prop({ required: true, trim: true, maxlength: 50 })
  @ApiProperty()
  firstName: string;

  @Prop({ required: true, trim: true, maxlength: 50 })
  @ApiProperty()
  lastName: string;

  @Prop({
    required: true,
    unique: true,
    lowercase: true,
    match: [/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Invalid email format'],
  })
  @ApiProperty()
  email: string;

  @Prop({ required: true })
  @ApiProperty()
  dateOfBirth: Date;

  @Prop()
  @ApiProperty()
  birthPlace?: string;

  @Prop({
    required: true,
    unique: true,
    match: [/^[0-9]{9,12}$/, 'Invalid identification code format'],
  })
  @ApiProperty()
  identificationCode: string;

  @Prop({ required: true })
  @ApiProperty()
  dateRange: Date;

  @Prop({ required: true })
  @ApiProperty()
  issuedBy: string;

  @Prop({ required: true })
  @ApiProperty({ example: 'Việt Nam' })
  nationality: string;

  @Prop({ type: String, ref: 'Nation' })
  @ApiProperty({ example: 'nation-id-1' })
  nationId?: string;

  @Prop()
  @ApiProperty()
  religion?: string;

  @Prop({ required: true })
  @ApiProperty()
  phone: string;

  @Prop()
  @ApiProperty()
  address: string;

  @Prop()
  @ApiProperty()
  imageUrl: string;

  @Prop({
    enum: ['nam', 'nu', 'khac'],
    required: true,
  })
  @ApiProperty({ enum: ['nam', 'nu', 'khac'] })
  sex: 'nam' | 'nu' | 'khac';

  @Prop({ type: String, ref: 'Degree' })
  @ApiProperty({ example: 'degree-id-1' })
  degree?: string;

  @Prop()
  @ApiProperty()
  specialize?: string;

  @Prop()
  @ApiProperty()
  experience?: string;

  @Prop({ type: String, ref: 'Department' })
  @ApiProperty({ required: false })
  departmentId?: string;

  @Prop({ type: String, ref: 'Position', required: true })
  @ApiProperty()
  positionId: string;

  @Prop({ type: String, ref: 'TypeOfEmployee', required: true })
  @ApiProperty({ example: 'type-id-uuid' })
  typeOfEmployeeId: string;

  @Prop({ enum: STATUS, default: STATUS.ACTIVE })
  @ApiProperty({ enum: STATUS })
  status: STATUS;

  @Prop({
    type: String,
    ref: 'User',
    unique: true,
    sparse: true,
  })
  @ApiProperty()
  userId?: string;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);

EmployeeSchema.virtual('fullName').get(function () {
  return `${this.firstName} ${this.lastName}`;
});

EmployeeSchema.pre<Query<any, any>>(/^find/, function (next) {
  this.populate('userId', '-password -__v')
    .populate('departmentId', 'name')
    .populate('positionId', 'title')
    .populate('typeOfEmployeeId', 'name')
    .populate('nationId', 'name')
    .populate('degree', 'name');
  next();
});
