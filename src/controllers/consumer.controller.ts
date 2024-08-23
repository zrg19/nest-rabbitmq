import { Controller } from "@nestjs/common";
import { EventPattern } from "@nestjs/microservices";

@Controller()
export class ConsumerController {
    @EventPattern({ cmd: 'message' })
    async handleMessage(data: string) {
        console.log('Received Message', data);
    }
}