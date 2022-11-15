import { PrismaClient } from '@prisma/client';
import { DatabaseConnection } from './DatabaseConnection';

export class PrismaConnection implements DatabaseConnection {
  constructor(readonly connection = new PrismaClient()) {}

  async connect(): Promise<void> {
    await this.connection.$connect();
  }

  async disconnect(): Promise<void> {
    await this.connection.$disconnect();
  }
}
