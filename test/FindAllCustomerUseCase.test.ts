import { expect } from 'chai';
import { FindAllCustomerUseCase } from '../src/application/use-case/find-all-customer/FindAllCustomerUseCase';
import { RepositoryFactory } from '../src/domain/factory/RepositoryFactory';
import { DatabaseConnection } from '../src/infra/database/DatabaseConnection';
import { PrismaConnection } from '../src/infra/database/PrismaConnection';
import { DatabaseFactory } from '../src/infra/factory/DatabaseFactory';

describe('FindAllCustomerUseCase', () => {
  let connection: DatabaseConnection;
  let repositoryFactory: RepositoryFactory;

  beforeEach(() => {
    connection = new PrismaConnection();
    repositoryFactory = new DatabaseFactory(connection);
  });

  it('should be able to find a customer list', async () => {
    // Arrange
    const useCase = new FindAllCustomerUseCase(repositoryFactory);
    // Act
    const result = await useCase.execute();
    // Assert
    expect(result[0].name).to.be.an('string');
  });
});
