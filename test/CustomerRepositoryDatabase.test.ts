import { expect } from 'chai';
import { randomUUID } from 'crypto';
import { Customer } from '../src/domain/entity/customer/Customer';
import { DatabaseConnection } from '../src/infra/database/DatabaseConnection';
import { PrismaConnection } from '../src/infra/database/PrismaConnection';
import { CustomerRepositoryDatabase } from '../src/infra/repository/CustomerRepositoryDatabase';

describe('CustomerRepositoryDatabase', () => {
  let connection: DatabaseConnection;
  let repository: CustomerRepositoryDatabase;

  beforeEach(() => {
    connection = new PrismaConnection();
    repository = new CustomerRepositoryDatabase(connection);
  });

  it('should be able to return a customer list', async () => {
    // Act
    const customers = await repository.findAll();
    // Assert
    expect(customers.length).to.greaterThan(0);
    expect(customers[0].name).to.be.an('string');
  });

  it('should be able to save a new customer', async () => {
    // Arrange
    const data = new Customer('Mary');
    // Act
    const customer = await repository.save(data);
    // Assert
    expect(customer).to.be.an('object');
    expect(customer.name).to.be.an('string');
  });

  it('should be able to find one customer by an id', async () => {
    // Arrange
    const [customer] = await repository.findAll();
    const id = customer.id;
    // Act
    const result = await repository.findOneById(id);
    // Assert
    expect(result).to.be.an('object');
    expect(result.name).to.be.an('string');
  });

  afterEach(async () => {
    await connection.disconnect();
  });
});
