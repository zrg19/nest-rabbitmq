import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConsumerController } from './controllers/consumer.controller';
import { ProducerService } from './services/producer.service';

@Module({
  imports: [],
  controllers: [AppController, ConsumerController],
  providers: [ProducerService],
})
export class AppModule {}
