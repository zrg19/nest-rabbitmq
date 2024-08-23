import { Injectable } from "@nestjs/common";
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";

@Injectable()
export class ProducerService {
    private client: ClientProxy;

    constructor() {
        this.client = ClientProxyFactory.create({
            transport: Transport.RMQ,
            options: {
                urls: ['amqp://guest:guest@rabbitmq:5672'],
                queue: 'main_queue',
                queueOptions: {
                    durable: false
                }
            }
        });
    }

    async sendMessage(msg: string) {
        return this.client.emit({ cmd: 'message'}, msg);
    } 
}