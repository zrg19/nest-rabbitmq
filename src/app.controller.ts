import { Controller, Get } from '@nestjs/common';
import { ProducerService } from './services/producer.service';

@Controller()
export class AppController {
  constructor(private readonly producerService: ProducerService) {}

  @Get('send')
  async sendMessage() {
    return this.producerService.sendMessage('Hello, RabbitMQ');
  }
}
