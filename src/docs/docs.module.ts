import { Module } from '@nestjs/common';
import { DocsService } from './docs.service';
import { DocsController } from './docs.controller';
import { DatabaseModule } from 'src/config/configOrm.module';
import { docsProviders } from './docs.providers';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    // ThrottlerModule.forRootAsync({
    //   useFactory: (configService: ConfigService) => ({
    //     ttl: configService.getOrThrow(process.env.UPLOAD_RATE_TTL),
    //     limit: configService.getOrThrow(process.env.UPLOAD_RATE_LIMIT),
    //   }),
    //   inject: [ConfigService],
    // }),
    DatabaseModule,
  ],
  controllers: [DocsController],
  providers: [
    ...docsProviders,
    DocsService,
    // { provide: APP_GUARD, useClass: ThrottlerGuard },
  ],
})
export class DocsModule {}
