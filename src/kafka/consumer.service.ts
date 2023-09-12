import { Injectable, OnApplicationShutdown } from '@nestjs/common';
import { Consumer, ConsumerSubscribeTopic, ConsumerRunConfig } from 'kafkajs';
import { kafka } from 'src/kafka.config';
@Injectable()
export class ConsumerService implements OnApplicationShutdown {
  private consumers: Consumer[] = [];

  async onModuleInit() {
  }
  
  async consume(topic: ConsumerSubscribeTopic, config: ConsumerRunConfig) {
    const consumer = kafka.consumer({ groupId: 'test-group' });
    await consumer.connect();
    await consumer.subscribe(topic);
    await consumer.run(config);
    this.consumers.push(consumer);
  }

  async onApplicationShutdown(signal?: string) {
      for (const consumer of this.consumers) {
        await consumer.disconnect();
      }
  }
}

