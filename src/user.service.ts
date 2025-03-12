import { Injectable } from '@nestjs/common';
import { UserDto } from './UserDto';

@Injectable()
export class UserService {
  private USERS: UserDto[] = [];

  createUser(user: UserDto): UserDto {
    if (this.USERS.length > 0) {
      const userNameExists = this.USERS.find(
        (user) => user.username === user.username,
      );
      if (userNameExists) {
        throw new Error('Username already exists');
      }
    }
    this.USERS.push(user);
    return user;
  }

  findAllUser(): UserDto[] {
    if (this.USERS.length === 0) {
      throw new Error(`No users found`);
    }
    return this.USERS;
  }

  findOneUser(id: string): UserDto {
    const user = this.USERS.find((user) => user.id === +id);
    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }
    return user;
  }

  updateUser(id: string, user: UserDto): string {
    const userIndex = this.USERS.findIndex((user) => user.id === +id);
    if (userIndex === -1) {
      throw new Error(`User not exists with id ${id}`);
    }
    this.USERS[userIndex] = user;
    return 'User updated successfully';
  }

  deleteUser(id: string): string {
    const checkUser = this.USERS.find((user) => user.id === +id);
    
    if (!checkUser) {
      throw new Error(`User not exists !`);
    }

    this.USERS = this.USERS.filter((user) => user.id !== +id);

    return `User deleted successfully`;
  }
}
