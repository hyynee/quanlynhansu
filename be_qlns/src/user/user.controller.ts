import { Controller, Get, HttpCode, UseGuards } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Model } from 'mongoose';
import { User } from 'Schemas/user.schemas';
import { CurrentUser } from './decorator/currentUser.decorator';
import { UserService } from './user.service';

@ApiTags('User')
@ApiBearerAuth()
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  @UseGuards(AuthGuard('jwt'))
  @HttpCode(201)
  @Get('/profile')
  async getProfile(@CurrentUser() currentUser: any): Promise<User> {
    const userId = currentUser.sub as string;
    const user = this.userService.getProfile(userId);
    return user;
  }
}
