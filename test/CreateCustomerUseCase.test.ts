import { expect } from 'chai';
import { CreateCustomerUseCase } from '../src/application/use-case/create-customer/CreateCustomerUseCase';
import { CreateCustomerDto } from '../src/application/use-case/create-customer/CreateCustomerDto';
import { Documents } from '../src/domain/entity/customer/Documents';
import { RepositoryFactory } from '../src/domain/factory/RepositoryFactory';
import { DatabaseConnection } from '../src/infra/database/DatabaseConnection';
import { PrismaConnection } from '../src/infra/database/PrismaConnection';
import { DatabaseFactory } from '../src/infra/factory/DatabaseFactory';

describe('CreateCustomerUseCase', () => {
  let connection: DatabaseConnection;
  let repositoryFactory: RepositoryFactory;

  beforeEach(() => {
    connection = new PrismaConnection();
    repositoryFactory = new DatabaseFactory(connection);
  });

  it('should be able to create a new customer as a person', async () => {
    // Arrange
    const createCustomerUseCase = new CreateCustomerUseCase(repositoryFactory);
    const customerDto = new CreateCustomerDto();
    customerDto.name = 'John';
    customerDto.documents = [{ description: Documents.CPF, document: '412.291.020-00' }];
    customerDto.addresses = [];
    customerDto.addresses.push({
      street: 'Rua',
      number: '123',
      neighborhood: 'Centro',
      city: 'Ribeirão Preto',
      state: 'SP',
      country: 'Brazil',
      complement: 'Apto 12',
    });
    customerDto.addresses.push({
      street: 'Outra Rua',
      number: '219',
      neighborhood: 'Jardim',
      city: 'Ribeirão Preto',
      state: 'SP',
      country: 'Brazil',
    });
    customerDto.contacts = [];
    customerDto.contacts.push({
      email: 'john@email.com',
      phone: '+5511999999999',
    });
    customerDto.contacts.push({
      email: 'hello@email.com',
      phone: '+5511999999998',
    });
    // Act
    const res = await createCustomerUseCase.execute(customerDto);
    // Assert
    expect(res).to.be.an('object');
    expect(res.name).to.be.an('string');
  });

  it('should be able to create a new customer as a business', async () => {
    // Arrange
    const createCustomerUseCase = new CreateCustomerUseCase(repositoryFactory);
    const customerDto = new CreateCustomerDto();
    customerDto.name = 'Company ABC';
    customerDto.documents = [{ description: Documents.CNPJ, document: '02.948.667/0001-46' }];
    customerDto.addresses = [];
    customerDto.addresses.push({
      street: 'Rua',
      number: '123',
      neighborhood: 'Centro',
      city: 'Ribeirão Preto',
      state: 'SP',
      country: 'Brazil',
      complement: 'Apto 12',
    });
    customerDto.contacts = [];
    customerDto.contacts.push({
      email: 'contact@companyabc.com',
      phone: '+5511999999999',
    });
    // Act
    const res = await createCustomerUseCase.execute(customerDto);
    // Assert
    expect(res).to.be.an('object');
    expect(res.name).to.be.an('string');
  });

  it('should be able to create a new customer with empty address', async () => {
    // Arrange
    const createCustomerUseCase = new CreateCustomerUseCase(repositoryFactory);
    const customerDto = new CreateCustomerDto();
    customerDto.name = 'Company XPTO';
    customerDto.documents = [{ description: Documents.CNPJ, document: '29.320.457/0001-65' }];
    // Act
    const res = await createCustomerUseCase.execute(customerDto);
    // Assert
    expect(res).to.be.an('object');
    expect(res.name).to.be.an('string');
  });
});
