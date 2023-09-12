import { Injectable, OnApplicationShutdown, OnModuleInit } from '@nestjs/common';
import { Producer, ProducerRecord, Partitioners } from 'kafkajs';
import { kafka } from 'src/kafka.config';
@Injectable()
export class ProducerService implements OnModuleInit, OnApplicationShutdown {
  private producer: Producer = kafka.producer({createPartitioner: Partitioners.LegacyPartitioner});

  async onModuleInit() {
      this.producer.connect();
  }

  async produce(record: ProducerRecord) {
    this.producer.send(record);
  }

  async onApplicationShutdown(signal?: string) {
    this.producer.disconnect();    
  }
}

