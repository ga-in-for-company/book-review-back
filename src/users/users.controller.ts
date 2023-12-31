import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserInfo } from 'src/common/interface';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UserLoginDto } from 'src/users/dto/user-login.dto';
import { VerifyEmailDto } from 'src/users/dto/verify-emial.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Post()
  async createUser(@Body() dto: CreateUserDto): Promise<void> {
    console.log(dto);
  }

  @Post('/email-verify')
  async verifyEmail(@Body() dto: VerifyEmailDto): Promise<number> {
    const randomNumber = await this.usersService.sendMemberJoinEmail(dto.receiver);
    return randomNumber;
  }

  @Post('/login')
  async login(@Body() dto: UserLoginDto): Promise<string> {
    console.log(dto);
    return;
  }

  @Get('/:id')
  async getUserInfo(@Param('id') userId: string): Promise<UserInfo> {
    console.log(userId);
    return;
  }
}
