import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { DatabaseModule } from 'config/database.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { NationModule } from './nation/nation.module';
import { DegreeModule } from './degree/degree.module';
@Module({
  imports: [
    DatabaseModule,
    AuthModule,
    PassportModule,
    ConfigModule.forRoot({ isGlobal: true }),
    UserModule,
    NationModule,
    DegreeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
