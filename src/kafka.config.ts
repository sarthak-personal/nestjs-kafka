import { Kafka } from 'kafkajs';

// update config as per your kafka credentials
export const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['pkc-9q8rv.ap-south-2.aws.confluent.cloud:9092'],
  ssl: true,
  sasl: {
    mechanism: 'plain',
    username: '3MJSTLL4UC75QWTA',
    password:
      'yA5Wn56a4pHladm3O1yLHejQ8k6hIuGQL86fcAzzxXp/qZO3DZdRBybiFuuwGhcr',
  },
});
