import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserService } from './user.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [{ provide: 'UserService', useClass: UserService }],
})
export class AppModule {}
