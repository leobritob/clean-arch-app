import { RepositoryFactory } from '../../domain/factory/RepositoryFactory';
import { CustomerRepository } from '../../domain/repository/CustomerRepository';
import { PrismaConnection } from '../database/PrismaConnection';
import { CustomerRepositoryDatabase } from '../repository/CustomerRepositoryDatabase';

export class DatabaseFactory implements RepositoryFactory {
  constructor(readonly connection: PrismaConnection) {}

  createCustomerRepository(): CustomerRepository {
    return new CustomerRepositoryDatabase(this.connection);
  }
}
