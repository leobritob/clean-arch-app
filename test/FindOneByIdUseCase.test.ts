import { expect } from 'chai';
import { FindOneByIdUseCase } from '../src/application/use-case/find-one-by-id/FindOneByIdUseCase';
import { RepositoryFactory } from '../src/domain/factory/RepositoryFactory';
import { DatabaseConnection } from '../src/infra/database/DatabaseConnection';
import { PrismaConnection } from '../src/infra/database/PrismaConnection';
import { DatabaseFactory } from '../src/infra/factory/DatabaseFactory';

describe('FindOneByIdUseCase', () => {
  let repositoryFactory: RepositoryFactory;
  let connection: DatabaseConnection;

  beforeEach(() => {
    connection = new PrismaConnection();
    repositoryFactory = new DatabaseFactory(connection);
  });

  it('should be able to find a customer by id', async () => {
    // Arrange
    const useCase = new FindOneByIdUseCase(repositoryFactory);
    const [customer] = await repositoryFactory.createCustomerRepository().findAll();
    const id = customer.id;
    // Act
    const result = await useCase.execute(id);
    // Assert
    expect(result).to.be.an('object');
    expect(result.name).to.be.an('string');
  });
});
