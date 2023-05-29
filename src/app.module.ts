import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MathModule } from './math/math.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [MathModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
