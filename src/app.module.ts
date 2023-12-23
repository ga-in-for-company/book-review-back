import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { BestsellerController } from './bestseller/bestseller.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, UsersController, BestsellerController],
  providers: [AppService],
})
export class AppModule {}
