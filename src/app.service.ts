import { Injectable } from '@nestjs/common';
import { ProducerService } from './kafka/producer.service';

@Injectable()
export class AppService {
  constructor(private readonly producerService: ProducerService) {}
  async getHello(): Promise<string> {
    await this.producerService.produce({
      topic: 'test-topic',
      messages: [
        { value: 'Hello KafkaJS user!' },
        { value: 'Hello new human!' },
        { value: 'Hello martian!' },
        { value: 'Hello plutonian!' },
        { value: 'Hello boss!' }
      ],
    })
    return 'Hello World!';
  }
}
