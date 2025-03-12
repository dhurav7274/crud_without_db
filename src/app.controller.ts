import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserDto } from './UserDto';

interface Message {
  success: boolean;
  message?: string;
  data?: any;
}

@Controller('user')
export class AppController {
  private USER: UserDto[] = [];

  @Get('/findAll')
  findAll(): Message {
    return { success: true, data: this.USER };
  }

  @Get('/findOne/:id')
  findOne(@Param('id') id: string): Message {
    const user = this.USER.find((user) => user.id === +id);
    if (!user) {
      return { success: false, message: 'User not found !!' };
    }
    return { success: true, data: user };
  }

  @Post('/create')
  create(@Body() userDto: UserDto): Message {
    if (this.USER.some((user) => user.id === userDto.id)) {
      return { success: false, message: 'User id must be unique !!' };
    }
    this.USER.push(userDto);
    return { success: true, message: 'User Create Successfully !!' };
  }

  @Post('/update/:id')
  Update(@Param('id') id: string, @Body() userDto: UserDto): Message {
    const findeIndex = this.USER.findIndex((user) => user.id === +id);
    if (findeIndex === -1) {
      return { success: false, message: 'User not found !!' };
    }
    this.USER[findeIndex] = userDto;
    return { success: true, message: `User updated id:${id}` };
  }

  @Delete('/delete/:id')
  delete(@Param('id') id: string): Message {
    const findeindex = this.USER.findIndex((user) => user.id === +id);
    if (findeindex === -1) {
      return { success: false, message: 'User not found !!' };
    }
    const user = this.USER.filter((user) => user.id !== +id);
    this.USER = user;
    return { success: true, message: `User deleted id:${id}` };
  }
}
