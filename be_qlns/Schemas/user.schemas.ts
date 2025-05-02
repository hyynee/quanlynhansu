import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import * as bcrypt from 'bcrypt';
import { Document } from 'mongoose';

export enum ROLE {
  ADMIN = 'admin',
  EMPLOYEE = 'employee',
}

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({
    required: true,
    unique: true,
    trim: true,
    match: [/.+\@.+\..+/, 'Email không hợp lệ'],
  })
  @ApiProperty()
  email: string;

  @Prop({
    required: true,
    minlength: [6, 'Mật khẩu phải có ít nhất 6 ký tự'],
    select: false,
  })
  password: string;

  @Prop({
    enum: ROLE,
    default: ROLE.EMPLOYEE,
  })
  @ApiProperty({ enum: ROLE })
  role: ROLE;

  // schema Employee tham chiếu
  @Prop({ type: String, ref: 'Employee' })
  @ApiProperty()
  employee?: string;

  @Prop({
    default: true,
    select: false,
  })
  isActive?: boolean;

  @ApiProperty({ type: Date })
  createdAt: Date;

  @ApiProperty({ type: Date })
  updatedAt: Date;
  async comparePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}

export const UserSchema = SchemaFactory.createForClass(User);

// Hash password trước khi lưu
UserSchema.pre<User>('save', async function (next) {
  if (!this.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (err) {
    return next(err);
  }
});

UserSchema.methods.comparePassword = async function (
  password: string,
): Promise<boolean> {
  return bcrypt.compare(password, this.password);
};
