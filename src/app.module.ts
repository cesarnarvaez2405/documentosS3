import { Module } from '@nestjs/common';
import { DocsModule } from './docs/docs.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development',
    }),
    DocsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
