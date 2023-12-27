import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { BestsellerController } from './bestseller/bestseller.controller';
import { UsersService } from './users/users.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: process.env.NODE_ENV === 'production' ? '.production.env' : '.development.env',
    }),
  ],
  controllers: [AppController, UsersController, BestsellerController],
  providers: [AppService, UsersService],
})
export class AppModule {}
