import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserDto } from './UserDto';
import { UserService } from './user.service';

@Controller('user')
export class AppController {
  constructor(private _userService: UserService) {}
  private USER: UserDto[] = [];

  @Get('/findAll')
  findAll() {
    return this._userService.findAllUser();
  }

  @Get('/findOne/:id')
  findOne(@Param('id') id: string) {
    return this._userService.findOneUser(id);
  }

  @Post('/create')
  create(@Body() userDto: UserDto) {
    return this._userService.createUser(userDto);
  }

  @Post('/update/:id')
  Update(@Param('id') id: string, @Body() userDto: UserDto) {
    return this._userService.updateUser(id, userDto);
  }

  @Delete('/delete/:id')
  delete(@Param('id') id: string) {
    return this._userService.deleteUser(id);
  }
}
