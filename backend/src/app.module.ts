/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Module, RequestMethod, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { JwtModule } from '@nestjs/jwt';
import { secret } from './utils/constants';
import { join } from 'path';
@Module({
  imports: [
     MongooseModule.forRoot('mongodb://127.0.0.1:27017/Test'),
     JwtModule.register({
      secret,
      signOptions: { expiresIn: '2h' },
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..', 'public'),
    }),
  ],
 
controllers: [AppController],
providers: [AppService],
})

export class AppModule {
  configure(consumer: MiddlewareConsumer) {
  }
}
