import { RepositoryFactory } from '../../../domain/factory/RepositoryFactory';
import { CustomerRepository } from '../../../domain/repository/CustomerRepository';
import { FindAllCustomerOutput } from './FindAllCustomerOutput';

export class FindAllCustomerUseCase {
  private readonly customerRepository: CustomerRepository;

  constructor(readonly repositoryFactory: RepositoryFactory) {
    this.customerRepository = repositoryFactory.createCustomerRepository();
  }

  async execute(): Promise<FindAllCustomerOutput[]> {
    const customers = await this.customerRepository.findAll();
    return customers.map(
      (customer) =>
        new FindAllCustomerOutput(
          customer.id,
          customer.name,
          customer.contacts,
          customer.addresses,
          customer.documents
        )
    );
  }
}
