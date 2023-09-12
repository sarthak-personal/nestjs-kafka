import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KafkaModule } from './kafka/kafka.module';
import { ProducerService } from './kafka/producer.service';
import { ConsumerService } from './kafka/consumer.service';
import { TestConsumer } from './test.consumer';

@Module({
  imports: [KafkaModule],
  controllers: [AppController],
  providers: [AppService, ProducerService, ConsumerService, TestConsumer],
})
export class AppModule {}
