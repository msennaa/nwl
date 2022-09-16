import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdsModule } from './ads/ads.module';

@Module({
  imports: [
    AdsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345678',
      database: 'nextjs',
      entities: ['dist/**/*.model.js'],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
